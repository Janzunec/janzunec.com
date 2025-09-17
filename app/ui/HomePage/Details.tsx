import React from 'react';
import { BentoGrid, BentoGridItem } from '../bento-grid';
import Build from './components/Build';
import dynamic from 'next/dynamic';

// Dynamically import components with potential SSR issues
const Technologies = dynamic(() => import('./Technologies'), { 
	ssr: false,
	loading: () => <div className="w-full h-full flex-col justify-center gap-4 items-center z-20 flex bg-transparent" />
});

const Hire = dynamic(() => import('./components/Hire'), { 
	ssr: false,
	loading: () => <div className="w-44 mx-auto lg:w-[60%] md:-translate-y-2 scale-110 overflow-hidden" />
});

const ProgressiveApps = dynamic(() => import('./components/ProgressiveApps'), { 
	ssr: false,
	loading: () => <div className="md:w-full w-64 mx-auto md:mx-0 -translate-x-3 md:scale-110 lg:scale-110 overflow-hidden" />
});

const Details = () => {
	return (
		<BentoGrid className='max-w-5xl md:auto-rows-[20rem]'>
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={item.className}
				/>
			))}
		</BentoGrid>
	);
};

const items = [
	{
		title: 'Focus on Latest Technology',
		description:
			'I focus on using a wide range of latest technologies to build competitive software with performance and elegance in mind. You can always learn new technologies.',
		header: <Technologies />,
		className: 'md:col-span-2',
	},
	{
		title: 'Modern UI/UX Design',
		description:
			'Focus on creating modern and responsive UI/UX designs for any software',
		header: <ProgressiveApps />,
		className: 'md:col-span-1',
	},
	{
		title: 'Fast paced development',
		description:
			"I work fast, get things done, and don't beat around the bush",
		header: <Hire />,
		className: 'md:col-span-1',
	},
	{
		title: 'Leading projects from start to finish',
		description:
			'I got experience leading projects from start to finish, and am always excited to take on a lead role. Framing issues, designing prototypes, and building the perfect application.',
		header: <Build />,
		className: 'md:col-span-2',
	},
];

export default Details;
