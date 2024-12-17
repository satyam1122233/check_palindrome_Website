



var inputTxt= document.querySelector(".inputTxt");
var output= document.querySelector(".output");
var palinButton= document.querySelector(".palinButton");
var b= document.querySelectorAll(".star, .star2, .star3, .star4, .star5, .star6, .star7, .star8, .star9, .star10");
var strColor=document.querySelectorAll(".topTri, .bottomTri");

palinButton.addEventListener("click",function(){

   

    var str=inputTxt.value.trim();
    str=str.toLowerCase();

    var i=0;
    var j =str.length-1;

    if(str.length==0){       
   
    b.forEach(e => {
        e.classList.add("paused");
    });
    
    output.innerHTML="Please enter any text"
    return;
    }
    
if(str.length==1){

var colorPick = window.getComputedStyle(document.querySelector(".colorBox")).backgroundColor;

var cleanedColor = colorPick.replace('rgb(', '').replace(')', '');

var parts = cleanedColor.split(',');

var re = parseInt(parts[0].trim()); 
var gb = parseInt(parts[1].trim()); 
var bl = parseInt(parts[2].trim()); 


// if (re === 255 && gb === 255 && bl === 255) {
//     document.body.style.backgroundColor = "blue";
// } else {
//     document.body.style.backgroundColor = "black"; 
// }

    strColor.forEach(e=>{
    
        
    e.style.borderBlockColor =`rgb(${re}, ${gb}, ${bl})`;
    console.log("Red:", re);   
 
    if(re>127){
        re-=5;
console.log(re)
    }else{
        re+=5;
        console.log(re)

    }

     });

    b.forEach(e => {
        e.classList.remove("paused");

    });


output.innerHTML="Palindrom"
return;

}

    while(i<j){
        if(str.charAt(i)===str.charAt(j)){
            i++;
            j--;

        }else{
            output.innerHTML="Not Palindrom";
            colorChoosing(255,255,255);
   
            b.forEach(e => {
        e.classList.add("paused");
       });

            return;
        }

    }


    var colorPick = window.getComputedStyle(document.querySelector(".colorBox")).backgroundColor;

var cleanedColor = colorPick.replace('rgb(', '').replace(')', '');

var parts = cleanedColor.split(',');

var re = parseInt(parts[0].trim()); 
var gb = parseInt(parts[1].trim()); 
var bl = parseInt(parts[2].trim()); 


if (re === 255 && gb === 255 && bl === 255) {
    document.body.style.backgroundColor = "black";
} else {
    document.body.style.backgroundColor = "white"; 
}


    strColor.forEach(e=>{
    
        
        e.style.borderBlockColor =`rgb(${re}, ${gb}, ${bl})`;
        console.log("Red:", re);   
     
        if(re>127){
            re-=5;
    console.log(re)
        }else{
            re+=5;
            console.log(re)
    
        }
    
         });
       
    output.innerHTML="Palindrom";
   
    b.forEach(e => {
        e.classList.remove("paused");

    });

});

var colorBox = document.querySelector(".colorBox");
var colorButton=document.querySelector(".colorButton");

colorButton.addEventListener("click",function(){
    randmColorCalling();



});
function colorChoosing(r,g,b){
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

}


function randmColorCalling(){
        var r=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
            colorChoosing(r,g,b);
    
    }