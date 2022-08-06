<template>
  <div v-if="loading">
    <TransitionStateComponent type="api-loading" />
  </div>
  <div v-else-if="error">
    <TransitionStateComponent type="api-error" />
  </div>
  <div v-else class="flex flex-col" data-testid="show">
    <div class="inline-flex items-center rounded-md bg-abn-green">
      <RouterLink to="/" class="h-full px-4 py-2 rounded-l-md bg-abn-yellow"
        >Go Back
      </RouterLink>
      <h2 class="ml-4 text-2xl font-bold text-white">{{ show.name }}</h2>
    </div>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-10 my-4 md:grid-cols-6">
        <div class="flex flex-col gap-4 md:gap-6 md:col-start-1 md:col-end-5">
          <strong class="text-xl">Summary: </strong>
          <div data-testid="summary" v-html="show.summary"></div>
        </div>
        <SideBarComponent
          :status="show.status"
          :network="show.network"
          :runtime="show?.runtime"
          :genres="show.genres"
          :type="show.type"
          :language="show.language"
          :rating="show.rating"
        />
      </div>
      <CastComponent :cast="show._embedded.cast" />
    </div>
  </div>
</template>

<script>
import SideBarComponent from "../components/SideBarComponent.vue";
import CastComponent from "../components/CastComponent.vue";
import TransitionStateComponent from "../components/TransitionStateComponent.vue";
import axios from "axios";
export default {
  name: "SingleShow",
  data() {
    return {
      show: {},
      loading: true,
      error: null,
      showId: undefined,
      searchText: "",
    };
  },
  created() {
    this.showId = this.$route.params.id;
    if (!this.showId || isNaN(this.showId)) {
      this.$router.push("/");
    } else {
      this.fetchShow();
    }
  },
  methods: {
    async fetchShow() {
      axios
        .get(`https://api.tvmaze.com/shows/${this.showId}?embed=cast`)
        .then((response) => response.data)
        .then((data) => {
          this.show = data;
          this.loading = false;
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
  },
  components: { SideBarComponent, CastComponent, TransitionStateComponent },
};
</script>
