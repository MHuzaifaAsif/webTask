let listItems = document.getElementsByTagName("LI");
for (let i = 0; i < listItems.length; i++) {
    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    listItems[i].appendChild(span);
}

let closeButtons = document.getElementsByClassName("close");
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector("ul");
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle("checked");
    }
}, false);

function newItem() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("items").appendChild(li);
    }
    document.getElementById("input").value = "";
    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
