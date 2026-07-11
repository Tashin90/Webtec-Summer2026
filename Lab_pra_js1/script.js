 let count = 0;
function validateForm() {
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let valid = true;
    

    if (username.includes('_') || username.includes('-')) {
        document.getElementById("usernameError").innerHTML = "Username cannot contain hyphens or underscores.";
        valid = false;

    }else if (username.length < 5 || username.length > 15) {
        document.getElementById("usernameError").innerHTML = "Username must be between 5 and 15 characters.";
        valid = false;
    }
    else{
        document.getElementById("usernameError").innerHTML = "";
    }
      if (count >= 3) {
        document.getElementById("passwordError").innerHTML = "You have exceeded the maximum number of attempts.";
        valid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long.";
        valid = false;
    } else if (password !== "12345678") {
        count++;
        document.getElementById("passwordError").innerHTML = "Password is incorrect. Left attempts: " + (3 - count);
        valid = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    
    return false;
}