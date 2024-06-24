import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";
import { waitFor } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

// Display an image on the login page
describe('Display Login page image',()=>{
    test('should have a picture once the page loads',()=>{
        render(
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LoginPage />} />
              </Routes>
            </BrowserRouter>,
            { container }
        );
        const imageElement = screen.getByAltText(
            /welcome/i
        ) as HTMLImageElement;

        expect(imageElement).toBeInTheDocument();

    })
})

// Show the interactivity of the button
describe("LoginPage", () => {
  test("Click the button", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>,
      { container }
    );

    const button = screen.getByRole("button", {
      name: /log in/i,
    }) as HTMLButtonElement;

    // button mounts with text "LOG IN"
    expect(button.textContent).toBe("LOG IN");
  });
});

// Display Error messages when the input fields are empty
describe("Display error messages when the inputs are empty", () => {
  test("Click the button", async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>,
      { container }
    );
    const passwordField = screen.getByPlaceholderText(
      /password/i
    ) as HTMLInputElement;
    const button = screen.getByRole("button", {
      name: /log in/i,
    }) as HTMLButtonElement;

    // Initially, ensure error message is not in the document
    expect(
      screen.queryByText(/password must be exactly 8 characters/i)
    ).toBeNull();

    // Click the button
    fireEvent.click(button);

    // Assume password filed is empty
    await waitFor(() => {
      expect(passwordField.value).toBe("");
      expect(
        screen.getByText(/password must be exactly 8 characters/i)
      ).toBeInTheDocument();
    });
  });
});

// Display Error messages when the input fields are empty
describe("Display email error messages", () => {
    test("should display an error message if email is invalid", async () => {
      render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>,
        { container }
      );
      const emailField = screen.getByPlaceholderText(
        /email/i
      ) as HTMLInputElement;
      const button = screen.getByRole("button", {
        name: /log in/i,
      }) as HTMLButtonElement;

    // Enter invalid email format
    fireEvent.change(emailField, { target: { value: 'invalidemail' } });


    // Click the button
    fireEvent.click(button);

    // Output error message
    await waitFor(() => {
        expect(
            screen.getByText(/email must be a valid email/i)
        ).toBeInTheDocument();
    });
    });
});

