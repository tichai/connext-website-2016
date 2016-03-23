import scss from './app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Sched from './components/Sched.vue'
import Pres from './components/Pres.vue'
import Reg from './components/Reg.vue'

require("jquery")
require("bootstrap-sass")

// Install plugins
Vue.use(Router)
Vue.use(Resource)

// Set up a new router
var router = new Router()

// Route config
router.map({
  '/home':{
    name: 'home',
    component: Home
  },
  '/about':{
    name: 'about',
    component: About
  },
  "/schedule":{
    name: 'sched',
    component: Sched,
  },
  "/presentations":{
    name: "pres",
    component: Pres
  },
  "/registration":{
    name: "reg",
    component: Reg
  }
})

// For every new route scroll to the top of the page
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

// If no route is matched redirect home
router.redirect({
  '*': '/home'
})

// Start up our app
router.start(App, '#app')
window.debug = Vue;
