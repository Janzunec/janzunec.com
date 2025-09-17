'use client';

import React from 'react';
import LogoWhite from '@/public/logos/white-horizontal.svg';
import LogoBlack from '@/public/logos/black-horizontal.svg';
import Link from 'next/link';
import Image from 'next/image';
import useTheme from '@/app/hooks/useTheme';
import { NAVIGATION_ITEMS } from '@/app/constants/ui';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
	const { isDark } = useTheme();

	return (
		<div
			className={`${isDark
				? 'dark bg-black text-white border-dark-600'
				: 'bg-white text-black border-light-300'
				} px-4 py-12 w-full border-t-[1px] z-20`}
		>
			<div
				className={`md:mx-auto w-full gap-10 items-center flex-col flex md:flex-row justify-between max-w-full lg:max-w-[768px] xl:max-w-content `}
			>
				<Link href={'/'}>
					<Image
						src={isDark ? LogoWhite : LogoBlack}
						alt='Web solutions logo'
						className='w-36 md:w-40 mx-auto md:m-0'
					/>
				</Link>
				{/* <div className='flex gap-8'>
					{NAVIGATION_ITEMS.map((item) => (
						<Link href={item.url} className='text-light-400 '>
							{item.label}
						</Link>
					))}
				</div> */}
				<div className='flex items-center justify-center md:justify-end gap-8'>
					{NAVIGATION_ITEMS.map((item) => (
						<Link
							href={item.url}
							key={item.label}
							className='text-light-400 hover:text-light-100 transition-all'
						>
							{item.label}
						</Link>
					))}
					<Link href='https://github.com/Janzunec' target='_blank' rel='noreferrer'>
						<FaGithub className='text-3xl text-light-400 hover:text-light-100 transition-all' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
