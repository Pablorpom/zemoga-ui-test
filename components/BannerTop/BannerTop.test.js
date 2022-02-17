import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BannerTop from "./BannerTop.js";

afterEach(cleanup);

describe("Banner Top", () => {
  it("Sholud hide the BannerTop", () => {
    const { getByTestId } = render(<BannerTop />);
    fireEvent.click(getByTestId("banner top button"));
    expect(getByTestId("banner top")).toHaveClass("hide");
  });
});
