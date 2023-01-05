import './style.css'

import Application from './Classes/Application.js'

const Application = new Application(document.querySelector('canvas.webgl'))

Application.singleton(canvas);