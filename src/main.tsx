import * as React from "react";
import * as ReactDOM from "react-dom";
import { SimpleComponent } from "./component";

ReactDOM.render(
  <SimpleComponent content="This is text (version 19.02) from parent" />,
  document.getElementById("root")
);
