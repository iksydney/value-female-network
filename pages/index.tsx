import type { NextPage } from 'next';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import About from '../components/pages/Home/About';
import Contact from '../components/pages/Home/Contact';
import Hero from '../components/pages/Home/Hero';
import JoinSection from '../components/pages/Home/JoinSection';
import Newsletter from '../components/pages/Home/Newsletter';
import { reveal } from '../functions/animation';

const Home: NextPage = () => {
	// For scroll animation
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', reveal);
		}
	}, []);
	return (
		<AppLayout>
			<Hero />
			<About />
			<JoinSection />
			<Contact />
			<Newsletter />
		</AppLayout>
	);
};

export default Home;
