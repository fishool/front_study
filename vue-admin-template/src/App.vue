<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.test()
  },
  methods: {
    test() {
      console.log('test')
    }
  }
}
</script>
