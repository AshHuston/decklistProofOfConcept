import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


const express = require('express')
const app = express()
const port = 4000 

app.get('/', (req, res) => {
  res.send(App)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
