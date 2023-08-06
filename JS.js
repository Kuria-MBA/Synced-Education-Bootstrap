let dropdowns = document.querySelectorAll(".navbar .dropdown-toggler");
let dropdownIsOpen = false;
let openDropdown = null;

// Handle dropdown menus on hover
if (dropdowns.length) {
  dropdowns.forEach((dropdown) => {
    let target = document.querySelector(`#${dropdown.dataset.dropdown}`);

    dropdown.addEventListener("mouseenter", () => {
      if (target) {
        if (openDropdown && openDropdown !== target) {
          openDropdown.classList.remove("show");
        }

        target.classList.add("show");
        dropdownIsOpen = true;
        openDropdown = target;
      }
    });

    // Keep the dropdown open when the mouse is inside the dropdown area
    target.addEventListener("mouseleave", () => {
      dropdownIsOpen = false;
      setTimeout(() => {
        if (!dropdownIsOpen) {
          target.classList.remove("show");
        }
      }, 200); // Add a small delay to allow moving the cursor from the dropdown toggler to the dropdown content
    });
  });
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener("mouseup", (event) => {
  if (dropdownIsOpen) {
    dropdowns.forEach((dropdownButton) => {
      let dropdown = document.querySelector(
        `#${dropdownButton.dataset.dropdown}`
      );
      let targetIsDropdown = dropdown == event.target;

      if (dropdownButton == event.target) {
        return;
      }

      if (!targetIsDropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
      }
    });

    dropdownIsOpen = false;
    openDropdown = null;
  }
});

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector(".navbar-toggler").addEventListener("mouseenter", () => {
    let navbarMenu = document.querySelector(".navbar-menu");

    if (!navbarMenu.classList.contains("active")) {
      navbarMenu.classList.add("active");
    } else {
      navbarMenu.classList.remove("active");
    }
  });
}

handleSmallScreens();
