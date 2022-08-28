import React from "react";
import Slider from "../components/Slider";
import Pizzas from "../components/Pizzas";
import Footer from "../components/Footer";
const Home = () => {
	return (
		<div className="md:mt-0 mt-[5rem]">
			<Slider />
			<div className="px-16 md:py-16 py-6  pb-2 ">
				<h1 className="text-center font-bold md:text-3xl text-2xl">
					THE BEST PIZZA IN TOWN
				</h1>
				<p className="md:px-12 ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum.
				</p>
			</div>
			<Pizzas />
			<Footer />
		</div>
	);
};

export default Home;
