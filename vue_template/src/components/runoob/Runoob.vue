<template>
  <div class="hello">
    <h1>{{ msg | capitalize}}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'Runoob',
  data () {
    return {
      msg: '2233jjjjjjj333W222e3333lcome  Your First Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
