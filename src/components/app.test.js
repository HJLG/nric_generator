import { render } from "@testing-library/react";
import { Nric } from "./Nric";
import { Mainbutton } from "./Mainbutton";

test("Nric randomised", () => {
  const regex = /[STFG]\d{7}[A-Z]/;
  expect(Nric()).toMatch(regex);
});

it("checkButtonRenders", () => {
    const { queryByTitle } = render(<Mainbutton/>)
    const btn = queryByTitle("nricButton");
    expect(btn).toBeTruthy();
});

