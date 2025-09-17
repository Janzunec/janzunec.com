import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './ui/Navigation';
import RootProviders from './ui/root-providers';

import './globals.css';
import NotificationBanner from './ui/NotificationBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jan Žunec',
	description:
		'Software developer and UI designer from Slovenia. Building reliable and efficient software. Enthusiast and developer of ethereum identity. Use AI to maximize output.',
};

export interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang='en'>
			<RootProviders>
				<body
					className={`${inter.className} min-h-screen overflow-x-hidden`}
				>
					{/* <BackgroundBeams /> */}
					<Navigation />
					<NotificationBanner />
					{children}
				</body>
			</RootProviders>
		</html>
	);
};

export default RootLayout;
