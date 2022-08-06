<template>
  <div
    class="flex flex-col gap-4 p-4 text-white rounded-md bg-abn-green md:col-start-5 md:col-end-7 h-fit"
  >
    <p data-testid="language">Language: {{ language }}</p>
    <p data-testid="rating">Rating: {{ rating?.average }}</p>
    <p data-testid="type">Type: {{ type || "Not Available" }}</p>
    <p data-testid="status">Status: {{ status }}</p>
    <p data-testid="network">Network: {{ network?.name || "Not Available" }}</p>
    <p data-testid="runtime">Runtime: {{ runtime || 0 }} min</p>
    <p>
      Genres:
      <span data-testid="genres" v-for="(g, i) in genres" :key="{ i }">{{
        `${g}${i !== genres.length - 1 ? ", " : ""}`
      }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "SideBarComponent",
  props: {
    language: {
      type: String,
      required: true,
    },
    rating: {
      type: Object,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    network: {
      type: Object,
    },
    runtime: {
      type: Number,
    },
    genres: {
      type: Array,
      required: true,
    },
  },
};
</script>
