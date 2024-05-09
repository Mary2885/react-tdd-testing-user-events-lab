import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'; 
import App from "../App";


// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);
  const image = screen.getByAltText("My profile pic");
  expect(image).toHaveAttribute("src", "https://avatars.githubusercontent.com/u/122904044?v=4");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);
  const bio = screen.getByText(/lorem ipsum/i);
  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("https://github.com"));
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("https://linkedin.com"));
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);
  const username = screen.getByPlaceholderText(/enter name.../i);
  expect(username).toBeInTheDocument();
  const email = screen.getByPlaceholderText(/enter email.../i);
  expect(email).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);
  expect(screen.getByRole('checkbox',{name: /reading/i})).toBeInTheDocument();
  expect(screen.getByRole('checkbox',{name: /Watching/i})).toBeInTheDocument();
  expect(screen.getByRole('checkbox',{name: /Sleeping/i})).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);
  expect(screen.getByRole('checkbox',{name: /reading/i})).not.toBeChecked();
  expect(screen.getByRole('checkbox',{name: /Watching/i})).not.toBeChecked();
  expect(screen.getByRole('checkbox',{name: /Sleeping/i})).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);
  const nameInput = screen.getByPlaceholderText(/enter name.../i); 

  userEvent.type(nameInput, 'Benny'); 
  expect(nameInput).toHaveValue('Benny');

  const emailInput = screen.getByPlaceholderText(/enter email.../i); 

  userEvent.type(emailInput, 'user@gmail.com'); 
  expect(emailInput).toHaveValue('user@gmail.com'); 
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);
  const readingCheckbox = screen.getByRole('checkbox',{name: /reading/i}); 

  userEvent.click(readingCheckbox);
  expect(readingCheckbox).toBeChecked();

  userEvent.click(readingCheckbox);
  expect(readingCheckbox).not.toBeChecked();

  const watchingCheckbox = screen.getByRole('checkbox',{name: /watching/i}); 

  userEvent.click(watchingCheckbox);
  expect(watchingCheckbox).toBeChecked();

  userEvent.click(watchingCheckbox);
  expect(watchingCheckbox).not.toBeChecked();

  const sleepingCheckbox = screen.getByRole('checkbox',{name: /sleeping/i});
  
  userEvent.click(sleepingCheckbox);
  expect(sleepingCheckbox).toBeChecked();

  userEvent.click(sleepingCheckbox);
  expect(sleepingCheckbox).not.toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);
  const submitButton = screen.getByRole('button',{name: /submit/i}); 
  userEvent.click(submitButton);
  expect(screen.getByText(/thank you for your subscription/i)).toBeInTheDocument();
})