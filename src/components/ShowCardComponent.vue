<template>
  <div
    class="flex flex-col max-w-sm overflow-hidden transition-all rounded shadow-lg hover:shadow-2xl hover:scale-105"
  >
    <RouterLink :to="`show/${show.id}`">
      <img
        loading="lazy"
        class="object-fill w-full h-96"
        :src="show.image.original"
        :alt="show.name"
      />
      <div class="flex flex-col items-stretch flex-1 gap-2 px-6 py-4">
        <h2 class="mb-2 text-xl font-bold">
          {{ show.name }}
        </h2>
        <p data-testid="rating">Rating: {{ show.rating.average }}</p>
        <p data-testid="language">Language: {{ show.language }}</p>
        <div class="inline-flex flex-wrap">
          <span
            data-testid="genres"
            v-for="(genre, idx) in show.genres"
            :key="idx"
            class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-white rounded-full bg-abn-green"
          >
            {{ genre }}
          </span>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "ShowCardComponent",
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
};
</script>
