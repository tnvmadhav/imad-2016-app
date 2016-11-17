console.log('Loaded!');

var img = document.getElementById('madi');

img.onclick = function ()
{    
    var marginLeft = 0;
    function MoveRight()
{
   marginLeft = marginLeft +5;
   img.style.marginLeft = marginLeft+"px";
}
     var interval = setInterval(MoveRight, 50);
    img.style.marginLeft = "100px";
};