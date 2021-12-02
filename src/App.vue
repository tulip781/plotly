<template>
  <div id="app">
    <div class="header">
      <img src="./assets/imp.svg.png" class="logo" />
      <div class="header__titles">
        <h1>Emerging Structural Technologies</h1>
        <h2>Dimensional (Frequency, Phase, Amplitude)</h2>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  title: "Dimensional Graph",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
h1 {
  margin: 3px;
  position: relative;
  top: -11px;
  text-align: left;
}

h2 {
  margin: 3px;
  font-weight: lighter;
  text-align: left;
  position: relative;
  top: -20px;
}

.logo {
  display: inline;
  width: 200px;
  height: 50px;
}
.header {
  display: flex;
  height: 200;
  margin-left: 1rem;
}
.header__titles {
  margin-left: 20px;
}
</style>
