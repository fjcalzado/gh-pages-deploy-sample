import * as React from "react";
import * as ReactDOM from "react-dom";
import { SimpleComponent } from "./component";

ReactDOM.render(
  <SimpleComponent content="This is version: v.3 Automated Deploy with custom commit message" />,
  document.getElementById("root")
);
