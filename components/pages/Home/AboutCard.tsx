import Image, { StaticImageData } from 'next/image';
import React from 'react';

function AboutCard({
	image,
	title,
	description,
}: {
	image: StaticImageData;
	title: string;
	description: string;
}) {
	return (
		<div className='bg-white p-16 pl-10 pr-10 rounded-2xl shadow-md reveal'>
			<div className='flex flex-col items-center'>
				<Image src={image} alt='About' />
				<h3 className='font-bold text-[#181010] text-2xl text-center mt-5'>{title}</h3>
				<p className='text-center mt-5 text-xl'>{description}</p>
			</div>
		</div>
	);
}

export default AboutCard;
