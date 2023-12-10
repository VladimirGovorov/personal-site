import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

describe("Home component", () => {
  test("renders greetings and introduction", () => {
    render(<Home />);
    const greetingsElement = screen.getByText(/Hi there!/i);
    const introductionElement = screen.getByText(/Vlad/i);

    expect(greetingsElement).toBeInTheDocument();
    expect(introductionElement).toBeInTheDocument();
  });

  test("renders buttons with correct text and href", () => {
    render(<Home />);
    const aboutButton = screen.getByRole("button", { name: /About/i });
    const hireMeButton = screen.getByRole("button", { name: /Hire me/i });

    expect(aboutButton).toBeInTheDocument();
    expect(hireMeButton).toBeInTheDocument();
    expect(aboutButton).toHaveAttribute("href", "#about");
    expect(hireMeButton).toHaveAttribute("href", "#contact");
  });

  test("renders hero image", () => {
    render(<Home />);
    const heroImage = screen.getByAltText("Hero image");
    expect(heroImage).toBeInTheDocument();
  });
});
