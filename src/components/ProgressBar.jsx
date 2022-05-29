import React from 'react';
const Progress = ({ done }) => {
	const [ style, setStyle ] = React.useState({});

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		};

		setStyle(newStyle);
	}, 200);

	return (
		<div className="h-5 mx-0 bg-zinc-600 rounded-xl">
			<div
				className=" transition-all duration-1000 ease-linear font-bold flex items-center justify-center h-full opacity-0 text-white w-0 rounded-xl bg-gradient-to-r from-cyan-900 via-purple-700 to-fuchsia-700"
				style={style}
			>
				{done}%
			</div>
		</div>
	);
};
export default Progress;
