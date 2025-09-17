'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the Calendly widget with SSR disabled
const InlineWidget = dynamic(
	() => import('react-calendly').then(mod => mod.InlineWidget),
	{ ssr: false }
);

interface CalendlyWidgetProps {
	url: string;
	styles: {
		width: string;
		height: string;
		padding: number;
		margin: number;
	};
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url, styles }) => {
	return <InlineWidget url={url} styles={styles} />;
};

export default CalendlyWidget;