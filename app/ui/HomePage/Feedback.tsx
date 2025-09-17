import React from 'react';
import { testimonials } from '../../constants/ui';
import SubHeading from '../sub-heading';
import dynamic from 'next/dynamic';

// Dynamically import animation components with SSR disabled
const InfiniteMovingCards = dynamic(() => import('../infinite-moving-cards').then(mod => ({ default: mod.InfiniteMovingCards })), { 
	ssr: false,
	loading: () => <div className="max-w-content px-4 overflow-hidden" />
});

const CardStack = dynamic(() => import('../card-stack').then(mod => ({ default: mod.CardStack })), { 
	ssr: false,
	loading: () => <div className="relative h-[260px] w-full shadow-xl shadow-green-500/30 rounded-3xl md:h-68 md:w-96" />
});

const Feedback = () => {
	return (
		<div className='w-full max-w-5xl flex flex-col items-center lg:items-start gap-12 xl:px-0'>
			<SubHeading>
				Recent <span className='text-green-500'>Feedback</span>
			</SubHeading>
			<div className='hidden md:block'>
				<InfiniteMovingCards
					items={testimonials}
					direction='left'
					speed='slow'
				/>
			</div>
			<div className='w-full mt-4 block md:hidden'>
				<CardStack items={testimonials} />
			</div>
		</div>
	);
};

export default Feedback;
