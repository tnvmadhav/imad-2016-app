console.log('Loaded!');

var img = document.getElementById('madi');

var height = '150px';
 function expand() {
   
   height = height + 100;
   
   img.style.height = height+"px";
}
img.onclick = function ()
{    
   var interval = setInterval(expand, 50);
};