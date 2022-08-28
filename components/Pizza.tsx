import React from "react";
import Link from 'next/link'

const Pizza = () => {
	return (
		<><Link href='/product/589653355'>
			<div className="w-56 cursor-pointer text-center">
				<img className="w-full" src="./image/pizza.png" />
				<h1 className="text-rose-600">Campagnola</h1>
				<h3>$19.90</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			</div>
		</Link>
		</>
	);
};

export default Pizza;
