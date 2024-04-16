let trendFood = document.querySelectorAll(".trendFood");
let foodCard = document.querySelectorAll(".foodCard");

let count = 0;
console.log(trendFood);

trendFood.forEach((imgs, index)=>{
    imgs.style.left=`${index*100}%`;
})


const myFun  = ( ) =>{
    trendFood.forEach((curImg)=>{
        curImg.style.transform=`translateX(-${count * 100}%)`
    })

}

setInterval(()=>{
    count++;
    if(count == trendFood.length){
        count=0
    }
    myFun()
},4000)


// food Detail 

foodCard.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon"  class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
       <h2>Food Details</h2>
       <p>This food is very light and very tasty you can order this and try our delicious food <br> Thank You</p>
        `
        document.querySelector("body").appendChild(div)
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove();
        })
    })
})