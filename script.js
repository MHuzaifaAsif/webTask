let Listbtn= document.getElementsByTagName("LI");
var i;
for(i = 0 ; i < Listbtn.length ; i++){
    let span = document.createElement("span")
    let text = document.createTextNode("\ubd07")
    span.className = "close";
    Listbtn[i].appendChild(span)
}
let close = document.getElementsByClassName("close");
var i;
for(i=0 ;i < close.length ; i++)
{
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}
let btn = document.querySelector("ul");
btn.addEventListener('click' , function(ev)
{
    if(ev.target.tagname === "LI")
    {
        ev.target.classList.toggle("checked");
    }
},false);
