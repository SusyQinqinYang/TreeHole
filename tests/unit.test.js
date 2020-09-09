import React from "react";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import App from "../client/src/Components/App";
import Home from "../client/src/Components/Home";
import Memo from "../client/src/Components/Memo";
import { MemoryRouter as Router, withRouter } from "react-router-dom";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('App Unit Tests: Amount of Children Components', () => {
  test("App should have two children components", () => {
    const wrapper = shallow(<App store={mockStore({ newWords: "hello" })}/>);
    expect(wrapper.children()).toHaveLength(2);
  });
});

describe("Home Unit Tests: Shallow Rendering", () => {
  test("Home component exists", () => {
    const wrapper = shallow(<Home store={mockStore({ newWords: "hello" })}/>);
    expect(wrapper.exists()).toBe(true);
  });
  test("Memo component exists", () => {
    const wrapper = shallow(<Memo store={mockStore({})} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("App Unit Tests: Full DOM Rendering", () => {
  test("Renders with page-title in App", () => {
    const wrapperMount = mount(
      <RelatedItems
        page-title="Tree Hole"
        store={mockStore({})}
      />
    );
    expect(
      wrapperMount.containsMatchingElement(
        <h1 className="page-title">Tree Hole</h1>
      )
    ).toEqual(true);
  });
});