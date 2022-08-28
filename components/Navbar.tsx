import React from "react";
import { ShoppingCartOutlined, PhoneOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import Link from 'next/link'

const Navbar = () => {
	// console.log(quantity);

	return (
		<div className="h-20 z-50 fixed top-0 inset-x-0 flex text-white items-center bg-orange-600">
			<div className="py-1 px-4  flex w-full justify-between items-center">
				<div className="sm:w-1/3 flex  w-44 items-center space-x-2">
					<span className="text-2xl text-rose-600 flex rounded-full p-2 bg-white">
						<PhoneOutlined />
					</span>
					<div className="flex-col w-44 flex items-centre">
						<span className=" text-xs font-thin ">OORDER NOW</span>
						<span className=" text-base -mt-1 font-bold  ">
							01 234 567
						</span>
					</div>
				</div>
				<div className="    w-1/3  flex md:justify-center items-center space-x-2 text-center">
					<div className="hidden md:block space-x-2">
						<span className="font-semibold">Homepage</span>
						<span className="font-semibold">Products</span>
						<span className="font-semibold">Menu</span>
					</div>
					<Link href="/">
					<img
						className="h-24 cursor-pointer"
						src="../image/Just Pizza!-logos_white.png"
						alt="LOGO"
						/>
						</Link>
					<div className="hidden md:block space-x-2">
						<span className="font-semibold">Events</span>
						<span className="font-semibold">Blog</span>
						<span className="font-semibold">Contact</span>
					</div>
				</div>
				<div className="w-1/3 flex justify-end items-center space-x-6">
					<Link href="/cart">
					<div className="-mt-2  cursor-pointer">
						<Badge
							size="small"
							style={{
								position: "absolute",
								right: 5,
								top: 12,
								backgroundColor: "white",
								color: "red",
								fontWeight: 700,
							}}
							className=""
							count={2}
							>
							<span className="text-2xl text-white">
								<ShoppingCartOutlined />
							</span>
						</Badge>
					</div>
							</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
