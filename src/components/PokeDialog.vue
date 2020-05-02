<template>
  <div>
    <md-dialog v-bind:md-click-outside-to-close="false"
      v-bind:md-close-on-esc="false"
      :md-active.sync="showDialog" @md-opened="onOpen" @md-clicked-outside="close">
      <md-dialog-title>{{ pokemon.name }}</md-dialog-title>
      <md-dialog-content>
        <div class="fields-container">
          <div class="image">
            <PokeImage v-bind:pokemon="pokemon" />
          </div>
          <div v-if="loading">
            <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
          </div>
          <div class="information" v-show="!loading">
            <span><b>Weight: </b>{{ detail.weight }}</span>
            <span><b>Base experience: </b>{{ detail.base_experience }}</span>
            <div>
              <b>Types: </b>
              <span v-bind:key="index" v-for="(type, index) in detail.types">
                {{ type.type.name }}
              </span>
            </div>
          </div>
        </div>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="close">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import PokeImage from '@/components/PokeImage';

export default {
  name: 'PokeDialog',
  props: {
    showDialog: Boolean,
    pokemon: Object,
  },
  data() {
    return {
      loading: false,
      detail: {},
    };
  },
  methods: {
    onOpen() {
      this.fetchData(this.pokemon.url);
    },
    fetchData(url) {
      this.loading = true;
      axios
        .get(url)
        .then(({ data }) => {
          this.detail = data;
          this.loading = false;
        }).catch(() => this.loading = false);
    },
    close() {
      this.detail = {};
      this.$emit('close');
    }
  },
  components: {
    PokeImage,
  },
};
</script>

<style scoped>
.fields-container {
  display: flex;
  justify-content: space-between;
}

.image {
  width: 100px;
}

.information {
  display: flex;
  flex-direction: column;
}
</style>
