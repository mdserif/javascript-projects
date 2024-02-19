const changeColor = ()=>{
    const randomNum=Math.floor(Math.random()*16777215);
    const randomHex="#"+ randomNum.toString(16) // to string converts randomNum into 16 base hexcode
    document.body.style.backgroundColor=randomHex;
    document.getElementById("hexcode").innerText=randomHex;
    navigator.clipboard.writeText(randomHex);// adding the hexcode into clipboard

}

// event call
document.getElementById("btn").addEventListener(
    "click",changeColor
);

// intial call
changeColor()

