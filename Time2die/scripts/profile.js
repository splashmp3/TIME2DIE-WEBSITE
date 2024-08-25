function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  document.getElementById('userImage').src = profile.getImageUrl();
  document.getElementById('userName').textContent = profile.getName();
  document.getElementById('userEmail').textContent = profile.getEmail();
  document.getElementById('profile').style.display = 'block';
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    document.getElementById('profile').style.display = 'none';
  });
}
