let delayedColoredChanger(color, delay){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}


delayedColoredChanger('red', 1000)
  .then(()=> delayedColoredChanger('orange'), 1000)
  .then(()=> delayedColoredChanger('yellow'), 1000)
  .then(()=> delayedColoredChanger('green'), 1000)
  .then(()=> delayedColoredChanger('blue'), 1000)
  .then(()=> delayedColoredChanger('indigo'), 1000)
  .then(()=> delayedColoredChanger('violet'), 1000)
