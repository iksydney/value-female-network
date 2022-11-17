import Image from 'next/image';
import React from 'react';
import LogoComponent from '../LogoComponent';
import LocationIcon from '../../../public/icons/location.png';
import EmailIcon from '../../../public/icons/email.png';
import CallIcon from '../../../public/icons/call.png';
import FacebookIcon from '../../../public/icons/facebook.png';
import WhatsappIcon from '../../../public/icons/whatsapp.png';
import YoutubeIcon from '../../../public/icons/youtube.png';
import TwitterIcon from '../../../public/icons/twitter.png';
import InstagramIcon from '../../../public/icons/instagram.png';

function BrandDetails() {
	return (
		<div className='flex flex-col items-center md:items-start'>
			<LogoComponent />
			<ul className='flex flex-col gap-4 items-center md:items-start list-none mt-8 text-offWhite text-lg'>
				<li className='flex flex-row items-center gap-3 justify flex-wrap md:flex-nowrap justify-center'>
					<Image src={LocationIcon} alt='' height={40} width={40} objectFit='contain' />
					<span>
						VFN House, behind Federal Ministry of Agriculture, GRA Osogbo, Osun State
					</span>
				</li>
				<li className='flex flex-row items-center gap-3 flex-wrap md:flex-nowrap justify-center'>
					<Image src={CallIcon} alt='' />
					<span>+2348134730893</span>
				</li>
				<li className='flex flex-row items-center gap-3 flex-wrap md:flex-nowrap justify-center'>
					<Image src={EmailIcon} alt='' />
					<span className='break-all'>valuefemalenetwork@gmail.com</span>
				</li>
				<li className='flex flex-row items-center gap-5 mt-5'>
					<a
						href='https://www.facebook.com/ValueFemaleNetwork/'
						target='_blank'
						rel='noreferrer'
					>
						<Image src={FacebookIcon} alt='Facebook' />
					</a>
					<a href='https://wa.me/+2348134730893/' target='_blank' rel='noreferrer'>
						<Image src={WhatsappIcon} alt='Whatsapp' />
					</a>
					<a
						href='https://www.youtube.com/channel/UCyxlejXeVFTUuoM_Lt15Lzw'
						target='_blank'
						rel='noreferrer'
					>
						<Image src={YoutubeIcon} alt='Youtube' />
					</a>
					<a href='https://twitter.com/ValueFemaleNet' target='_blank' rel='noreferrer'>
						<Image src={TwitterIcon} alt='Twitter' />
					</a>
					<a
						href='https://www.instagram.com/valuefemalenetwork_/'
						target='_blank'
						rel='noreferrer'
					>
						<Image src={InstagramIcon} alt='Instagram' />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default BrandDetails;
