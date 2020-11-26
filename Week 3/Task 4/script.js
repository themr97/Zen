// Main container

var con = myEle("div", "", "", "container");




//header
var hdb = document.createElement("h2");
hdb.setAttribute("class", "display-2");
hdb.innerText = "Form";
con.appendChild(hdb);



// Form creation

var form = myEle("form");
form.setAttribute("class","form");
form.setAttribute("id", "form");


con.appendChild(form);

var form1 = myEle("div", "", "", "form-row");
form1.style.marginTop = "10%";
form.appendChild(form1);

// Name Creation inline with first name and last name including label tag


//First Name
var div1 = myEle("div", "", "", "form-group col-md-6");
form1.appendChild(div1);

var labname = myEle("label");
labname.setAttribute("for", "fname");
labname.innerText = "First Name";
div1.appendChild(labname);

var foname = myEle("input", "text", "", "form-control");
foname.setAttribute("id", "fname");
foname.required = true;
div1.appendChild(foname);




//Last Name
var div2 = myEle("div", "", "", "form-group col-md-6");
form1.appendChild(div2);

var labfname = myEle("label");
labfname.setAttribute("for", "lname");
labfname.innerText = "Last Name";
div2.appendChild(labfname);

var loname = myEle("input", "text", "", "form-control");
loname.setAttribute("id", "lname");
loname.required = true;
div2.appendChild(loname);


// Address Creation

var div3 = myEle("div", "", "", "form-row");
form.appendChild(div3);

var div4 = document.createElement("div");
div4.setAttribute("class", "col-md-10");
div3.appendChild(div4);

var addlab = document.createElement("label");
addlab.setAttribute("for", "address");
addlab.innerText = "Full Address";
div4.appendChild(addlab);

var addre = myEle("input", "text", "", "form-control");
addre.setAttribute("id", "address");
addre.setAttribute("placeholder", "Apartment 1234 Main St");
addre.required = true;
div4.appendChild(addre);

// ZIP CODE
var div5 = document.createElement("div");
div5.setAttribute("class", "col-md-2")
div3.appendChild(div5);


var ziplab = document.createElement("label");
ziplab.setAttribute("for", "zip");
ziplab.innerText = "ZIP Code"
div5.appendChild(ziplab);

var zipre = myEle("input", "text", "", "form-control");
zipre.setAttribute("id", "zip");
zipre.required = true;
div5.appendChild(zipre);


// GENDER ROW
var div6 = document.createElement("div");
div6.setAttribute("class", "form-group")
div6.style.marginTop = "20px"
div6.style.marginBottom = "20px"
div6.innerHTML = `Select Gender <br>`
form.appendChild(div6);

// MALE
var div7 = document.createElement("div");
div7.setAttribute("class", "form-check form-check-inline")
div6.appendChild(div7);


var fomale = myEle("input", "radio", "Male", "form-check-input");
fomale.setAttribute("name", "gender");
fomale.setAttribute("id", "male");
fomale.required = true;
div7.appendChild(fomale);

var malelab = document.createElement("label");
malelab.setAttribute("class", "form-check-label")
malelab.setAttribute("for", "male");
malelab.innerText = "Male"
div7.appendChild(malelab);

// FEMALE
var div8 = document.createElement("div");
div8.setAttribute("class", "form-check form-check-inline");
div6.appendChild(div8);


var fofemale = myEle("input", "radio", "Female", "form-check-input");
fofemale.setAttribute("name", "gender");
fofemale.setAttribute("id", "female");
div8.appendChild(fofemale);

var femalelab = document.createElement("label");
femalelab.setAttribute("class", "form-check-label")
femalelab.setAttribute("for", "female");
femalelab.innerText = "Female"
div8.appendChild(femalelab);


//Choice of FOOD

var div9 = document.createElement("div");
div9.setAttribute("class", "form-group")
div9.innerHTML = `Choice of Food (Select atleast two!) <br>`
form.appendChild(div9);



// INDIAN

var div10 = document.createElement("div");
div10.setAttribute("class", "form-check form-check-inline")
div9.appendChild(div10);

var indchk = myEle("input", 'checkbox', 'Indian', 'form-check-input ');
var indlab = myEle("label", "", "", "form-check-label");
indchk.setAttribute("name", "c1")
indlab.innerText = "Indian"
div10.appendChild(indchk);
div10.appendChild(indlab);

// ITALIAN
var div11 = document.createElement("div");
div11.setAttribute("class", "form-check form-check-inline")
div9.appendChild(div11);

var itachk = myEle("input", 'checkbox', 'Italian', 'form-check-input');
var italab = myEle("label", "", "", "form-check-label");
itachk.setAttribute("name", "c1")
italab.innerText = "Italian"
div11.appendChild(itachk);
div11.appendChild(italab)

// CHINISE
var div12 = document.createElement("div");
div12.setAttribute("class", "form-check form-check-inline")
div9.appendChild(div12);

var chichk = myEle("input", 'checkbox', 'Chinese', 'form-check-input ');
var chilab = myEle("label", "", "", "form-check-label");
chichk.setAttribute("name", "c1")
chilab.innerText = "Chinese"
div12.appendChild(chichk);
div12.appendChild(chilab)

//AMERICAN
var div13 = document.createElement("div");
div13.setAttribute("class", "form-check form-check-inline")
div9.appendChild(div13);

var americhk = myEle("input", 'checkbox', 'American', 'form-check-input');
var amerilab = myEle("label", "", "", "form-check-label");
americhk.setAttribute("name", "c1")
amerilab.innerText = "American"
div13.appendChild(americhk);
div13.appendChild(amerilab)

// THAI
var div14 = document.createElement("div");
div14.setAttribute("class", "form-check form-check-inline")
div9.appendChild(div14);

var thaichk = myEle("input", 'checkbox', 'Thai', 'form-check-input');
var thailab = myEle("label", "", "", "form-check-label");
thaichk.setAttribute("name", "c1")
thailab.innerText = "Thai"
div14.appendChild(thaichk);
div14.appendChild(thailab)


// STATE AND COUNTRY

var div15 = myEle("div", "", "", "form-row");
form.appendChild(div15);

var div16 = document.createElement("div");
div16.setAttribute("class", "col-md-4")
div15.appendChild(div16);

var statelab = document.createElement("label");
statelab.setAttribute("for", "state");
statelab.innerText = "State"
div16.appendChild(statelab);

var statere = myEle("input", "text", "", "form-control");
statere.setAttribute("id", "state");
statere.required = true;
div16.appendChild(statere);

// ZIP CODE
var div17 = document.createElement("div");
div17.setAttribute("class", "col-md-2")
div15.appendChild(div17);


var citylab = document.createElement("label");
citylab.setAttribute("for", "city");
citylab.innerText = "City"
div17.appendChild(citylab);

var cityre = myEle("input", "text", "", "form-control");
cityre.setAttribute("id", "city");
cityre.required = true;
div17.appendChild(cityre);


var butt = myEle("button", "submit", "Submit", "btn btn-primary")

butt.style.marginTop = "20px"

form.appendChild(butt);


// TABLE


var tab = document.createElement('table');
tab.setAttribute("class", "table");
tab.setAttribute("id", "tab")
tab.style.marginTop = "20px"
con.appendChild(tab)

var thea = document.createElement('thead');
tab.appendChild(thea)

var mtr = document.createElement('tr');
thea.appendChild(mtr);

var th1 = document.createElement('th');
th1.innerHTML = 'First Name'
th1.scope = 'col';
mtr.appendChild(th1);

var th2 = document.createElement('th');
th2.innerHTML = 'Last Name';
th2.scope = 'col';
mtr.appendChild(th2)

var th3 = document.createElement('th');
th3.innerHTML = 'Address'
th3.scope = 'col';
mtr.appendChild(th3)

var th5 = document.createElement('th');
th5.innerHTML = 'Zip';
th5.scope = 'col';
mtr.appendChild(th5);

var th6 = document.createElement('th');
th6.innerHTML = 'Gender'
th6.scope = 'col';
mtr.appendChild(th6)

var th7 = document.createElement('th');
th7.innerHTML = 'Food'
th7.scope = 'col-2';
mtr.appendChild(th7)

var th7 = document.createElement('th');
th7.innerHTML = 'State'
th7.scope = 'col';
mtr.appendChild(th7)

var th7 = document.createElement('th');
th7.innerHTML = 'City'
th7.scope = 'col';
mtr.appendChild(th7)

document.body.append(con);

// Elements creation function
function myEle(elem, elemType = ' ', elemValue = ' ', elemClass = '') {
    var element = document.createElement(elem);
    element.setAttribute('type', elemType)
    element.setAttribute('value', elemValue)
    element.setAttribute('class', elemClass);
    element.innerText = elemValue;
    return element
}


// Validate atleast 2 food select

// prevent form refresh
var form1 = document.getElementById("form");

function handleForm(event) {
    event.preventDefault();
}
form1.addEventListener('submit', handleForm);

// Radio Value get

function getRadioVal(form, name) {
    var val = [];
    var radios = form.elements[name];

    // loop through list of radio buttons
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            val = radios[i].value; // if so, hold its value in val
        }
    }
    return val;
}



    // main function
    butt.onclick = function() {

        var val = getRadioVal( document.getElementById('form'), 'gender' );
        var check = document.getElementsByName('c1');

        //Taking Checkbox value as well as checking if user has selected 2 food
        var count = 0;
        var item = [];
        for(i=0;i<check.length;i++){
            if(check[i].checked){
                count++;
                item += ' ' + check[i].value;
            }
        }
        if(count == 1 || count == 0){
            alert("Please select atleast 2 Food")
        }
        else{
            let fname = document.getElementById('fname').value
            let lname = document.getElementById('lname').value
            let address1 = document.getElementById('address').value
            let pincode = document.getElementById('zip').value
            let state = document.getElementById('state').value
            let city = document.getElementById('city').value
    
            let row = document.createElement('tr')
            let table = document.getElementById("tab")
    
            let firstname = document.createElement('td')
            firstname.innerText = `${fname}`
            row.appendChild(firstname)
    
            let lastname = document.createElement('td')
            lastname.innerText = `${lname}`
            row.appendChild(lastname)
    
            let address_value = document.createElement('td')
            address_value.innerText = `${address1}`
            row.appendChild(address_value)
    
            let pincode_value = document.createElement('td')
            pincode_value.innerText = `${pincode}`
            row.appendChild(pincode_value)
    
            let gender_value = document.createElement('td')
            gender_value.innerText = `${val}`
            row.appendChild(gender_value)
    
            let food_value = document.createElement('td')
            food_value.innerText = `${item}`
            row.appendChild(food_value)
    
            let state_value = document.createElement('td')
            state_value.innerText = `${state}`
            row.appendChild(state_value)
    
            let city_value = document.createElement('td')
            city_value.innerText = `${city}`
            row.appendChild(city_value)
    
            table.appendChild(row)
            localStorage.setItem('data', null)
        }
       
    }