import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { expect, it, vi } from "vitest";

import Target from "./index";

const user = userEvent.setup();

it("클릭 시 onClick 함수가 호출되는지", async () => {
  const buttonText = "buttonText";
  const spy = vi.fn();
  render(<Target onClick={spy}>{buttonText}</Target>);
  const target = screen.getByText<HTMLButtonElement>(buttonText);
  await user.click(target);
  expect(spy).toBeCalled();
});
