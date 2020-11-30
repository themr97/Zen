// DOM CREATION

var div1 = document.createElement("div");

div1.setAttribute("class","container");
div1.style.display = 'flex';
div1.style.justifyContent = 'center';
div1.style.marginTop = '20%';

document.body.append(div1);

var h = document.createElement("h1");
h.setAttribute("id","result");

div1.appendChild(h);


// MAIN JS

setTimeout(() => {
    h.innerText = '10';
    setTimeout(() => {
        h.innerText = '9';
        setTimeout(() => {
            h.innerText = '8';
            setTimeout(() => {
                h.innerText = '7';
                setTimeout(() => {
                    h.innerText = '6';
                    setTimeout(() => {
                        h.innerText = '5';
                        setTimeout(() => {
                            h.innerText = '4';
                            setTimeout(() => {
                                h.innerText = '3';
                                setTimeout(() => {
                                    h.innerText = '2';
                                    setTimeout(() => {
                                        h.innerText = '1';
                                        setTimeout(() => {
                                            h.innerText = 'Happy Independence day'
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);