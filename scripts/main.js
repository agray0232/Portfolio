var image = document.querySelector('#my-pic');

image.onclick = function()
{
    alert('Say friend and enter');
}

function randomChange()
{
    var leftChange = 1000 * Math.random();
    var upChange = 300 * Math.random();
    var sizeChange = 600 * Math.random();

    image.style.width = sizeChange.toString() + "px";
    image.style.left = leftChange.toString() + "px";
    image.style.up = upChange.toString() + "px";
}