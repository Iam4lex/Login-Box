
function myFunc(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="COM/0027/22" && password=="innocent"){
        alert("login succesful");
        return false;
    }
    else{
        alert("Incorect username or password");
    }

}
