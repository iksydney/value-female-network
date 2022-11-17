import React from 'react';
import styles from '../../../styles/Background.module.css';

function Newsletter() {
	return (
		<section id='newsletter'>
			<div className={styles.newsletterBackground}>
				<div className='pt-14 pb-14 pl-[3vw] pr-[3vw]'>
					<div className='grid grid-cols-1 lg:grid-cols-2 align-middle gap-10'>
						<div className='flex flex-col gap-3'>
							<h3 className=' text-[32px] font-bold '>Subscribe to our newsletter</h3>
							<p className=' text-lg'>
								We would love to send updates directly to you. Subscribe to our newsletter and get
								first-hand and latest information about our upcoming events, projects and
								activities
							</p>
						</div>
						<form
							className='flex flex-row gap-2 items-center flex-wrap md:flex-nowrap'
							onSubmit={(e) => {
								e.preventDefault();
								alert('Subscribed');
							}}
						>
							<input
								type='email'
								className='w-full p-5 placeholder:text-primary focus:outline-none'
								placeholder='Enter Email'
							/>
							<button className='secondaryButton w-full md:w-fit' type='submit'>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Newsletter;
