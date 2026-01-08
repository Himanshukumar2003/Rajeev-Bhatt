// Get the navbar section element
const navSection = document.querySelector(".nav-section");

// Function to handle scroll behavior
const logo = document.querySelector(".navbar-brand .logo");

window.onscroll = function () {
  if (window.scrollY > 100) {
    navSection.classList.add("scrolled");
    logo.src = "img/logo/logo2.png";
  } else {
    navSection.classList.remove("scrolled");
    logo.src = "img/logo/logo1.png";
  }
};

const currentUrl = encodeURIComponent(window.location.href);
const pageTitle = encodeURIComponent(document.title);
document.getElementById(
  "fbShare"
).href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
document.getElementById(
  "twitterShare"
).href = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${pageTitle}`;
document.getElementById(
  "linkedinShare"
).href = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
document.getElementById("whatsappShare").href = `https://wa.me/?text=$
  {pageTitle}%20${currentUrl}`;
