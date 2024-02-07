import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

jest.mock("@mui/material/styles", () => ({
  ...jest.requireActual("@mui/material/styles"),
  useTheme: () => ({
    palette: {
      primary: {
        main: "#ffffff",
        red: {
          main: "#ff0000",
        },
      },
      red: {
        main: "#ff0000",
      },
    },
  }),
}));

describe("Home component", () => {
  it("renders greetings correctly", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Hi there!")).toBeInTheDocument();
  });

  it("renders paragraph correctly", () => {
    const { getByText } = render(<Home />);
    expect(getByText(/Passionate about QA/)).toBeInTheDocument();
  });

  it("renders buttons correctly", () => {
    const { getByRole } = render(<Home />);
    expect(getByRole("button", { name: /About/ })).toBeInTheDocument();
    expect(getByRole("button", { name: /Contact/ })).toBeInTheDocument();
  });
});
