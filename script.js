function show(){
   if( document.getElementById('checkbox').checked)
   {
  document.getElementById('aboutme').style.display="block";
}
else
document.getElementById('aboutme').style.display="none";
}
function Check(){
   var check= document.getElementsByName('radio');
   if(!check[0].checked && !check[1].checked)
   {
    alert("Oops! Please click the choice"); 
    return;
   }
   if(check[0].checked)
   {
   alert("Nice!");
   }
   else{
       alert("That's make me sad!");
   
   }
}  
function Changepic(pic,option){
  var  luutru=pic.src;
  if(option==1){

pic.setAttribute('src',"https://memedaily.vn/storage/meme/meo-cuoi-kho-chap-tay-lay.jpg");
}
else
pic.setAttribute('src',"https://i.imgur.com/BTdsryR.jpg");
pic.onmouseout=function(){
  pic.setAttribute('src',luutru);
}
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByTagName('nav')[0].style.padding = "10px 10px";
  } else {
    document.getElementsByTagName('nav')[0].style.padding = "80px 10px";
  }
}