

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func()

//const { Sortable } = require('sortablejs')

//import Sortable from './node_modules/sortablejs/modular/sortable.complete.esm.js'

//import Sortable from './node_modules/sortablejs'

var el = document.getElementById('first-list')
var sort = Sortable.create(el)



