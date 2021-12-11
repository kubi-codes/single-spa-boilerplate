import React from "react";

// helpers
import Components from "./components/helper";
import mainTheme from "./components/theme";

export default function Root(props) {
  return (
    <Components.Mui.ThemeProvider theme={mainTheme}>
      <section>{props.name} is mounted!</section>
    </Components.Mui.ThemeProvider>
  );
}
