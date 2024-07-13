// 1
var rotate1= false 
var rotate2 = false 
var rotate3 = false 
var rotate4 = false 
var rotate5= false 
var rotate6 = false 
var rotate7 = false 
var rotate8 = false 
var rotate9 = false 
var rotate10 = false 



var arr = []
function add() {
    input = document.getElementById("inputne").value * 1
 
    arr.push(input)

    document.getElementById("showne").innerHTML = arr
  
}




function click1() {
    var change = document.querySelector(".show1")
    if (change.style.display === "none")
    {

       change.style.display  = "block"
    }
    else { change.style.display  = "none"}
    var arrow = document.querySelector(".fa.fa-arrow-circle-up.rotate1")
    rotate1 = !rotate1 
    if (rotate1) {
        arrow.style.transform = "rotate(180deg)"
    }
    else {     arrow.style.transform = "rotate(0)"}
}




// 2



function click2() {
    var change = document.querySelector(".show2")
    if (change.style.display === "none")
    {

       change.style.display  = "block"
    }
    else { change.style.display  = "none"}   
    var arrow = document.querySelector(".fa.fa-arrow-circle-up.rotate2")
    rotate2 = !rotate2 
    if (rotate2) {
        arrow.style.transform = "rotate(180deg)"
    }
    else {     arrow.style.transform = "rotate(0)"}
}



// 3

function click3() {
    var change = document.querySelector(".show3")
    if (change.style.display === "none")
    {

       change.style.display  = "block"
    }
    else { change.style.display  = "none"}

    var arrow = document.querySelector(".fa.fa-arrow-circle-up.rotate3")
    rotate3 = !rotate3
    if (rotate3) {
        arrow.style.transform = "rotate(180deg)"
    }
    else {     arrow.style.transform = "rotate(0)"}
}




// 4
function click4() {
    var change = document.querySelector(".show4")
    if (change.style.display === "none")
    {

       change.style.display  = "block"
    }
    else { change.style.display  = "none"}

    var arrow = document.querySelector(".fa.fa-arrow-circle-up.rotate4")
    rotate4 = !rotate4 
    if (rotate4) {
        arrow.style.transform = "rotate(180deg)"
    }
    else {     arrow.style.transform = "rotate(0)"}
}


// 5

function click5() {
    var change = document.querySelector(".show5")
    if (change.style.display === "none")
    {

       change.style.display  = "block"
    }
    else { change.style.display  = "none"}

    var arrow = document.querySelector(".fa.fa-arrow-circle-up.rotate5")
    rotate5 = !rotate5 
    if (rotate5) {
        arrow.style.transform = "rotate(180deg)"
    }
    else {     arrow.style.transform = "rotate(0)"}
}



// 6

function click6() {
    var change = document.querySelector(".show6")
    if (change.style.display === "none")
    {

       change.style.display  = "block"
    }
    else { change.style.display  = "none"}


    var arrow = document.querySelector(".fa.fa-arrow-circle-up.rotate6")
    rotate6 = !rotate6 
    if (rotate6) {
        arrow.style.transform = "rotate(180deg)"
    }
    else {     arrow.style.transform = "rotate(0)"}
}




// 7 
function click7() {
    var change = document.querySelector(".show7")
    if (change.style.display === "none")
    {

       change.style.display  = "block"
    }
    else { change.style.display  = "none"}

    var arrow = document.querySelector(".fa.fa-arrow-circle-up.rotate7")
    rotate7 = !rotate7 
    if (rotate7) {
        arrow.style.transform = "rotate(180deg)"
    }
    else {     arrow.style.transform = "rotate(0)"}
}




// 8

function click8() {
    var change = document.querySelector(".show8")
    if (change.style.display === "none")
    {

       change.style.display  = "block"
    }
    else { change.style.display  = "none"}

    var arrow = document.querySelector(".fa.fa-arrow-circle-up.rotate8")
    rotate8 = !rotate8 
    if (rotate8) {
        arrow.style.transform = "rotate(180deg)"
    }
    else {     arrow.style.transform = "rotate(0)"}
}
// 9

function click9() {
    var change = document.querySelector(".show9")
    if (change.style.display === "none")
    {

       change.style.display  = "block"
    }
    else { change.style.display  = "none"}

    var arrow = document.querySelector(".fa.fa-arrow-circle-up.rotate9")
    rotate9 = !rotate9 
    if (rotate9) {
        arrow.style.transform = "rotate(180deg)"
    }
    else {     arrow.style.transform = "rotate(0)"}
}
// 10

function click10() {
    var change = document.querySelector(".show10")
    if (change.style.display === "none")
    {

       change.style.display  = "block"
    }
    else { change.style.display  = "none"}

    var arrow = document.querySelector(".fa.fa-arrow-circle-up.rotate10")
    rotate10 = !rotate10 
    if (rotate10) {
        arrow.style.transform = "rotate(180deg)"
    }
    else {     arrow.style.transform = "rotate(0)"}
}


// tinh toan


// 1

// document.getElementById("tinhtong").onclick = function() {
   
//  var  result = arr.reduce((total,number) =>{
//     return  total + number
//   })
  
// document.getElementById("showSoDuong").innerHTML = result

// }



// 2
arrTry = [-1, 0 ,1 ,2,10]
// document.getElementById("dem").onclick = function() {
arrin = []
for (index = 0; index < arrTry.length; index++) {
 var   result = arrTry[index]
 if (result >= 1) {
    arrin.push(result)
 
// document.getElementById("showDemSoDuong").innerHTML = index
     
 }
 for (indexne = 0; indexne < arrin.length; index++) {
    console.log(indexne)
 }
}


//xciansdknasdkasdasdasdasdasdasdasd

