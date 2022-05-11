// Scroll on direction click
const wrapperElm = document.getElementById('AnimationJsDemo').querySelector('ul');
const buttonElms = [...document.querySelectorAll('.controls button')];
buttonElms.forEach(element => {
  element.addEventListener('click', (event) => {
    if (element.classList.contains('control-left')) {
      sideScroll(
        wrapperElm,
        'left',
        20,
        25,
        wrapperElm.getBoundingClientRect().width,
      );
    } else {
      sideScroll(
        wrapperElm,
        'right',
        20,
        25,
        wrapperElm.getBoundingClientRect().width,
      );
    }
  });        
});

/**
 * Smooth scroll animation in vanilla JavaScript
 */
function sideScroll(domElement, direction, speed, step, distance) {
  let scrollAmount = 0;
  const element = domElement;
  window.slideTimer = setInterval(() => {
    if (direction === 'left') {
      element.scrollLeft -= step
    } else {
      element.scrollLeft += step
    }
    scrollAmount += step
    if (scrollAmount >= distance) {
      window.clearInterval(window.slideTimer);
    }
  }, speed);
}

/**
 * Enable mouse drag of element.
 */
function dragScroll(domElement, speed = 1) {
  let isDown = false;
  let startX;
  let scrollLeft;

  domElement.addEventListener('mousedown', (event) => {
    isDown = true;
    startX = event.pageX - domElement.offsetLeft;
    ({
      scrollLeft
    } = domElement)
  });

  domElement.addEventListener('mouseleave', (event) => {
    isDown = false;
  });

  domElement.addEventListener('mouseup', (event) => {
    isDown = false;
  });

  domElement.addEventListener('mousemove', (event) => {
    if (isDown) {
      event.preventDefault();
      const x = event.pageX - domElement.offsetLeft;
      const walk = (x - startX) * speed;
      domElement.scrollLeft = scrollLeft - walk;
    }
  })
}
dragScroll(wrapperElm);

