<template>
  <div id="app">
    <h3>Example 1</h3>
    <div>
      Data: {{ example1 }}
    </div>
    <button @click="getPost">Get Language</button>
    <hr> 
  </div>
</template>

<script>
import axios from 'axios'

const data = { query: `{
                    post(id:1) {
                      created
                    }
                  }`
              }


export default {
  name: 'app',
  
  data () {
    return {
      example1: ''
    }
  },
  
  methods: {
    async getPost () {
      try {
        const res = await axios.post(
          'http://localhost:3000/graphql', JSON.stringify(data), {headers: {  'Content-Type': 'application/json' }})
        console.log(res)
        this.example1 = res.data.data.language
      } catch (e) {
        console.log('err', e)
      }
    }
  }
}
</script>
