import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";

it("renders learn react link", () => {
  rtl.render(<App />);
});
it("check that ball button and hit button work together", () => {
  const { getByTestId } = rtl.render(<App />);
  rtl.fireEvent.click(getByTestId("ballButton"));
  expect(getByTestId("ballValue")).toHaveTextContent(1);
  rtl.fireEvent.click(getByTestId("hitButton"));
  expect(getByTestId("strikesValue")).toHaveTextContent(0);
});
it("check that strike button and hit button work together", () => {
  const { getByText, getByTestId } = rtl.render(<App />);
  rtl.fireEvent.click(getByTestId("strikesButton"));
  expect(getByTestId("strikesValue")).toHaveTextContent(1);
  rtl.fireEvent.click(getByTestId("hitButton"));
  expect(getByTestId("strikesValue")).toHaveTextContent(0);
});
it("check that foul button only goes to two", () => {
  const { getByText, getByTestId } = rtl.render(<App />);
  rtl.fireEvent.click(getByTestId("foulButton"));
  expect(getByTestId("strikesValue")).toHaveTextContent(1);
  rtl.fireEvent.click(getByTestId("foulButton"));
  expect(getByTestId("strikesValue")).toHaveTextContent(2);
  rtl.fireEvent.click(getByTestId("foulButton"));
  expect(getByTestId("strikesValue")).toHaveTextContent(2);
});

it("check that strike goes to 3 then resets when hitting button", () => {
  const { getByTestId } = rtl.render(<App />);
  rtl.fireEvent.click(getByTestId("strikesButton"));
  expect(getByTestId("strikesValue")).toHaveTextContent(1);
  rtl.fireEvent.click(getByTestId("strikesButton"));
  expect(getByTestId("strikesValue")).toHaveTextContent(2);
  rtl.fireEvent.click(getByTestId("strikesButton"));
  expect(getByTestId("strikesValue")).toHaveTextContent(3);
  rtl.fireEvent.click(getByTestId("strikesButton"));
  expect(getByTestId("strikesValue")).toHaveTextContent(0);
});

it("check that ball button and hit button work together", () => {
  const { getByText, getByTestId } = rtl.render(<App />);
  rtl.fireEvent.click(getByTestId("ballButton"));
  expect(getByTestId("ballValue")).toHaveTextContent(1);
  rtl.fireEvent.click(getByTestId("ballButton"));
  expect(getByTestId("ballValue")).toHaveTextContent(2);
  rtl.fireEvent.click(getByTestId("hitButton"));
  expect(getByTestId("ballValue")).toHaveTextContent(0);
});

it("check that ball button goes to 4 then resets", () => {
  const { getByTestId } = rtl.render(<App />);
  rtl.fireEvent.click(getByTestId("ballButton"));
  expect(getByTestId("ballValue")).toHaveTextContent(1);
  rtl.fireEvent.click(getByTestId("ballButton"));
  expect(getByTestId("ballValue")).toHaveTextContent(2);
  rtl.fireEvent.click(getByTestId("ballButton"));
  expect(getByTestId("ballValue")).toHaveTextContent(3);
  rtl.fireEvent.click(getByTestId("ballButton"));
  expect(getByTestId("ballValue")).toHaveTextContent(4);
  rtl.fireEvent.click(getByTestId("ballButton"));
  expect(getByTestId("ballValue")).toHaveTextContent(0);
});
