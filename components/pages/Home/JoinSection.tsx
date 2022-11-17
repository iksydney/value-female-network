import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/Background.module.css';

function JoinSection() {
	return (
		<section id='join-us'>
			<div className={styles.joinUsContainer}>
				<div className='pt-14 pb-14 pl-[3vw] pr-[3vw] flex items-center flex-col reveal'>
					<h3 className='font-[Kalam] text-center text-4xl pb-10'>
						Are you enthusiastic about SRHR???
					</h3>
					<p className='max-w-lg text-center text-2xl pb-16'>
						Become a part of a community ensuring that women and girls, as well as young people,
						get the right access to sexual reproductive health and rights (SRHR) information and
						services.
					</p>
					<Link href='/donate'>
						<button
							className='secondaryButton'
							style={{
								width: 'fit-content',
								padding: 20,
							}}
						>
							It starts here
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default JoinSection;
