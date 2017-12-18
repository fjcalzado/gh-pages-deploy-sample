import * as React from "react";
import * as ReactDOM from "react-dom";
import { SimpleComponent } from "./component";

ReactDOM.render(<SimpleComponent content="This is text (modified) from parent" />, document.getElementById("root"));
