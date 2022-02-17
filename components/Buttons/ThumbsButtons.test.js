import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThumbsButtons from "./ThumbsButtons";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    }
);

afterEach(cleanup);
const mockOnClick = jest.fn();

describe("Banner Top", () => {
  it("Sholud have smallButton class", () => {
    const { getByTestId } = render(
      <ThumbsButtons small onClick={mockOnClick} />
    );
    fireEvent.click(getByTestId("positive button"));
    expect(getByTestId("positive button")).toHaveClass("smallButton");
  });

  it("Sholud have smallButton class", () => {
    const { getByTestId } = render(
      <ThumbsButtons small onClick={mockOnClick} />
    );
    fireEvent.click(getByTestId("negative button"));
    expect(getByTestId("negative button")).toHaveClass("smallButton");
  });
});
