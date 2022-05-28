import React from 'react';

function ProjectCard({ title, description }) {
	return (
		<div className="h-full max-w-lg overflow-hidden shadow-lg bg-slate-500 rounded-3xl">
			<img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
			<div className="px-6 py-4">
				<div className="font-bold text-xl ">{title}</div>
				<p className="text-gray-700 text-base">{description}</p>
			</div>
			<div className="flex justify-center gap-[10%] items-center py-5">
				<span>
					<button
						type="button"
						className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
					>
						Demo
					</button>
				</span>
				<span>
					<button
						type="button"
						className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
					>
						Github
					</button>
				</span>
			</div>
		</div>
	);
}

export default ProjectCard;
