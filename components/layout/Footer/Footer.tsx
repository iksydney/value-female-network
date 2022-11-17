import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CopyrightIcon from '../../../public/icons/copyright.png';
import BrandDetails from './BrandDetails';
import Posts from './Posts';
import Projects from './Projects';
import QuickLinks from './QuickLinks';

function Footer() {
	return (
		<footer>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-16 pb-16 pl-[3vw] pr-[3vw] bg-dark justify-items-center md:justify-items-start gap-20 '>
				<BrandDetails />
				<Projects />
				<QuickLinks />
				<Posts />
			</div>
			<aside className='pl-[3vw] pr-[3vw] pt-9 pb-9 bg-[#E5E5E5] flex flex-row flex-wrap gap-5 justify-center  md:justify-between font-[Montserrat] font-semibold'>
				<div className='flex items-center gap-[5px]'>
					<Image src={CopyrightIcon} alt='' />
					<span>{new Date().getFullYear()} All Rights Reserved</span>
				</div>
				<div className='flex flex-row items-center gap-3'>
					<Link href='#'>Privacy Policy</Link>
					<div className='bg-dark h-full w-[3px]' />
					<Link href='#'>Terms and Conditions</Link>
				</div>
			</aside>
		</footer>
	);
}

export default Footer;
