import React from "react";

const Footer = () => {
	return (
		<div className=" lg:flex  text-white bg-slate-800">
			<div className=" flex  flex-1">
				<div className="flex-1">
					<img className="h-full object-contain " src="../image/bg.png" />
				</div>
				<div className="flex-1 mt-16 flex justify-center ">
					<h4 className="text-white mx-12 text-lg font-bold  ">
						OH YES WE DID THE 'JUST PIZZA' ,WELL BAKED SLICE OF PIZZA
					</h4>
				</div>
			</div>
			<div className="flex-1  flex mt-16">
				<div className="flex-1 lg:ml-0  ml-8">
					<h3 className="text-amber-400 text-base">
						FIND OUR RESTAURANTS
					</h3>
					<p className="w-24">
						1654 R. Lorem ipsum dolor #304 NewYork, 1896 sit amet
					</p>
					<p className="w-24">
						1654 R. Lorem ipsum dolor #304 NewYork, 1896 sit amet
					</p>
					
				</div>
				<div className="flex-1 ">
					<h3 className="text-amber-400 text-base">
						FIND OUR RESTAURANTS
					</h3>
					<p className="w-24">
						1654 R. Lorem ipsum dolor #304 NewYork, 1896 sit amet
					</p>
					<p className="w-24">
						1654 R. Lorem ipsum dolor #304 NewYork, 1896 sit amet
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
