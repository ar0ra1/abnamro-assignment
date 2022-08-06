import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/vue";
import SingleShow from "../SingleShow.vue";
import { createRouter, createWebHistory } from "vue-router";

const data = {
  id: 73,
  name: "The Walking Dead",
  type: "Scripted",
  language: "English",
  genres: ["Drama", "Action", "Horror"],
  status: "Running",
  runtime: null,
  averageRuntime: 62,
  rating: {
    average: 8,
  },
  network: null,
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/396/990803.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/396/990803.jpg",
  },
  summary:
    "<p><b>The Walking Dead</b> tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home. As the world overrun by the dead takes its toll on the survivors, their interpersonal conflicts present a greater danger to their continuing survival than the walkers that roam the country. Over time, the characters are changed by the constant exposure to death and some grow willing to do anything to survive.</p><p>Based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard.</p>",
  _embedded: {
    cast: [
      {
        person: {
          name: "Norman Reedus",
        },
        character: {
          name: "Daryl Dixon",
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_portrait/166/417474.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/166/417474.jpg",
          },
        },
      },
    ],
  },
};

test("SingleShow renders correctly with data", async () => {
  const mockRoute = {
    params: {
      id: data.id,
    },
  };
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "All Shows",
        component: () => import("../AllShows.vue"),
      },
      {
        path: "/show/:id",
        name: "Show",
        component: () => SingleShow,
      },
    ],
  });
  render(SingleShow, {
    global: { plugins: [router], mocks: { $route: mockRoute } },
  });
  await waitFor(async () => {
    expect(screen.getByTestId("show")).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toHaveTextContent(
      new DOMParser().parseFromString(data.summary, "text/html").body
        .textContent
    );
  });
});

test("SingleShow redirects upon receiving wrong params", async () => {
  const mockRoute = {
    params: {
      id: "abc",
    },
  };
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "All Shows",
        component: () => import("../AllShows.vue"),
      },
      {
        path: "/show/:id",
        name: "Show",
        component: () => SingleShow,
      },
    ],
  });
  render(SingleShow, {
    global: { plugins: [router], mocks: { $route: mockRoute } },
  });
  await waitFor(async () => {
    expect(router.currentRoute.value.fullPath).toBe("/");
  });
});
