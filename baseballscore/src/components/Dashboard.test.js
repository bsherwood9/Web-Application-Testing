import React from "react";
import * as rtl from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("testing dashboard functionality", () => {
  it("testing that the component renders", () => {
    rtl.render(<Dashboard />);
  });
  it("testing that Ball button", () => {
    const { getByText } = rtl.render(<Dashboard />);
    expect(getByText("Add Ball")).toBeVisible();
  });
  it("testing Hit button", () => {
    const { getByText } = rtl.render(<Dashboard />);
    expect(getByText("Hit")).toBeVisible();
  });
  it("testing Strike button", () => {
    const { getByText } = rtl.render(<Dashboard />);
    expect(getByText("Add Strikes")).toBeVisible();
  });
  it("test Foul button", () => {
    const { getByText } = rtl.render(<Dashboard />);
    expect(getByText("Foul Ball")).toBeVisible();
  });
});
