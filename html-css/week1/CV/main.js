const profile = document.querySelectorAll(".profile-nav");
const img = document.querySelector(".img");
const profileDiv = document.querySelectorAll(".eventDiv");
console.log(img + " , " + profile);

profile.addEventListener("click", () => {
  console.log("button clicked");
  profileDiv.style.paddingTop = "75px";
  img.style.paddingTop = "75px";
});

/* const navElementExceptProfile = document.querySelectorAll(".forEvent");

navElementExceptProfile.addEventListener("click", () => {
  profileDiv.style.paddingTop = "-75px";
  img.style.paddingTop = "-75px";
}); */
