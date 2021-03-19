import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e34e743 = () => interopDefault(import('..\\pages\\Baseball.vue' /* webpackChunkName: "pages/Baseball" */))
const _6f9e7be8 = () => interopDefault(import('..\\pages\\Cups.vue' /* webpackChunkName: "pages/Cups" */))
const _e1a4f5e4 = () => interopDefault(import('..\\pages\\Tshirts.vue' /* webpackChunkName: "pages/Tshirts" */))
const _2074b80f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Baseball",
    component: _0e34e743,
    name: "Baseball"
  }, {
    path: "/Cups",
    component: _6f9e7be8,
    name: "Cups"
  }, {
    path: "/Tshirts",
    component: _e1a4f5e4,
    name: "Tshirts"
  }, {
    path: "/",
    component: _2074b80f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
