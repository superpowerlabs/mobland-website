import "@testing-library/jest-dom/extend-expect";
import "regenerator-runtime/runtime";

import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

global.window = {
  location: {
    pathname: "/",
  },
  innerWidth: 1200,
  addEventListener: new Function(),
};

window.shallow = shallow;
