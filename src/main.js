import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  request.headers.options.set('Authorization', 'Basic xxxxx')
  console.log(request.headers.options)
  next()
})

new Vue({
  el: '#app',
  render: h => h(App)
})
