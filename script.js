// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference or default to dark theme
const currentTheme = localStorage.getItem("theme") || "dark-theme";
body.className = currentTheme;

// Toggle theme on button click
themeToggle.addEventListener("click", function (e) {
  console.log({ e });
  const resolvedTheme = localStorage.getItem("theme");
  const newMode = resolvedTheme === "dark" ? "light" : "dark";
  const root = document.documentElement;

  if (!document.startViewTransition) {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light-theme");
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    }
    return;
  }

  // Set coordinates from the click event
  if (e) {
    root.style.setProperty("--x", `${e.clientX}px`);
    root.style.setProperty("--y", `${e.clientY}px`);
  }

  document.startViewTransition(() => {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light-theme");
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    }
  });
});

document.querySelector(".content").addEventListener("mousemove", function (e) {
  const img = document.getElementById("hover-image");
  const imgWidth = img.width;
  const imgHeight = img.height;

  // Ensure the image width and height are available
  if (imgWidth && imgHeight) {
    // img.style.position = "absolute"
    img.style.left = e.layerX - imgWidth / 2 + "px"; // Centers the image on the cursor
    img.style.top = e.layerY - imgHeight / 2 + "px"; // Centers the image on the cursor
    img.style.opacity = 1; // Make the image visible
  }
});

document.querySelector(".content").addEventListener("mouseleave", function () {
  const img = document.getElementById("hover-image");
  img.style.opacity = 0; // Hide the image when cursor leaves the area
});
