let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("keydown", function(e) {
  let id = document.querySelector("#getId").value;
  let password = document.querySelector("#getPassword").value;
  let btn = document.querySelector("#login");
  if (id.length > 0 && password.length > 0) {
    btn.style.opacity = 1;
  }
});
