import "@testing-library/jest-dom/extend-expect";
import { screen, render, waitFor } from "@testing-library/vue";
import CastMemberComponent from "../CastMemberComponent.vue";

const data = {
  actor: {
    person: {
      name: "Brad Pitt",
    },
    character: {
      name: "Brad Pitt",
      image: {
        original: "https://robohash.org/Brad_Pitt?size=160x240",
      },
    },
  },
};

test("Cast component renders correctly", async () => {
  render(CastMemberComponent, { props: { member: data } });
  await waitFor(async () => {
    expect(screen.getByTestId("real-name")).toBeInTheDocument();
  });
  await waitFor(async () => {
    expect(screen.getByTestId("character-name")).toBeInTheDocument();
  });
});
