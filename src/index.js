require('normalize.css/normalize.css');
require('./application.scss');

import { throttle } from 'lodash';

let circles = [...document.querySelectorAll(".circle")]

const mouseMove = (e) => {
  let mouseX = e.pageX, mouseY = e.pageY, radToDeg = 180 / Math.PI
  circles.forEach((circle) => {
    let circleCenter = [circle.offsetLeft + 16, circle.offsetTop + 16],
      angle = Math.atan2(mouseX - circleCenter[0], -(mouseY - circleCenter[1])) * radToDeg

    circle.style.transform = `rotate(${angle}deg)`
  })
}

document.addEventListener("mousemove", throttle(mouseMove, 200))



