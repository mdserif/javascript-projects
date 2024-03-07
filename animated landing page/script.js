const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// let a= document.querySelector(".elem1")
// console.log(a)
// let b=a.getAttribute("data-video")
// console.log(b)


page3animation=()=>{
    let container=document.querySelector("#elem-container")
    let fixed=document.querySelector("#fixed-image")

    container.addEventListener("mouseover",function(){
        fixed.style.display="block"
    })
    container.addEventListener("mouseleave",()=>{
        fixed.style.display="none"
    })

    let elems=document.querySelectorAll(".elem")
    elems.forEach(element => {
        element.addEventListener("mouseover",()=>{
            let image=element.getAttribute("data-image")
            fixed.style.backgroundImage=`url(${image})`
        })
    });

}

page3animation()
