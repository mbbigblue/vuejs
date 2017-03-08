import Vue from 'vue'
import app from './app.vue'

import './styles.css'

Vue.config.debug = process.env.NODE_ENV !== 'production'


var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!',
    comment: 'Comment'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
      console.log(this.message)
    },

    printName: function(name){
      this.comment = name;
      console.log('Comment: '+this.comment);
    }
  }

})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
