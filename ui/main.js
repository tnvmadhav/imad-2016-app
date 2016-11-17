console.log('Loaded!');

var img = document.getElementById('madi');
var width = '150px';
var height = '150px';
 function expand() {
   width = width + 1;
   height = height + 1;
   img.style.width = width+"px" ;
   img.style.height = height+"px";
}
img.onclick = function ()
{    
   var interval = setInterval(expand, 50);
};