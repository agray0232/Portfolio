function validatePass()
{
  var passwordValid = false;

  var correctPassword = "Mellon";
  if(document.getElementById('password').value == correctPassword)
  {
    passwordValid = true;
  }
  else
  {
    alert('You are no friend');
  }

  return passwordValid;
}