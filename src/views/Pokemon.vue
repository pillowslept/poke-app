<template>
  <div class="poke-container">
    <PokeList />
  </div>
</template>

<script>
import PokeList from '@/components/PokeList';

export default {
  name: 'Pokemon',
  components: {
    PokeList
  }
};
</script>
