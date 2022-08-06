import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/vue";
import ShowCardComponent from "../ShowCardComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const data = {
  name: "Game of Thrones",
  id: 1399,
  image: {
    original: "https://robohash.org/Game?size=160x240",
  },
  language: "English",
  rating: {
    average: 9.5,
  },
  genres: ["Drama", "Adventure", "Fantasy"],
};

test("Component renders correctly", async () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "All Shows",
        component: () => import("../../views/AllShows.vue"),
      },
      {
        path: "/show/:id",
        name: "Show",
        component: () => import("../../views/SingleShow.vue"),
      },
    ],
  });
  const { container } = render(ShowCardComponent, {
    global: { plugins: [router] },
    props: { show: data },
  });
  const findShowName = container.querySelector("h2");
  expect(findShowName).toBeInTheDocument();
  expect(findShowName).toHaveTextContent(data.name);
  const findShowImage = container.querySelector("img");
  expect(findShowImage).toBeInTheDocument();
  expect(findShowImage).toHaveAttribute("src", data.image.original);
  const findShowLanguage = screen.getByTestId("language");
  expect(findShowLanguage).toBeInTheDocument();
  expect(findShowLanguage).toHaveTextContent(data.language);
  const findShowRating = screen.getByTestId("rating");
  expect(findShowRating).toBeInTheDocument();
  expect(findShowRating).toHaveTextContent(data.rating.average);
  const findShowGenres = screen.getAllByTestId("genres");
  expect(findShowGenres).toHaveLength(data.genres.length);
  const link = container.querySelector("a");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", `/show/${data.id}`);
});
