const typewriter = document.querySelector('.typewriter');
const text = 'Hello, World!';
const cursor = document.createElement('span');
cursor.classList.add('cursor');
typewriter.appendChild(cursor);

let i = 0;
let direction = 1; // 1 for typing, -1 for erasing
const speed = 50; // adjust the speed to your liking

function type() {
  if (direction === 1) { // typing
    if (i < text.length) {
      typewriter.innerHTML = text.substring(0, i) + '<span class="cursor"></span>';
      i++;
      setTimeout(type, speed);
    } else {
      direction = -1; // switch to erasing
      setTimeout(type, 1000); // wait for 1 second before erasing
    }
  } else { // erasing
    if (i > 0) {
      typewriter.innerHTML = text.substring(0, i - 1) + '<span class="cursor"></span>';
      i--;
      setTimeout(type, speed);
    } else {
      direction = 1; // switch back to typing
      setTimeout(type, 1000); // wait for 1 second before typing again
    }
  }
}

type();


// scroll effect //

const imgContainers = document.querySelectorAll('.img-container');

imgContainers.forEach((container) => {
  container.addEventListener('mousemove', (e) => {
    const hoverCircle = container.querySelector('.hover-circle');
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    hoverCircle.style.top = `${y}px`;
    hoverCircle.style.left = `${x}px`;
  });
});

// dhars

// Get all the letter spans
const letters = document.querySelectorAll('.letter');

// Function to animate each letter
function animateLetters() {
  letters.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.3}s`;
  });
}

// Call the function to start the animation
animateLetters();