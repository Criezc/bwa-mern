import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  // eslint-disable-next-line testing-library/no-container
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();

  // eslint-disable-next-line testing-library/no-container
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  // eslint-disable-next-line testing-library/no-container
  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button type="link" href=""></Button>
    </Router>
  );

  // eslint-disable-next-line testing-library/no-container
  expect(container.querySelector("a")).toBeInTheDocument();
});
