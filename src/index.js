var sprinkler = require('sprinkler')

var canvas = document.getElementById('canvas')
var s = sprinkler.create(canvas)

s.start([
  'img/oil-drum-48x64.png'
], {
  angle: -Math.PI / 32,
  burnInSeconds: 200,
  imagesInSecond: 0.5,
  zMin: 1,
  zMax: 1,
  dyMin: 10,
  dyMax: 10,
  drMin: -0.05,
  drMax: 0.1
})
