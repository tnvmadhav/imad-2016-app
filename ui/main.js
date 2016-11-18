console.log('Loaded!');

var img = document.getElementById('madi');

var height = 0;
 function expand() {
   
   height = height + 50;
   img.style.height = height+ 'px';
}
img.onclick = function ()
{    
   var interval = setInterval(expand, 50);
};