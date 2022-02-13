import helloWorld from './hello-world'
import imgsrc from './assets/test.png'
import homesvg from './assets/home.svg'
import example from './assets/example.txt'
import bizhi from './assets/bizhi.jpg'
import './style.less'
import data from './assets/data.xml'
import datacsv from './assets/data.csv'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json from './assets/data.json5'
import _ from 'lodash'
import './async-module'

helloWorld()

const img = document.createElement('img')
img.src = imgsrc
img.style.cssText = 'width: 200px; height: 100px'
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.src = homesvg
img2.style.cssText = 'width: 100px; height: 100px'
document.body.appendChild(img2)

const block = document.createElement('div')
block.textContent = example
block.style.cssText = 'width: 200px; height: 200px;'
block.classList.add('block-bg')
document.body.appendChild(block)

const img3 = document.createElement('img')
img3.src = bizhi
img3.style.cssText = 'width: 200px; height: 100px'
document.body.appendChild(img3)

document.body.classList.add('hello')

const span = document.createElement('span')
span.classList.add('icon')
span.innerHTML = '测试字体'
document.body.appendChild(span)

console.log(data)
console.log(datacsv)

console.log(toml.title) // output `TOML Example`
console.log(toml.owner.name) // output `Tom Preston-Werner`

console.log(yaml.title) // output `YAML Example`
console.log(yaml.owner.name) // output `Tom Preston-Werner`

console.log(json.title) // output `JSON5 Example`
console.log(json.owner.name) // output `Tom Preston-Werner`

console.log(_.join(['a', 'b', 'c!'], ' '))

const button = document.createElement('button')
button.textContent = '加'
button.addEventListener('click', () => {
  /**
   * 预获取/预加载模块(prefetch/preload module)
   * https://webpack.docschina.org/guides/code-splitting/#prefetchingpreloading-modules
   */
  import(
    /* webpackChunkName: 'math', webpackPreload: true */ './math.js'
  ).then(({ add }) => {
    console.log(add(4, 5))
  })
})
document.body.appendChild(button)
