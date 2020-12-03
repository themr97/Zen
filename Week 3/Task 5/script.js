let request = new XMLHttpRequest()
let url = 'https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json'
request.open('GET', url, true)
request.send()
request.onload = function () {
    let jsondata = JSON.parse(this.response)
    let data = {
        'querydata': jsondata,
        'page': 1,
        'rows': 10,
        'columns': 2,
        'window': 4,
    }

    // creating DOM
    createPage();

    function pagination(querset, page, rows) {
        let start = (page - 1) * rows;
        let end = start + rows;
        let trim_data = querset.slice(start, end)
        let pages = Math.round(querset.length / rows);
        return {
            'queryset': trim_data,
            'pages': pages,
        }
    }

    function navbuttons(pages) {
        let nav = document.getElementById("nav")
        var maxLeft = (data.page - Math.floor(data.window / 2))
        var maxRight = (data.page + Math.floor(data.window / 2))

        if (maxLeft < 1) {
            maxLeft = 1
            maxRight = data.window
        }

        if (maxRight > pages) {
            maxLeft = pages - (data.window - 1)

            if (maxLeft < 1) {
                maxLeft = 1
            }
            maxRight = pages
        }
        var e = document.querySelector("#nav");
        var child = e.lastElementChild;
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }

        for (var page = maxLeft; page <= maxRight; page++) {
            let element = document.createElement('li')
            element.setAttribute('class', 'page-item')
            let link = document.createElement('button')
            link.setAttribute('class', 'page-link')
            link.setAttribute('value', `${page}`)
            link.innerText = `${page}`;
            element.appendChild(link)
            nav.appendChild(element)
        }

        if (data.page != 1) {
            let element = document.createElement('li')
            element.setAttribute('class', 'page-item')
            let link = document.createElement('button')
            link.setAttribute('class', 'page-link')
            link.setAttribute('value', "1")
            link.innerText = "First";
            element.appendChild(link)
            nav.appendChild(element)
        }

        if (data.page != pages) {
            let element = document.createElement('li')
            element.setAttribute('class', 'page-item')
            let link = document.createElement('button')
            link.setAttribute('class', 'page-link')
            link.setAttribute('value', `${pages}`)
            link.innerText = "Last";
            element.appendChild(link)
            nav.appendChild(element)
        }
        [...document.querySelectorAll('.page-link')].forEach(function (item) {
            item.addEventListener('click', function () {

                var e = document.querySelector("#container");
                var child = e.lastElementChild;
                while (child) {
                    e.removeChild(child);
                    child = e.lastElementChild;
                }

                data.page = Number(this.value)

                createPage()
            });
        });

    }

    function createPage() {
        let outputdata = pagination(data.querydata, data.page, data.rows)
        let filter_list = outputdata.queryset
        for (let i = 0; i <= data.rows; i += data.columns) {
            let row_data = filter_list.slice(i, i + data.columns)
            let row = document.createElement('div')
            row.setAttribute('class', 'row')
            for (j of row_data) {
                let mycol = document.createElement('div')
                mycol.setAttribute('class', 'col-4 justify-content-center')
                mycol.setAttribute('style', 'margin:auto;padding:50px;')
                mycol.innerHTML = `<p>ID - ${j['id']}<br>Name - ${j['name']}<br>Email - ${j['email']}</p>`;
                row.appendChild(mycol)
            }
            let container = document.getElementById("container")
            container.appendChild(row)
        }
        navbuttons(outputdata.pages)
    }
}