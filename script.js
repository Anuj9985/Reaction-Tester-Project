var start=new Date().getTime();//start time

//This function changes the color of box
function getcolor(){
            var letter="0123456789ABCDEF"
            var color="#"
            for (var i=0; i<6;i++)
         {
            color+=letter[Math.floor(Math.random()*16)]
         }
         return color;
         }

//This function changes the size of the boxes 
function change(){
    var left, top, wh;
    //Used Math.random library to generate random values ranges(0-300)
    left=Math.random()*300;
    top=Math.random()*300;
    //for width, height we set minmum value of 100 range(100-400)
    wh=((Math.random()*400)+100);
    document.getElementById("box").style.left=left+"px";
    document.getElementById("box").style.top=top+"px";
    document.getElementById("box").style.width=wh+"px";
    document.getElementById("box").style.height=wh+"px";
    document.getElementById("box").style.display="flex";
    document.getElementById("box").style.backgroundColor=getcolor();//calling the color function
    start =new Date().getTime();
}
change();//calling the function

//getting access into html
document.getElementById("box").onclick=function(){
     
    document.getElementById("box").style.display="none";
     var end=new Date().getTime();//end time

     //The users reaction time of clicking the box
     var time=(end-start)/1000;   //In seconds
     //alert pop up
    alert(time +" "+ "Seconds");
    change();// calling the function
}