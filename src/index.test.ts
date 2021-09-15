import foo from "./";
import { render } from "@testing-library/react";

describe("GAME OF LIFE", () => {
  test("It should render a 8x4 grid", () => {
    const { container, getByText } = render(<Grid />);
    const expected = ".......\n.......\n.......\n.......";

    expect(container.innerHTML).toEqual(expected);
  });
});
