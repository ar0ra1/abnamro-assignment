<template>
  <div class="inline-flex gap-1">
    <h3 class="mr-5 text-xl font-bold">Search</h3>
    <input
      class="px-2 border-b-2 outline-none border-b-abn-yellow"
      type="text"
      data-testid="search-input"
      @input="$emit('handle-text-change', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
};
</script>
