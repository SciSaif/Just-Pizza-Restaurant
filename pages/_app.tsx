import React from "react";
import "../styles/global.css";
import "antd/dist/antd.css";
import Navbar from "../components/Navbar";
const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
