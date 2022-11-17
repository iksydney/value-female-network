import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Background.module.css';

function Hero() {
	return (
		<section id='home'>
			<div className={'relative pl-[3vw] pb-3' + ' ' + styles.heroContainer}>
				<div className='bg-[#00915F99]  min-h-[60vh] w-[calc(100vw-7vw)] max-w-[610px]'>
					<div className='flex flex-col p-10 pt-14'>
						<h1 className='font-[Kalam] text-offWhiteMain font-bold md:text-[56px] text-[48px]'>
							A Huge Network of Productive Young people!
						</h1>
						<p className='mt-5 mb-5 text-offWhiteMain md:text-[32px] text-[25px]'>
							We are committed to tackling harmful and deleterious social and gender norms
						</p>
						<a href='#join-us'>
							<button className='primaryButton'>Join Us</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
