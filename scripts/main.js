var image = document.querySelector('#my-pic');

image.onclick = function()
{
    alert('Say friend and enter');
}

function randomChange()
{
    var leftChange = 600 * Math.random();
    var upChange = 300 * Math.random();
    var sizeChange = 600 * Math.random();

    var sizeString = sizeChange.toString() + "px";
    var leftString = leftChange.toString() + "px";
    var upString = upChange.toString() + "px";
    image.style.width = sizeString;
    image.style.left = leftString;
    image.style.up = upString;
}

function validatePass()
{
  var correctPassword = "Mellon";
  if(document.getElementById('password').value == correctPassword)
  {
    return true;
  }
  else
  {
    alert('You are no friend');
    return false;
  }
}