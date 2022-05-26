import React from 'react';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
function Navbar() {
	const [ nav, setNav ] = useState(false);
	const dropDown = () => {
		setNav(!nav);
	};
	return (
		<nav className="w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg">
			<div className="px-2 flex justify-between items-center w-full h-full">
				<div className="flex items-center">
					<h1 className="text-3xl font-bold mr-4 sm:text-4xl">LUAN.</h1>
					<ul className="hidden md:flex font-semibold">
						<li>Home</li>
						<li>About</li>
						<li>Project</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="md:hidden" onClick={dropDown}>
					{!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
				</div>
			</div>
			<ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 font-semibold'}>
				<li className="border-b-2 border-zinc-300 w-full">Home</li>
				<li className="border-b-2 border-zinc-300 w-full">About</li>
				<li className="border-b-2 border-zinc-300 w-full">Project</li>
				<li className="border-b-2 border-zinc-300 w-full">Contact</li>
			</ul>
		</nav>
	);
}

export default Navbar;
