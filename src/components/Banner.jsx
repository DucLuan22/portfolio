import React from 'react';

function Banner() {
	return (
		<div className="w-full h-screen flex flex-col justify-between bg-cover bg-zinc-900 font-manrope">
			<div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
				<div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
					<h1 className="py-3 text-5xl md:text-7xl font-bold text-white">
						Welcome, <span className="text-pink-500 ">User.</span>
					</h1>
					<h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
						<span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
							I'm <span className="text-pink-500 ml-4 font-semibold inline-block">Duc Luan.</span>
						</span>
						<span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform" />
					</h1>
					<div className="relative my-8 group">
						<div className="absolute -inset-0.5 opacity-60 rounded-lg blur bg-gradient-to-r from-fuchsia-600 via-purple-400 to-violet-700 group-hover:opacity-100 transition duration-1000 group-hover:duration-800" />
						<button className=" relative bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 px-9 py-3">
							<span className="space-x-5 items-center flex font-normal">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 text-pink-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M12 14l9-5-9-5-9 5 9 5z" />
									<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									/>
								</svg>
								<span className="text-gray-100 font-semibold pr-6">My CV 2022.05</span>
							</span>

							<a
								href="/"
								className="text-purple-500 pl-7 group-hover:text-gray-100 transition duration-200"
							>
								Click here to download
							</a>
						</button>
					</div>
				</div>
				<div className="inline-block">
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
