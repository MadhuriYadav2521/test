function register(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("passsword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (name && email && password && confirmPassword) {
        if (password.length >= 8 && confirmPassword.length >= 8) {
            if (password == confirmPassword) {
                var LS = JSON.parse(localStorage.getItem("flpikartUser")) || []
                var flagforEmail = false;
                for (var i = 0; i < LS.length; i++) {
                    if (LS[i].useremail == email)
                        flagforEmail = true;
                }
                if (!flagforEmail) {

                    var data = {
                        username: name,
                        useremail: email,
                        userpassword: password,
                        userConfirmPassword: confirmPassword

                    }
                    LS.push(data);
                    localStorage.setItem("flpikartUser", JSON.stringify(LS));
                    alert("registation successful")
                    window.location.href="./login.html";
                    var name = document.getElementById("name").value = "";
                    var email = document.getElementById("email").value = "";
                    var password = document.getElementById("password").value = "";
                    var confirmPassword = document.getElementById("confirmPassword").value = "";
                }else{
                    alert("email already exist.")
                }

            } else {
                alert("password not matched")
            }


        } else {
            alert("password should be minimun 8 characters.")
        }


    } else {
        alert("fiil att the fields")
    }
}


function login(event){
    event.preventDefault();
    var LS = JSON.parse(localStorage.getItem("flpikartUser"));
    var currentuser;
    var flag =  false;
    for(var i=0; i<LS.length; i++){
        if(LS[i].useremail == email && LS[i].userpassword == password){
            flag = true;
            currentuser = LS[i]
        }
    }
    if(flag=true){
        window.location.href="./index.html";

        alert("login successful")
        localStorage.setItem("flipkartCurrentUser",JSON.stringify(currentuser));

    }else{
        alert("credentials not matched");
    }
}





