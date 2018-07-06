var addbtn = document.getElementById('btnadd');
var itemadd = document.getElementById('additem');
var items = document.getElementById('items');
var searchfield = document.getElementById('searchfld');

addbtn.addEventListener('click', additem);
searchfield.addEventListener('input', searchinput);

function additem() {
    console.log("Item added");
    items.innerHTML += `<li class="list-group-item">${itemadd.value}</li>`;
    itemadd.value="";

}
var ul = document.getElementById('items');
var list = ul.getElementsByTagName('li');
function searchinput(e) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].innerHTML.toUpperCase().indexOf(searchfield.value.toUpperCase()) > -1) {

            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }

}
