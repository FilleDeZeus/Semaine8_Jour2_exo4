//EXERCICE 1 

let input = document.getElementsByTagName('input')[0];
//let input = document.querySelectorAll('input');


input.addEventListener('focus',()=>{
    input.style.background = "blue";
})

//EXERCICE 2
let input2 = document.getElementsByTagName('input')[1];
input2.onfocus = function () { this.style.background = "blue";}
// input2.addEventListener('focus',()=>{
//     input2.style.background = "blue";
// })
input2.addEventListener('focusout',()=>{
    input2.style.background = "none";
})

//EXERCICE 3

let para1 = document.getElementsByClassName('premierParagraphe')[0];
let para2 = document.getElementsByClassName('secondParagraphe')[0];
let para3 = document.getElementsByClassName('dernierParagraphe')[0];
let button = document.getElementsByClassName('buttonExo')[0];

button.addEventListener('click',()=>{
    para1.innerHTML += para2.innerHTML;
    para3.innerHTML += para2.innerHTML;
})


//EXERCICE 4
let input3 =  document.getElementsByTagName('input')[2];
let button2 = document.getElementsByClassName('buttonExo')[1];

button2.addEventListener('click',()=>{
    document.querySelector('p#exo4').innerHTML = input3.value;
})


//EXERCICE 5
let para4 = document.querySelectorAll("p")[4];
let button3 = document.getElementsByClassName('btn')[2];

button3.onclick = function () {
    document.getElementsByTagName("img")[0].src = para4.innerHTML.substring(10);
}
// button3.addEventListener("click",()=>{
//     document.getElementsByTagName("img")[0].src = para3.innerHTML.substring(10);
// })
console.log(button3);

//EXERCICE 6
let tart = document.getElementsByTagName('img')[1];

let tart2 =document.getElementsByTagName('img')[2];

tart2.onclick = function () { let chemin = tart.src; 
tart2.onclick = function () {tart2.src = chemin;
}}

// tart.addEventListener('click',()=>{
//     let chemin = tart.src;
//     tart2.addEventListener('click',()=>{
//         tart2.src = chemin;
//     })
// })

//EXERCICE 7
let para5 = document.getElementsByTagName("p")[5];
let para6 = document.getElementsByTagName("p")[6];
let change1 = para6.innerHTML;
let change2 = para5.innerHTML;

let button4 = document.getElementsByClassName('btn')[3];

button4.onclick = function () { para5.innerHTML = change1; para6.innerHTML = change2;}
// button4.addEventListener('click',()=>{
//     para5.innerHTML = change1;
//     para6.innerHTML = change2;
// })