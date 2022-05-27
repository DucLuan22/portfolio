import React from 'react';

function About() {
	return (
		<div className="w-full my-16">
			<div className="max-w-[1240px] mx-auto">
				<div className="text-center">
					<h2 className="text-5xl font-bold">About me</h2>
				</div>
				<div className="flex flex-row items-center drop-shadow-xl bg-gray-200 rounded-2xl my-5">
					<img
						src="https://1.bp.blogspot.com/-9jufP_s7RQk/X9GX8hoyYdI/AAAAAAABcrU/-2qUflYQuNk2kAdcro0FtD_k21Mb67bwACNcBGAsYHQ/s910/computer_tokui_boy.png"
						alt=""
						className="max-h-48 drop-shadow-lg"
					/>
					<p className="text-2xl py-6 text-gray-500 max-w-4xl text-center m-auto">
						My name is Dang Duc Luan. I'm currently studying Computer Science at HCM International
						University
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-1 px-2 py-4 text-center">
					<div className="border py-8 rounded-xl shadow-xl">
						<a href="https://github.com/DucLuan22">
							<img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png" alt="" />
						</a>
					</div>
					<div className="border py-8 rounded-xl shadow-xl">
						<p>0</p>
						<p>PlaceHolder</p>
					</div>
					<div className="border py-8 rounded-xl shadow-xl">
						<p>2</p>
						<p>Social Media</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
