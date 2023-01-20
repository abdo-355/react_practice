import { v4 as uuidv4 } from "uuid";

describe("payment", () => {
  it("user can make payment", () => {
    // login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    //check account balance
    let oldBalance: string;
    cy.get('[data-test="sidenav-user-balance"]').then((balance) => (oldBalance = balance.text()));

    //click on "new" button
    cy.findByRole("button", { name: /new/i }).click();

    //search for a user
    cy.findByRole("textbox").type("devon becker");
    cy.findByText(/devon becker/i).click();

    //add amount and note then click pay
    const amount = "50.00";
    cy.findByPlaceholderText(/amount/i).type(amount);
    const note = uuidv4();
    cy.findByPlaceholderText(/add a note/i).type(note);
    cy.findByRole("button", { name: /pay/i }).click();

    //return to transactions
    cy.findByRole("button", { name: /return to transactions/i }).click();

    //go to personal payment
    cy.findByRole("tab", { name: /mine/i }).click();
    cy.findByText(note).click({ force: true });

    //check if the transaction was made
    cy.findByText(`-$${amount}`).should("be.visible");
    cy.findByText(note).should("be.visible");

    //verify is the amount is deducted
    cy.get('[data-test="sidenav-user-balance"]').then((balance) => {
      const convertedOldBalance = parseFloat(oldBalance.replace(/\$|,/g, ""));
      const convertednewBalance = parseFloat(balance.text().replace(/\$|,/g, ""));
      expect(convertedOldBalance - convertednewBalance).to.equal(parseFloat(amount));
    });
  });
});
