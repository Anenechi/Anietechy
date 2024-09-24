

 const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { /* adjust the scroll position value */
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

document.getElementById('x-icon').addEventListener('click', function() {
  let navUl = document.getElementById('nav-ul');
  navUl.style.display = 'none'; // hide the nav UL
});


document.getElementById('ham-icon').addEventListener('click', function() {
  const navUl = document.getElementById('nav-ul');
  navUl.style.display = 'flex';
});



// Get the navigation menu's ul element
const navMenuUl = document.querySelector('.navbar ul');

// Function to hide navigation menu on mobile/tablet
function hideNavMenu() {
  navMenuUl.style.display = 'none';
}

// Add event listener to navigation links
navMenuUl.addEventListener('click', (event) => {
  if (event.target.tagName === 'A' && event.target.hasAttribute('href')) {
    if (window.innerWidth <= 1024) { 
      hideNavMenu();
    }
  }
});


const elements = document.querySelectorAll('.element');

window.addEventListener('scroll', () => {
  elements.forEach((element) => {
    if (isElementInView(element)) {
      element.classList.add('scroll-reveal');
    }
  });
});

function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}



