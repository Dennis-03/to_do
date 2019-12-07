// SIDE NAV 

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// DROPDOWN 

function drop_s() {
    document.getElementById("sort").classList.toggle("show");
}

function drop_f() {
    document.getElementById("filter").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("drop-cont");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const list = document.getElementById("main");

const input = document.getElementById("add_todo");

const element = document.getElementById("element");

function addToDo(toDo) {
    const text = '<div><i class = "fa fa-check-circle fa-lg"></i><span>' + toDo + '</span><div class ="icon-d"><i class = "fa fa-trash fa-2x"></i></div></div> ';
    const position = "afterbegin";
    list.insertAdjacentHTML(position, text);
}

document.addEventListener("keyup", function (even) {
    if (event.keyCode == 13) {
        const toDo = input.value;

        if (toDo) {
            addToDo(toDo);
        }
        input.value = "";
    }

});

// addToDo(" DRINK free");
// addToDo(" DRINK paid");