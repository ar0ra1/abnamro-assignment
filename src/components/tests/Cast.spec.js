import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/vue";
import CastComponent from "../CastComponent.vue";

const cast = [
  {
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
  },
];

test("component renders correctly with no data", () => {
  render(CastComponent, { props: { cast: [] } });
  const noDataElement = screen.getByTestId("no-data");
  expect(noDataElement).toBeInTheDocument();
});

test("component renders correctly with data", () => {
  render(CastComponent, { props: { cast: cast } });
  const dataElement = screen.getAllByTestId("cast-member");
  expect(dataElement).toHaveLength(1);
});
