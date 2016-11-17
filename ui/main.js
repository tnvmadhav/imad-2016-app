console.log('Loaded!');

var img = document.getElementById('madi');
var max-width = '150px';
var max-height = '150px';
 function expand() {
   max-width = max-width + 1;
   max-height = max-height + 1;
   img.style.max-width = max-width+"px" ;
   img.style.max-width = max-height+"px";
}
img.onclick = function ()
{    
   var interval = setInterval(expand, 50);
};