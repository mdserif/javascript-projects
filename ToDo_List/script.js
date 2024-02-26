let item=document.querySelector("#item")
let toDoBox=document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event){
        // console.log(event)
        if(event.key=="Enter"){
            //console.log(this.value)
            addToDo(this.value)
            this.value=""
        }
 
    }
)

let addToDo =(item)=>{
    let listItem=document.createElement("li");
    listItem.innerHTML= `
    
    ${item}
    <i class="fas fa-times"></i>

    `;
    

    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}