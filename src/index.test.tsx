/**
 * @jest-environment jsdom
 */

import React from 'react'
import Grid from "./Grid";
import { render } from "@testing-library/react";

// `
// <div>........</div>
// <div>....*...</div>
// <div>........</div>
// <div>........</div>
// `

// `
// <div>........</div>
// <div>........</div>
// <div>........</div>
// <div>........</div>
// `

describe("GAME OF LIFE", () => {
  test("It should render a 8x4 grid", () => {
    const { container } = render(<Grid />);
    const expected = "<div>........</div><div>........</div><div>........</div><div>........</div>";


    expect(container.innerHTML).toEqual(expected);
  });

  test.only("It should render a 8x4 grid with dead and life cells", () => {
    const { container } = render(<Grid life={[0, 4]} />);
    const expected = "<div>....*...</div><div>........</div><div>........</div><div>........</div>";


    expect(container.innerHTML).toEqual(expected);
  });
});
