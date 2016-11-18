console.log('Loaded!');

var img = document.getElementById('madi');

var height = 200;
 function expand() {
   
   height = height - 0.33;
   img.style.height = height+ 'px';
}
img.onclick = function ()
{    
   var interval = setInterval(expand, 40);
};