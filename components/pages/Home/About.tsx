import React from 'react';
import styles from '../../../styles/Background.module.css';
import AboutCard from './AboutCard';
import HealthIcon from '../../../public/images/about/health.png';
import EqualIcon from '../../../public/images/about/equality.png';
import JudgeIcon from '../../../public/images/about/judge.png';
import FamilyIcon from '../../../public/images/about/family.png';
import LoveIcon from '../../../public/images/about/love.png';
import WomenBG from '../../../public/images/about/women-background.png';
import Link from 'next/link';
import Image from 'next/image';

function About() {
	return (
		<section id='about'>
			<div className={'pt-[62px] pb-[80px] pl-[3vw]' + ' ' + styles.aboutContainer}>
				<div className='flex flex-col items-center  pr-[3vw]'>
					<h2 className='text-success font-[Kalam] text-[32px]'>Who we are!</h2>
					<p className='max-w-screen-sm text-center text-2xl'>
						We are a youth-led, registered, non-governmental organization that seeks to
						establish the health and rights of women and girls in local communities. We believe
						that every girl is costly and should be treated with such care and dignity
					</p>
					<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:justify-items-stretch gap-16'>
						<AboutCard
							description='We bring information about sexual and reproductive health to women and girls of various ages at the grassroot level (both in rural and urban communities)'
							title='Sexual and Reproductive Health Information'
							image={HealthIcon}
						/>
						<AboutCard
							description='We offer family planning services to all gender as well as assist young people in making effective choices concerning contraceptive use.'
							title='Family Planning and Contraceptive services'
							image={FamilyIcon}
						/>
						<AboutCard
							description='We are actively involved in advocacy projects to local communities where harmful traditional practices including FGM/C, early child marriage amongst others, as well as gender based violence are endemic. We advocate through community sensitization, mass media and social media channels.'
							title='Advocacy'
							image={LoveIcon}
						/>
						<AboutCard
							description='We operate a pro-bono legal arm that provides prompt relief and justice to victims and survivors of gender based violence and harmful traditional practices.'
							title='Gender Justice'
							image={JudgeIcon}
						/>
						<AboutCard
							description='We educate and encourage women and girls in local communities to speak up against social and gender norms and to be bold enough to achieve their dreams.'
							title='Gender Equality'
							image={EqualIcon}
						/>
					</div>
				</div>
				<div className='grid justify-items-center lg:justify-items-end mt-[85px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center '>
					<div className='flex flex-col items-center md:items-start reveal'>
						<h3 className='text-success font-[Kalam] text-[32px] md:text-left text-center'>
							Support Our Quest Today!
						</h3>
						<p className='text-2xl mt-4 mb-10 md:text-left text-center'>
							Join our Crusade of helping humanity. Your Impact will Make the World a Better
							place.
						</p>
						<a href='#join-us'>
							<button className='primaryButton'>Join Us</button>
						</a>
					</div>
					<div className='lg:col-span-2 p-0 m-0'>
						<Image src={WomenBG} alt='Women' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
