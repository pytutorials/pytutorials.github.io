if(!localStorage.getItem("username")){
 if(!window.location.href == "https://pytutorials.github.io/signup"){
  document.write("<a href='signup'>Create a username for free</a>");
 }
}else{
  document.write("<a href='javascript:removeUsername();'>Logout</a>");
  alert("Welcome Back " + localStorage.getItem("username"));
  if(window.location.href == "https://pytutorials.github.io/signup"){
   document.write("<a href='javascript:removeUsername()'>Logout</a>");
  }
}
function removeUsername(){
  localStorage.removeItem("username");
  window.location.reload();
}
function signup(){
  var username = document.getElementById("signup-form").value;//get the forms value.
  if(!username == ""){
   localStorage.setItem("username", username);
   document.write("Refresh the page to see the changes. ");
  }else{
    document.write("Fill out the form properly! <a href='signup'>Go to the signup page</a>");
  }
}
