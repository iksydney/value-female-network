import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MenuIcon from '../../../public/icons/menu.png';
import MenuComponent from '../../reusable/MenuComponent/MenuComponent';
import LogoComponent from '../LogoComponent';

function Navbar() {
	return (
		<nav className='pl-[3vw] pr-[3vw] pt-6 pb-5 shadow-sm'>
			<div className='flex flex-row flex-wrap items-center'>
				<div className='mr-auto'>
					<Link href='/'>
						<LogoComponent />
					</Link>
				</div>

				<div className='flex-row items-center gap-10 hidden lg:flex'>
					<Link href='/#about'>
						<span className='font-bold hover:text-success cursor-pointer'>About Us</span>
					</Link>
					{/* <Link href='/#events'>
						<span className='font-bold hover:text-success cursor-pointer'>Event and News</span>
					</Link> */}
					<Link href='/#contact'>
						<span className='font-bold hover:text-success cursor-pointer'>Contact Us</span>
					</Link>
					<Link href='/#join-us'>
						<button className='primaryButton'>Join Us</button>
					</Link>
				</div>
				<div className='lg:hidden relative cursor-pointer'>
					<MenuComponent
						button={
							<div className='menu'>
								<Image src={MenuIcon} alt='Menu' />
							</div>
						}
						links={[
							{
								label: 'About Us',
								href: '/#about',
							},
							{
								label: 'Event and News',
								href: '/#events',
							},
							{
								label: 'Contact Us',
								href: '/#contact',
							},
							{
								label: 'Join Us',
								href: '/#join-us',
							},
						]}
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
