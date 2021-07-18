function saveData() {
  if (localStorage.cont) {
    localStorage.cont = Number(localStorage.cont) + 1;
  } else {
    localStorage.cont = 1;
  }

  user = document.getElementById("useremail").value;
  localStorage.setItem("user_" + localStorage.cont, user);
}
