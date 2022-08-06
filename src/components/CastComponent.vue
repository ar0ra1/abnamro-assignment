<template>
  <div class="container">
    <h3 class="text-2xl font-bold">Cast</h3>
    <div v-if="cast.length === 0">
      <TransitionStateComponent type="no-data" />
    </div>
    <div
      v-else
      class="grid grid-cols-1 gap-10 my-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <CastMemberComponent
        data-testid="cast-member"
        v-for="(member, i) in cast"
        :key="{ i }"
        :member="member"
      />
    </div>
  </div>
</template>

<script>
import CastMemberComponent from "./CastMemberComponent.vue";
import TransitionStateComponent from "./TransitionStateComponent.vue";
export default {
  name: "CastComponent",
  props: {
    cast: {
      type: Array,
      required: true,
    },
  },
  components: { CastMemberComponent, TransitionStateComponent },
};
</script>
