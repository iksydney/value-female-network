import Link from 'next/link';
import React from 'react';

function QuickLinks() {
	return (
		<div className='flex flex-col items-center md:items-start text-offWhite '>
			<h6 className='mt-0 mb-0 text-2xl font-[Montserrat] font-bold'>Quick Links</h6>
			<ul className='flex flex-col gap-4 items-center md:items-start list-none mt-12 text-offWhite text-lg'>
				<li className='hover:text-lightSuccess'>
					<Link href='/'>Home</Link>
				</li>
				<li className='hover:text-lightSuccess'>
					<Link href='/#about'>About Us</Link>
				</li>
				{/* <li className='hover:text-lightSuccess'>
					<Link href='/#events'>Events</Link>
				</li> */}
				<li className='hover:text-lightSuccess'>
					<Link href='/#contact'>Contact</Link>
				</li>
			</ul>
		</div>
	);
}

export default QuickLinks;
