import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../App";

let container: HTMLElement;

describe("<App />", () => {
  test("App mounts properly", () => {
    const wrapper = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>,
      { container }
    );
    expect(wrapper).toBeTruthy();
  });
});
