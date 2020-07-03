<template>
  <!-- <div id="app">
  <img alt="Vue logo" src="./assets/logo.png">-->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- teste
     <a href="/category" class="nav-link">Tutorials</a>
      <router-view />
  </div>-->

  <div id="app">
    <Menu></Menu>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Menu
  },
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "teste",
        password: "teste"
      }
    };
  },
  created() {
    console.log("created");
    // APEANS PARA TESTE
    this.authenticated = true;
  },
  mounted() {
    console.log("mounted");
    console.log(this.authenticated);
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.gap {
  margin-top: 50px;
}
</style>
