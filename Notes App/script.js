const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}

createbtn.addEventListener("click", ()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className ="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src = "delete icon.png";
    notescontainer.appendChild(inputbox).appendChild(img);


})
 notescontainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName ==="p"){
        notes =document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
 })