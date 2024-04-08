function rValidation(element) {
    element.style.borderColor = "green";
  }
  
  function checkInput() {
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
      if (inputElements[i].value == "") {
        inputElements[i].style.borderColor = "red";
      } else {
        inputElements[i].style.borderColor = "green";
      }
    }
  }

function interestInput(){
    var userInterest = document.getElementById("interests").value.length;

    if(userInterest==""){
        document.getElementById("interests").style.borderColor = "red";
        document.getElementById("error").innerHTML = "Please fill in this field.";
    }
    else{
        document.getElementById("interests").style.borderColor = "green";
        document.getElementById("error").innerHTML = "";
    }
}

function finalOutput() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var interests = document.getElementById("interests").value;
    var gender = document.getElementById("gender").value;
  
    document.getElementById("usernamedisplay").innerHTML = "Name: " + name;
    document.getElementById("pnamedisplay").innerHTML = "Preferred Username: " + username;
    document.getElementById("passworddisplay").innerHTML = "Password: " + password;
    document.getElementById("emaildisplay").innerHTML = "Email: " + email;
    document.getElementById("addressdisplay").innerHTML = "Address: " + address;
    document.getElementById("interestsdisplay").innerHTML = "Interests: " + interests;
    document.getElementById("genderdisplay").innerHTML = "Gender: " + gender;


    document.getElementById("myForm").addEventListener("submit", function(event){
        event.preventDefault();
        finalOutput();
      }); 

  }