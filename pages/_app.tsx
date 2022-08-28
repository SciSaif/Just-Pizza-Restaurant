import React from "react";
import "../styles/global.css";
import "antd/dist/antd.css";
import Head from 'next/head';
import Navbar from "../components/Navbar";
const MyApp = ({ Component, pageProps }) => {
	return (
		<>
		<Head>
			<title>Just Pizza</title>
			<link rel="icon" href="../image/Just Pizza!-logos_transparent.png" />
		</Head>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
