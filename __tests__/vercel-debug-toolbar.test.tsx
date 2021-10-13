/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import VercelDebugToolbar from "../src/vercel-debug-toolbar";

describe("VercelDebugToolbar", () => {
  it("should display Debug Toolbar, Status, Path, Pathname and Loadtime", () => {
    render(<VercelDebugToolbar />);
    expect(screen.getByText("Debug Toolbar")).toBeTruthy();
    expect(screen.getByText("Status = 200")).toBeTruthy();
    expect(screen.getByText("Path =")).toBeTruthy();
    expect(screen.getByText("Pathname =")).toBeTruthy();
    expect(screen.getByText("Loadtime = NaN ms")).toBeTruthy();
  });
});
