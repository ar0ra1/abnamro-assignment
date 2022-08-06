<template>
  <div class="inline-flex flex-wrap gap-5 md:gap-3">
    <h3 class="mr-5 text-xl font-bold">Genres</h3>
    <button
      v-for="genre in allGeneres"
      value="{genre}"
      class="hover:border-b-2 hover:border-b-abn-yellow"
      :class="{ 'border-b-2 border-b-abn-green': selectedGenre === genre }"
      :key="genre"
      @click="$emit('handle-genre-change', genre)"
    >
      {{ genre }}
    </button>
  </div>
</template>

<script>
export default {
  name: "GenreComponent",
  props: {
    allGeneres: {
      type: Array,
      required: true,
    },
    selectedGenre: {
      type: String,
      required: true,
    },
  },
};
</script>
