import React from 'react';
import Progress from './ProgressBar';
function About() {
	return (
		<div className="w-full bg-gradient-to-br from-sky-900 via-sky-700 to-cyan-700">
			<div className="max-w-[1240px] mx-auto pb-60">
				<div className="text-center">
					<h2 className="text-5xl font-bold py-6 text-white">About me</h2>
				</div>
				<div className="flex flex-row items-center drop-shadow-xl bg-white rounded-2xl my-5 ">
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

				<div className="grid md:grid-cols-3 gap-7 px-2 py-4 text-center ">
					<div className="border py-8 rounded-xl shadow-xl  bg-white">
						<a href="https://github.com/DucLuan22" className="flex justify-center">
							<img
								src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
								alt=""
								className="max-h-48 w-96"
							/>
						</a>
					</div>
					<div className="border py-8 rounded-xl shadow-xl bg-white">
						<a href="https://fb.com/Ducluan22" className="flex justify-center">
							<img
								src="https://alxgroup.com.au/wp-content/uploads/2019/01/facebook-3-logo-png-transparent.png"
								alt=""
								className="object-contain  max-h-48 w-96"
							/>
						</a>
					</div>
					<div className="border py-8 rounded-xl shadow-xl  bg-white">
						<a
							href="https://www.linkedin.com/in/%C4%91%E1%BB%A9c-lu%C3%A2n-%C4%91%E1%BA%B7ng-b148a9239/"
							className="flex justify-center"
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
								alt=""
								className="object-contain h-48 w-96"
							/>
						</a>
					</div>
				</div>
				<div className="flex flex-col items-center drop-shadow-xl bg-neutral-800 rounded-2xl my-5 ">
					<div className="w-[100%] flex flex-row mx-4 justify-start items-center my-5">
						<img
							src="https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360"
							alt=""
							className="max-h-10 pl-2 max-w-3"
						/>
						<div className="w-[90%] pl-10">
							<Progress done="90" />
						</div>
					</div>
					<div className="w-[100%] flex flex-row mx-4 justify-items-start items-center my-5">
						<img
							src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
							alt=""
							className="max-h-10 pl-2 max-w-3"
						/>
						<div className="w-[90%] pl-10">
							<Progress done="80" />
						</div>
					</div>
					<div className="w-[100%] flex flex-row mx-4 justify-start items-center my-5">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
							alt=""
							className="max-h-10 pl-2 max-w-3"
						/>
						<div className="w-[90%] pl-9">
							<Progress done="75" />
						</div>
					</div>
					<div className="w-[100%] flex flex-row mx-4 justify-start items-center my-5">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/1200px-Webysther_20160423_-_Elephpant.svg.png"
							alt=""
							className="max-h-10 max-w-3 pl-2"
						/>
						<div className="w-[90%] pl-6">
							<Progress done="80" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
