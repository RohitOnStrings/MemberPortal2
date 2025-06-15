function login() {
  const loginId = document.getElementById("loginId").value;
  const password = document.getElementById("password").value;

  const validLoginId = "course2";
  const validPassword = "lesson010";

  if (loginId === validLoginId && password === validPassword) {
    // Store login status in sessionStorage
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid login ID or password.";
  }
}
