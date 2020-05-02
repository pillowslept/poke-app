<template>
  <div>
    <img v-if="url"
      v-bind:src="url"
      alt="Avatar">
  </div>
</template>

<script>
export default {
  name: 'PokeImage',
  props: {
    pokemon: Object
  },
  data() {
    return {
      url: '',
    };
  },
  mounted() {
    if (this.pokemon && this.pokemon.url) {
      const id = this.pokemon.url.split('/').reverse()[1];
      this.url = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    }
  },
};
</script>
