<template>
  <div v-if="loading">
    <TransitionStateComponent type="api-loading" />
  </div>
  <div v-else-if="error">
    <TransitionStateComponent type="api-error" />
  </div>
  <div
    v-else
    class="container w-full mx-auto my-10"
    data-test="shows-component"
  >
    <div class="flex flex-col justify-between gap-4 mb-6 lg:flex-row">
      <GenreComponent
        :allGeneres="genres"
        @handle-genre-change="handleGenreChange"
        :selectedGenre="selectedGenre"
      />
      <SearchComponent @handle-text-change="handleTextChange" />
    </div>
    <div v-if="dataToDisplay.length === 0">
      <TransitionStateComponent type="no-data" />
    </div>
    <div
      v-else
      class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <ShowCardComponent
        v-model="dataToDisplay"
        v-for="show in dataToDisplay"
        :key="show.id"
        :show="show"
      />
    </div>
  </div>
</template>

<script>
import ShowCardComponent from "../components/ShowCardComponent.vue";
import GenreComponent from "../components/GenreComponent.vue";
import SearchComponent from "../components/SearchComponent.vue";
import TransitionStateComponent from "../components/TransitionStateComponent.vue";
import axios from "axios";
export default {
  name: "AllShows",
  data() {
    return {
      shows: [],
      loading: true,
      error: null,
      genres: [],
      selectedGenre: "",
      searchText: "",
      dataToDisplay: [],
    };
  },
  created() {
    this.fetchShows();
  },
  methods: {
    async fetchShows() {
      this.loading = true;
      axios
        .get("https://api.tvmaze.com/shows")
        .then((response) => response.data)
        .then((data) => {
          this.shows = data;
          this.loading = false;
        })
        .then(() => {
          this.computeGenres();
          this.computeDataToDisplay();
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
    computeGenres() {
      const genres = new Set();
      if (this.shows) {
        this.shows.forEach(
          (show) => show.genres.length && genres.add(...show.genres)
        );
      }
      this.genres = Array.from(genres);
    },
    handleTextChange(value) {
      this.searchText = value.trim();
      this.computeDataToDisplay();
    },
    handleGenreChange(value) {
      this.selectedGenre = this.selectedGenre === value ? "" : value;
      this.computeDataToDisplay();
    },
    filterSearch(filterOnData) {
      return filterOnData.filter((e) =>
        e.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
    filterGenre(filterOnData) {
      return filterOnData.filter((e) => e.genres.includes(this.selectedGenre));
    },
    computeDataToDisplay() {
      if (this.selectedGenre === "" && this.searchText === "") {
        this.dataToDisplay = this.shows;
      }
      if (this.selectedGenre !== "" && this.searchText !== "") {
        this.dataToDisplay = this.filterGenre(this.filterSearch(this.shows));
      }
      if (this.selectedGenre !== "" && this.searchText === "") {
        this.dataToDisplay = this.filterGenre(this.shows);
      }
      if (this.searchText !== "" && this.selectedGenre === "") {
        this.dataToDisplay = this.filterSearch(this.shows);
      }
    },
  },
  components: {
    ShowCardComponent,
    GenreComponent,
    SearchComponent,
    TransitionStateComponent,
  },
};
</script>
