import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "./Contact";
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

describe("Contact component", () => {
  it("renders component title", () => {
    const { getByText } = render(<Contact />);

    expect(getByText("Let's talk")).toBeInTheDocument();
  });

  it("renders collaboration title", () => {
    const { getByText } = render(<Contact />);

    expect(getByText("Have an interesting idea?")).toBeInTheDocument();
  });

  it("renders colab invitation", () => {
    const { getByText } = render(<Contact />);

    expect(
      getByText("Let's collaborate together on application testing")
    ).toBeInTheDocument();
  });
});
