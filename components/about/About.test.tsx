import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";
import "intersection-observer";

jest.mock("@mui/material/styles", () => ({
  ...jest.requireActual("@mui/material/styles"),
  useTheme: () => ({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  }),
}));

describe("About component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<About />);
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Who am I?")).toBeInTheDocument();
  });

  it("applies theme colors correctly", () => {
    const { getByText } = render(<About />);
    expect(getByText("Who am I?")).toHaveStyle({ color: "rgb(25, 118, 210)" }); // Adjust this according to your theme
  });

  // Add more test cases
});
