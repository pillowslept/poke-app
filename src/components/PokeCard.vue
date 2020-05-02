<template>
  <md-card class="md-transparent" md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ pokemon.name }}</div>
        <div class="md-subhead">{{ pokemon.type }}</div>
      </md-card-header-text>
      <md-card-media>
        <img v-if="url"
          v-bind:src="url"
          alt="Avatar">
      </md-card-media>
    </md-card-header>
  </md-card>
</template>

<script>
export default {
  name: 'PokeCard',
  data() {
    return {
      url: '',
    };
  },
  mounted() {
    const id = this.pokemon.url.split('/').reverse()[1];
    this.url = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  },
  props: {
    pokemon: Object
  },
};
</script>
