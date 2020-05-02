<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item" v-bind:key="pokemon.id" v-for="pokemon in pokemons">
        <PokeCard v-bind:pokemon="pokemon" v-on:select="select" />
      </div>
    </div>
    <md-progress-bar v-if="loading" md-mode="query"></md-progress-bar>
    <md-divider></md-divider>
    <div class="footer">
      <md-button v-if="nextUrl" class="md-button" @click="loadMore">
        <md-icon>refresh</md-icon>
        Load more
        <md-tooltip md-direction="top">Load more</md-tooltip>
      </md-button>
      <span class="counter">{{ pokemons.length}} from {{ count }}</span>
    </div>
    <PokeDialog v-bind:pokemon="selected" v-bind:showDialog="showDialog" v-on:close="closeModal" />
  </div>
</template>

<script>
import axios from 'axios';
import PokeCard from '@/components/PokeCard';
import PokeDialog from '@/components/PokeDialog';

export default {
  name: 'PokeList',
  data() {
    return {
      showDialog: false,
      selected: {},
      loading: false,
      count: 0,
      pokemons: [],
      nextUrl: '',
    };
  },
  mounted() {
    this.fetchData('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  },
  methods: {
    loadMore() {
      this.fetchData(this.nextUrl);
    },
    fetchData(url) {
      this.loading = true;
      axios
        .get(url)
        .then(({ data }) => {
          this.pokemons = [...this.pokemons, ...data.results];
          this.nextUrl = data.next;
          this.count = data.count;
          this.loading = false;
        }).catch(() => this.loading = false);
    },
    select(pokemon) {
      this.selected = pokemon;
      this.showDialog = true;
    },
    closeModal() {
      this.showDialog = false;
      this.selected = {};
    }
  },
  components: {
    PokeCard,
    PokeDialog,
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter {
  font-weight: bold;
  font-size: 1.5rem;
}

.md-layout {
  margin-bottom: 2rem;
}
</style>
