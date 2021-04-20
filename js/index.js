//ELEMENT SELECTION
const fullname = document.querySelector("#name");
const age = document.querySelector("#age");
const showYear = document.querySelector(".container__showYear");

const calculateYear = (event) => {
  event.preventDefault();
  const yourAge = age.value;
  const yourName = fullname.value;

  if (yourName === "") {
    window.alert("Please Enter your Name");
    return;
  }
  if (yourAge == "" || yourAge <= 0) {
    window.alert("Please Enter your correct age!");
    return;
  }
  const date = new Date().getFullYear();
  console.log(date);
  const birthYear = yourAge - date;
  //   console.log(birthYear);
  //   document.querySelector("year").style.display = "block";
  showYear.innerHTML = `${yourName} your birth year is approximately ${birthYear}`;
};
