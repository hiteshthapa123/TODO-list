let input = document.getElementById('item');
let text = document.getElementById('Text');


function add(){
if(input.value == ""){
    alert("Please Enter your Task")
}
else{
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    input.value = "";

    newEle.querySelector('i').addEventListener('click', remove );
    function remove (){
        newEle.remove();
    }
}
}