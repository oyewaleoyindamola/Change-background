const main = document.querySelector(".main")
const background = document.querySelector(".background")
const btn = document.querySelector(".btn")

// rgb(27, 27, 209);

// value1, value2, value3

// hex = rgb(value1, value2, value3)

function getRandBtwNineNineNine(){
let numArray=[]
for (let i = 0; i < 999; i++) {
    numArray.push(Math.floor(Math.random()*999))
}
    return numArray
}

console.log(getRandBtwNineNineNine());


let rgbValue = []

for (let index = 0; index < 3; index++) {
    const gg =rgbValue.push(getRandBtwNineNineNine())
    console.log(gg)
}


let colorArr = [1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"] 

btn.addEventListener("click", function() {

 let hexagonal = "rgb(20,333,222)";

    for (i =0; i<6; i++){
        hexagonal +=colorArr[7]
    }
    console.log(hexagonal);

    // main.style.backgroundColor = hexagonal
    // background.textContent = hexagonal
    // background.style.color = hexagonal
    // btn.style.backgroundColor = hexagonal
})