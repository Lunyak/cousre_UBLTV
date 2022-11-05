import { render, screen } from "@testing-library/react";
import React from "react";
import { Button, ThemeButton } from "./Button";

describe("classNames", () => {
  test("with only first param", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument()
  });

  test("with theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  });
});
 