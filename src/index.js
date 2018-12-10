require('normalize.css/normalize.css');
require('./application.scss');

let circle = [..document.querySelector("#test"),
  circleCenter = [circle.offsetLeft + 16, circle.offsetTop + 16]

const mouseMove = (e) => {
  let angle = Math.atan2(e.pageX - circleCenter[0], -(e.pageY - circleCenter[1])) * (180/Math.PI)

  circle.style.transform = `rotate(${angle}deg)`
}

document.addEventListener("mousemove", mouseMove)



