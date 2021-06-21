import React from "react";
import { ThemeProvider } from "styled-components";
import { hexToRgba } from "./scripts/data";

//colors used in the app.
const theme = {
	fastShopping:{
		first: "#483186",
		second: "#ea4324",
		text: "#525366",
		lightGray: '#F2F2F2',
		strongGray: '#525366',
		buttons:{
			hoverFirst: '#ea4324',
			hoverSecond: '#483186',
			hoverOutFirst: `${hexToRgba('#483186', '0.1')}`,
			hoverOutSecond: `${hexToRgba('#ea4324', '0.1')}`
		}
	}
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
