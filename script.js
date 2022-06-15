var check = function() {
  if (document.getElementById('password').value ==
    document.getElementById('passwordConfirm').value) {
    document.getElementById('message').style.visibility = 'none';
    document.getElementById('message').innerHTML = '';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = '*Password do not match';
  }
}