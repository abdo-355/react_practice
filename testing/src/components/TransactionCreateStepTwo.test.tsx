import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TransactionCreateStepTwo from "./TransactionCreateStepTwo";
import { DefaultPrivacyLevel } from "models";

const props = {
  sender: {
    id: "1",
    uuid: "6383f84e-a835-3ece1d781fa8",
    firstName: "test",
    lastName: "test",
    username: "test",
    password: "$2a$10$5PXHGtcsckWtAprT5/JmluhR",
    email: "test@tester.com",
    phoneNumber: "2",
    avatar: "avatar",
    defaultPrivacyLevel: DefaultPrivacyLevel.public,
    balance: 9950000,
    createdAt: new Date("2019-08-27T23:47:05.637Z"),
    modifiedAt: new Date("2020-05-21T11:02:22.857Z"),
  },
  receiver: {
    id: "1",
    uuid: "6383f84e-a835-3ece1d781fa8",
    firstName: "test",
    lastName: "test",
    username: "test",
    password: "$2a$10$5PXHGtcsckWtAprT5/JmluhR",
    email: "test@tester.com",
    phoneNumber: "2",
    avatar: "avatar",
    defaultPrivacyLevel: DefaultPrivacyLevel.public,
    balance: 9950000,
    createdAt: new Date("2019-08-27T23:47:05.637Z"),
    modifiedAt: new Date("2020-05-21T11:02:22.857Z"),
  },
  showSnackbar: () => {},
  createTransaction: () => {},
};

test("the button is disabled initially and enabled if an amount and a note is entered", async () => {
  render(<TransactionCreateStepTwo {...props} />);

  expect(await screen.findByRole("button", { name: "Pay" })).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "100");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "testing the button");

  expect(await screen.findByRole("button", { name: "Pay" })).toBeEnabled();
});
