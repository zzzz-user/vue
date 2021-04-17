<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin:0 auto;
  width: 500px;
}
</style>
