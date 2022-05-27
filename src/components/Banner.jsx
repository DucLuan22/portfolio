import React from 'react';

function Banner() {
	return (
		<div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
			<div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
				<div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
					<h1 className="py-3 text-5xl md:text-7xl font-bold">Welcome, User.</h1>
					<p class="text-3xl">This is my website.</p>
					<button className="text-white border bg-slate-800  border-indigo-600
                    hover:bg-transparent hover:text-indigo-600 rounded-md py-3 px-6 sm:w-[60%] my-4 font-bold">
						Download CV
					</button>
				</div>
				<div>
					<img
						src="https://ethereum.org/static/ddb9a22d53fdaaae70c0a0d94577f2aa/66201/eth.png"
						alt=""
						className="max-h-50"
					/>
				</div>
			</div>
		</div>
	);
}

export default Banner;
