<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="openHide">
          <md-icon>menu</md-icon>
          <md-tooltip md-direction="bottom">Open menu</md-tooltip>
        </md-button>
        <img alt="PokeApp" class="logo"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png">
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <router-link to="/">
            <md-button class="md-icon-button" @click="openHide">
              <md-icon>home</md-icon>
              <md-tooltip md-direction="bottom">Home</md-tooltip>
            </md-button>
          </router-link>
        </md-toolbar>

        <md-list>
          <md-list-item to="/pokemon" @click="openHide">
            <md-icon>group_work</md-icon>
            <span class="md-list-item-text">Pokemon</span>
          </md-list-item>
          <md-list-item to="/about" @click="openHide">
            <md-icon>face</md-icon>
            <span class="md-list-item-text">About</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    openHide() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style>
  .pointer {
    cursor: pointer;
  }

  .md-app {
    height: 100vh;
  }

  .md-list-item-router.router-link-exact-active {
    background-color: var(--md-theme-default-divider-on-background, rgba(0,0,0,0.12));
  }

  .logo {
    width: 70px;
  }

  .md-drawer {
    width: 250px !important;
  }
</style>
