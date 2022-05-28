import React from 'react';
import ProjectCard from './ProjectCard';
function Project() {
	return (
		<div className="w-full md:h-screen bg-blend-normal">
			<div className="max-w-[1500px] mx-auto">
				<div className="text-center">My Projects: </div>
				<div className="grid md:grid-cols-3  gap-9 justify-center py-14">
					<ProjectCard
						title="E-commerce Website"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo beatae temporibus in mollitia eos facilis accusamus tempore, aliquid debitis veniam, laborum quaerat a voluptas alias perspiciatis quia aspernatur nam?"
					/>
					<ProjectCard
						title="E-commerce Website"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo beatae temporibus in mollitia eos facilis accusamus tempore, aliquid debitis veniam, laborum quaerat a voluptas alias perspiciatis quia aspernatur nam?"
					/>
					<ProjectCard
						title="E-commerce Website"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo beatae temporibus in mollitia eos facilis accusamus tempore, aliquid debitis veniam, laborum quaerat a voluptas alias perspiciatis quia aspernatur nam?"
					/>
					<ProjectCard
						title="E-commerce Website"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo beatae temporibus in mollitia eos facilis accusamus tempore, aliquid debitis veniam, laborum quaerat a voluptas alias perspiciatis quia aspernatur nam?"
					/>
					<ProjectCard
						title="E-commerce Website"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nemo beatae temporibus in mollitia eos facilis accusamus tempore, aliquid debitis veniam, laborum quaerat a voluptas alias perspiciatis quia aspernatur nam?"
					/>
				</div>
			</div>
		</div>
	);
}

export default Project;
