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
// arrTry = [-1, 0 ,1 ,2]
// // document.getElementById("dem").onclick = function() {
// count1 = 0
// for ( var index = 0; index < arrTry.length; index++) {
//    var results = arrTry[index]
//    if (results >= 1) {
//     count1++

// }

// }
// console.log("cac so duong la", count)



// 2 
// document.getElementById("dem").onclick = function() {

//    var count = 0
//     for (var index = 0; index <= arr.length; index++) {
//        var resultDem = arr[index]
//        if (resultDem >= 1) {
//        count++
//        }
    
//     }
//     document.getElementById("showDemSoDuong").innerHTML = count
// }





// 3 super easy

// var arrTry = [1,2,3] 
// let min = Math.min(...arrTry)
// console.log("so nho nhat la", min)



// 3 interesting 


// document.getElementById("Min").onclick = function() {
//     let arrMin = arr
//     console.log("so nho nhat la", findMin(arrnetroi))
//     document.getElementById("result3").innerHTML = findMin(arrnetroi)
// }
// function findMin(number) {
    
//     let min = number[0]
//     for(var index = 0; index < number.length; index++) 
//     if (number[index] < min) {
//         min = number[index]
//     }
//     return min
// }



// 4 super
//  var arrTry = [1,2,3] 
//  let max = Math.max(...arrTry)
//  console.log("so lon nhat la", max)



// 4 interesting 

document.getElementById("MinP").onclick = function() {
   let arrMin = arr 
   document.getElementById("result4").innerHTML = minPNumber(arrMin)

}

function minPNumber(number) {
    let minP = arr.filter(num => num > 0)
    
    return minP.length > 0 ? Math.min(...minP) : undefined

}




// 5 
document.getElementById("Even").onclick = function() {
  
    document.getElementById("result5").innerHTML = sole(arr)

}

function sole(number) {
    var resultEven = number
    for(var index = resultEven.length - 1; index >= 0 ; index-- ){
       var resultEven1 = resultEven[index]
        if ( resultEven1 % 2 == 0) {
            return resultEven1
        }
    
    }
} 


// 6

document.getElementById("reverse").onclick = function() {
    document.getElementById("showReverse").innerHTML =  doiCho(arr)
}


function doiCho(number) {
   var doi1 = document.getElementById("doi1").value * 1  
    var doi2 =document.getElementById("doi2").value * 1

    
    var luuTru1 = 0 
    var luuTru2 = 0 
    for (var index = 0 ; index < number.length; index++) {
       
        if (number[index] === doi1 ) {
            luuTru1 = doi1
            console.log("🚀 ~ doiCho ~ luuTru1:", luuTru1)
            
            
        }
        else if (number[index] === doi2) {
            luuTru2 = doi2
            console.log("🚀 ~ doiCho ~ luuTru2:", luuTru2)
        }

    }

        if ( luuTru1 == doi1 && luuTru2 == doi2) {
            find1 = number.indexOf(luuTru1)
            find2 = number.indexOf(luuTru2)
            let archive = number[find1]
            number[find1] = number[find2]
            number[find2] = archive
            return number
        }
    
}















// 7 

document.getElementById("sort").onclick = function() {
    sort = arr.sort(function(a,b) {
        return a - b
    })
   document.getElementById("showSort").innerHTML = sort
}

// 8 chua lam xong

document.getElementById("prime").onclick = function() { 
    document.getElementById("showPrime").innerHTML = soNguyenTo(arr)

}

function soNguyenTo(number) {
    firstNum = number
  for (index = 0 ; index < firstNum.length; index++) {
    var resultPrime = firstNum[index] 
    if ( resultPrime % 2 != 0) {
        return resultPrime 
    }
    break
  }

}



// 9  
document.getElementById("countNguyen").onclick = function() {
    document.getElementById("showCountNguyen").innerHTML = demNguyen(arr)
}




function demNguyen(number) {
    var dem = 0
   var countNguyenne = number
   for (index = 0; index < countNguyenne.length; index++) {
    
     thu = countNguyenne[index]
  thu2 =   Number.isInteger(thu)
       if (thu2 )   {
         dem++
        }
    }
    return dem
}

// 10 

document.getElementById("compare").onclick = function() {
    document.getElementById("showCompare").innerHTML = soSanh(arr)
}




function soSanh(number) {
 var   compareNe = number 
 var   soDuong = 0 
 var   soAm = 0
    for (index = 0; index < compareNe.length ; index++) {
        if (compareNe[index] >= 1 ) {
            soDuong++
          
        }
        else if (compareNe[index] < 0 ) {
            soAm++
        }
        else { continue }
        
    }
    if (soDuong > soAm ) {
        return `so duong: ${soDuong} > so am: ${soAm}`
    }
    else if (soDuong < soAm) {
        return ` so duong: ${soDuong} < so am: ${soAm}`

    }
    else {
        return ` so duong: ${soDuong} = so am: ${soAm}`
    }
}



