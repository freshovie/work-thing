const login = function(){
    this.email = document.querySelector(".email");
    this.password = document.querySelector(".password");
    this.submitBtn = document.querySelector(".submit"); 
    };
    

login.prototype.logUser = function () {
  this.submitBtn.addEventListener("click", () => {
    if (this.email.value !== "" && this.password.value !== "") {
      localStorage.setItem("userMail", this.email.value);
      localStorage.setItem("userPass", this.password.value);

      alert("user logged in with: " + localStorage.getItem("userMail"));
    } else {
      alert("Please enter email and password");
    }
  });
};

login.prototype
const user = new login();
user.logUser();
