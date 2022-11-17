import Image from 'next/image';
import React from 'react';
import DonateImage from '../../../public/backgrounds/donate.png';

function DonateBanner() {
	return (
		<section id='donate'>
			<div className='flex justify-between flex-wrap'>
				<div className='flex-[100%] lg:flex-[50%]'>
					<div className='flex flex-col bg-[#E5EDEA] pl-[3vw] pr-[3vw] p-[52px] h-full'>
						<h1 className='font-[Kalam] text-[32px] text-success mb-4'>
							Your Support will Change Lives!
						</h1>
						<p className='text-lg'>
							Women and girls continue to be exposed to harmful traditional practices and
							Gender-based violence globally. In Nigeria alone, an estimated 14.8 million girls
							are at risk of FGM before 2030.
							<br />
							<br />
							Your support through donations will make sure that we continue to support girls
							education and end mutilation during and after the pandemic.
							<br />
							<br />
							Your donations will ensure that we continue to provide safe spaces for In and
							Out-of-School vulnerable girls across communities in Nigeria.
							<br />
							<br />
							We will make sure to send you newsletters and briefs on how we utilize the funds
							you donate to us.
						</p>
					</div>
				</div>
				<div className='flex-[100%] lg:flex-[50%] relative'>
					<Image src={DonateImage} alt='Donate' layout='fill' objectFit='cover' />
				</div>
			</div>
		</section>
	);
}

export default DonateBanner;
