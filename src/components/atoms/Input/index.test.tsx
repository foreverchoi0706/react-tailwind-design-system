import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { expect, it, vi } from "vitest";

import Target from "./index";

const user = userEvent.setup();
it("onChange 함수가 정상적으로 작동하는지", async () => {
  const spy = vi.fn();
  render(<Target onChange={spy} />);
  const input = screen.getByRole("textbox");
  await user.type(input, "sadasdasd");
  expect(spy).toBeCalled();
});
