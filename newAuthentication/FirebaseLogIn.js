var myRef = new Firebase("https://beesprout.firebaseio.com");



function newAccountDisplay(){
  document.getElementById('newAccountRegister').style.display='';
  document.getElementById('alreadyExists').style.display='none';
  document.getElementById("descript").innerHTML="Sign Up";
}


function alreadyExistsDisplay(){
  document.getElementById('newAccountRegister').style.display='none';
  document.getElementById('alreadyExists').style.display='';
  document.getElementById("descript").innerHTML="Sign In";
}

function changePwdDisplay(){
  document.getElementById('newAccountRegister').style.display='none';
  document.getElementById('alreadyExists').style.display='none';
  document.getElementById('forgotPwd').style.display='';
  document.getElementById("descript").innerHTML="Reset Password";

}

var logInAction = function(){
  var email = document.getElementById('mail').value;
  var password = document.getElementById('pwd').value;
  // var user = document.getElementById('usernameNew1').value;
  myRef.authWithPassword({
    email: email,
    password: password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      window.location = "YourPlants/index.html"; //redirects after log in?
    }
  });


}//closes logInAction


var createUserAction = function(){
  var email = document.getElementById('mailNew1').value;
  var password = document.getElementById('pwdNew1').value;
  var password2 = document.getElementById('pwdNew2').value;


  //password validation
  if(pwdNew1.value !== pwdNew2.value){
    document.getElementById("pwdValidation").innerHTML = "Passwords don't match.";
  } //closes 'if' clause - checks password matching

  else{

      document.getElementById("pwdValidation").innerHTML = ""; //validation message dissapears when passwords match
      myRef.createUser({
        email: email,
        password: password

      }, function(error, userData) {

        if(error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid: ", userData.uid);
        }
        });
        alreadyExistsDisplay();


      }//closes else for password validation - accounts are made here

  }//closes createUserAction -- user account is only made if passwords match.



var sendResetEmail = function(){

  var email = document.getElementById('mailPwdReset').value;
  myRef.resetPassword({
  email : email
}, function(error) {
  if (error === null) {
    console.log("Password reset email sent successfully");
    document.getElementById("emailSentValidation").innerHTML = "Password Reset E-mail sent";
  } else {
    console.log("Error sending password reset email:", error);
    document.getElementById("emailSentValidation").innerHTML = "Error sending Reset E-mail";
  }


});
}










//Google Authentication:

//if user doesn't have an existing session




// authClient.login('google');


//end of google section
