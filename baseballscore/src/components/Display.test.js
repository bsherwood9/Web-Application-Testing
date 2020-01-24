import React from "react";
import * as rtl from "@testing-library/react";
import Display from "./Display";

describe("testing display functionality", () => {
  it("testing that the component renders", () => {
    rtl.render(<Display />);
  });
  it("balls should exist and display on page", () => {
    const { getByText } = rtl.render(<Display />);
    const ballCheck = getByText("Balls");
    expect(ballCheck).toBeVisible();
  });
  it("strikes should exist and display on page", () => {
    const { getByText } = rtl.render(<Display />);
    const strikeCheck = getByText("Strikes");
    expect(strikeCheck).toBeVisible();
  });
});
