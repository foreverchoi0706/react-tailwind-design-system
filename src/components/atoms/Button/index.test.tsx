import { render } from "@testing-library/react";
import React from "react";
import { test, expect } from "vitest";

import Component from "./index";

test("제대로 값을 가져오는지2", () => {
  const { getByText } = render(<Component>asddads</Component>);
  expect(getByText("asddads")).toContain("asddads");
});
