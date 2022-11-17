import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/brand/logo.png';

function LogoComponent() {
	return (
		<Link href='/'>
			<div className='flex flex-row items-center gap-2 cursor-pointer'>
				<Image src={Logo} alt='Logo' width={50} height={50} />
				<span className='max-w-[151px] font-bold uppercase text-secondary'>
					Value female Network
				</span>
			</div>
		</Link>
	);
}

export default LogoComponent;
