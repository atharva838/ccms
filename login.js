function adminlogin(event) {
    event.preventDefault();

    let admin = document.getElementById("Admin").value;
    let password = document.getElementById("password").value;

    if (admin === "atharva@123" && password === "19191818") {
        localStorage.setItem("islogedin", "true");
        window.location.href = "./dashboard.html";
    } else {
        alert("Invalid username or password ❌");
    }
}
