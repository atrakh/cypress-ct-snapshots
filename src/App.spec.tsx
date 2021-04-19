import  App from "./App";
import { mount } from "@cypress/react";
import React from "react";

it("graph should render", () => {
  mount(
    <App />
  );
  // Fails even with this line commented out, but will correctly generate a snapshot if uncommented
  // cy.get(".App").snapshot();
});
