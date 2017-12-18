import * as React from "react";

export const SimpleComponent = (props: { content: string }) => {
  return <h2 className="jumbotron">Content: {props.content} !</h2>;
};
