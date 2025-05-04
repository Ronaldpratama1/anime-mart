const NavbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// function hamburger menu sidebar
hamburgerMenu.addEventListener("click", () => {
  NavbarNav.classList.toggle("active");
});

// function close sidebar when clicked
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !NavbarNav.contains(e.target)) {
    NavbarNav.classList.remove("active");
  }
});

// function long title
const title = document.querySelectorAll(".anime-title");
title.forEach((title) => {
  let titleOld = title.textContent.trim();
  let titleNew = longTitle(titleOld);
  title.textContent = titleNew;
});

function longTitle(title) {
  if (title.length >= 20) {
    let titleSubstring = title.substring(0, 23);
    let lastSpace = titleSubstring.lastIndexOf(" ");
    // if (lastSpace !== -1) {
    //   titleSubstring = titleSubstring.substring(0, lastSpace);
    // }
    return titleSubstring + "...";
  } else {
    return title;
  }
}

// function long desc
const desc = document.querySelectorAll(".anime-desc");
desc.forEach((desc) => {
  console.log(desc.textContent);
  let descOld = desc.textContent.trim();
  let descNew = longDesc(descOld);
  desc.textContent = descNew;
});

function longDesc(desc) {
  if (desc.length >= 200) {
    let descSubstring = desc.substring(0, 270);
    let lastSpace = descSubstring.lastIndexOf(" ");
    // if (lastSpace !== -1) {
    //   titleSubstring = titleSubstring.substring(0, lastSpace);
    // }
    return descSubstring + "...";
  } else {
    return desc;
  }
}
//function ganti bg-color
// const sosmed = document.querySelectorAll(".sosmed");
// const contactContent = document.querySelector(".contact-content");

// sosmed.forEach((sosmed) => {
//   sosmedText = sosmed.textContent;
//   console.log(sosmedText);

//   switch (sosmedText) {
//     case "Whatsapp":
//       contactContent.style.backgroundColor = "#25D366";
//       break;
//     case "Facebook":
//       contactContent.style.backgroundColor = "#1877F2";
//       break;
//     case "Instagram":
//       contactContent.style.backgroundColor = "#E4405F";
//       break;
//     case "Linked-in":
//       contactContent.style.backgroundColor = "#0A66C2";
//       break;
//     case "Tiktok":
//       contactContent.style.backgroundColor = "#010101";
//       break;
//     case "Youtube":
//       contactContent.style.backgroundColor = "#FF0000";
//       break;
//     default:
//       break;
//   }
// });
