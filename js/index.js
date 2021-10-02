let container = document.querySelector('.container');
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

//creates a style attribute for the element and adds the animation to it
const keyFrames = document.createElement('style');
keyFrames.innerHTML = `
@keyframes throw-shuriken {
  0% {
    transform: rotate(0deg);
    left: ${-250}px;
    opacity: 1;
  }

  50% {
    transform:  rotate(385deg);
    left: ${windowWidth - 150}px;
    opacity: 1;
  }
  80% {
    transform: rotate(385deg);
    left: ${windowWidth - 150}px;
    opacity: 1;
  }
  100% {
    transform: rotate(385deg);
    left: ${windowWidth - 150}px;
    opacity: 0;
    display: none
  }
}
`;
container.appendChild(keyFrames);

//generates a random height for the element to be thrown at
const renderRandHeight = () => {
  let randCushion = Math.random();
  if (randCushion > 0.65) {
    randCushion -= 0.2;
  }
  if (randCushion < 0.1) {
    randCushion += 0.1;
  }

  return (randCushion * windowHeight).toFixed(0);
};

//handles if we're throwing a shurikwn or kunai
//accepts the value for deciding which element to throw
const kunaiOrShuriken = (decider) => {
  if (decider === 1) {
    return 'kunai';
  } else {
    return 'shuriken';
  }
};

//handles the creation of an element to be thrown
const renderShuriken = () => {
  let decider = Math.floor(Math.random() * 2);

  shuriken = document.createElement('img');
  shuriken.src = `../img/${kunaiOrShuriken(decider)}-picture.png`;
  shuriken.className = 'throw-shuriken';
  shuriken.style.top = `${renderRandHeight()}px`;
  shuriken.style.animation = 'throw-shuriken forwards 0.9s';
  container.appendChild(shuriken);
};

container.addEventListener('click', () => renderShuriken());

const cleanupWeapons = () => {
  let mess = document.getElementsByClassName('throw-shuriken');
  if (mess.length < 5) {
    return;
  } else {
    mess[0].remove();
  }
};

setInterval(() => {
  cleanupWeapons();
}, 1500);
