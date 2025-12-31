// Get the navbar section element
const navSection = document.querySelector(".nav-section");

// Function to handle scroll behavior
window.onscroll = function () {
  if (window.scrollY > 100) {
    navSection.classList.add("scrolled"); // Add class when scroll is more than 100px
  } else {
    navSection.classList.remove("scrolled"); // Remove class when scroll is less than 100px
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
