import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Slider = () => {
	const [index, setIndex] = useState(0);

	const handleClick = (value) => {
		if (value === "right") {
			console.log("right");
			setIndex((index + 1) % 3);
		} else if (value === "left") {
			console.log("left");
			setIndex((3 + index - 1) % 3);
		}
	};

	// console.log("index", index);
	return (
		<div className="relative md:h-screen overflow-hidden ">
			<div
				onClick={() => handleClick("left")}
				className="md:ml-4 md:text-6xl text-4xl cursor-pointer text-white z-40 px-2 py-2 flex items-center absolute left-0 md:top-0 sm:top-40 top-16 md:bottom-0 my-auto h-fit  rounded-full"
			>
				<LeftOutlined />
			</div>

			<div
				style={{ transform: ` translateX(-${index * 100}vw)` }}
				className={`slider_wraper `}
			>
				<div className="md:h-screen h-1/2 min-w-[100vw] flex bg-orange-600 text-centre">
					<img
						className="w-full h-full object-contain"
						src="./image/featured1.png"
						alt="shoping img"
					></img>
				</div>
				<div className="md:h-screen h-1/2 min-w-[100vw]  flex bg-orange-600 text-centre">
					<img
						className="w-full h-full object-contain"
						src="./image/featured2.png"
						alt="shoping img"
					></img>
				</div>
				<div className="md:h-screen h-1/2 min-w-[100vw]  flex bg-orange-600 text-centre">
					<img
						className=" w-full h-full object-contain"
						src="./image/featured3.png"
						alt="shoping img"
					></img>
				</div>
			</div>

			<div
				onClick={() => handleClick("right")}
				className="md:mr-4  md:text-6xl text-4xl cursor-pointer text-white flex items-center px-2 py-2 absolute right-0 md:top-0 sm:top-40 top-16 md:bottom-0 my-auto h-fit   rounded-full"
			>
				<RightOutlined />
			</div>
		</div>
	);
};

export default Slider;
