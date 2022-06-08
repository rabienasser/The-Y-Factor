import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
   typography: {
      fontFamily: "Montserrat",
   },
   palette: {
      darkBlue: {
         main: "#2650a6",
      },
      darkGrey: {
         main: "#696969",
      },
      lightGrey: {
         main: "#7c818f",
      },
      thirdColor: {
         main: "#7fb7d4",
      },
      lightColor: {
         main: "#fbf9fa",
      },
   },
   components: {
      MuiTableCell: {
         defaultProps: {
            align: "center",
         },
      },
   },
});

theme.typography.h2 = {
   fontSize: "3rem",
   [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
   },
};

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
