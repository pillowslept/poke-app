<template>
  <md-card class="md-transparent" md-with-hover @click.native="select">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ pokemon.name }}</div>
        <div class="md-subhead">{{ pokemon.type }}</div>
      </md-card-header-text>
      <md-card-media>
        <PokeImage v-bind:pokemon="pokemon" />
      </md-card-media>
    </md-card-header>
  </md-card>
</template>

<script>
import PokeImage from '@/components/PokeImage';

export default {
  name: 'PokeCard',
  props: {
    pokemon: Object
  },
  data() {
    return {
      url: '',
    };
  },
  methods: {
    select() {
      this.$emit('select', this.pokemon);
    }
  },
  components: {
    PokeImage,
  }
};
</script>
