'use client';

import React from 'react';
import SubHeading from '../sub-heading';
import dynamic from 'next/dynamic';

// Dynamically import CalendlyWidget with SSR disabled
const CalendlyWidget = dynamic(() => import('./CalendlyWidget'), { 
	ssr: false,
	loading: () => <div className="flex items-center justify-center h-[1000px] text-gray-500">Loading calendar...</div>
});

const Contact = () => {
	return (
		<div
			id='contact'
			className='w-full flex justify-between md:items-start flex-col md:flex-row gap-8 xl:px-0'
		>
			<div className='flex w-full md:w-1/2 flex-col md:mt-16 items-center md:items-start gap-4'>
				<SubHeading>
					Let&apos;s hop on a{' '}
					<span className='text-green-500'>Call</span>
				</SubHeading>
				<div className='flex items-center md:items-start flex-col gap-2'>
					<p className='text-green-300 text-lg'>
						Need a developer for your great project?
					</p>
					<p className='text-center md:text-left'>
						Hit me up, let me know of your great project, and
						let&apos;s see where this takes us. I am always open to working on innovative and exciting projects.
					</p>
				</div>
				<div className='flex items-center md:items-start flex-col gap-2'>
					<p className='text-green-300 text-lg'>Just want to connect?</p>
					<p className='text-center md:text-left'>
						Book a call, let me know what you want to talk about, and we&apos;ll see if it&apos;s a good fit.
					</p>
				</div>
			</div>
			<CalendlyWidget
				url='https://calendly.com/jan-zunec/30-min-web-solutions'
				styles={{
					width: typeof window !== 'undefined' && window.innerWidth < 768 ? '100%' : '40vw',
					height: '1000px',
					padding: 0,
					margin: 0,
				}}
			/>
		</div>
	);
};

export default Contact;
