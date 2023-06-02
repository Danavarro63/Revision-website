const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});



function validate()
{
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if (username =="daniel" && password == "daniel63")
{
  swal({
      title: 'Login Successful',
      text: 'You inputted the correct details',
      icon: 'success',
    });
}
else
{
  swal({
    title: 'Wrong Login',
    text: 'Sorry those are the wrong details',
    icon: 'error',
});     
}
}X