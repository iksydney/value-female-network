import React from 'react';

function Posts() {
	return (
		<div className='flex flex-col items-center md:items-start text-offWhite '>
			<h6 className='mt-0 mb-0 text-2xl font-[Montserrat] font-bold'>Latest posts</h6>
			<ul className='flex flex-col gap-4 items-center md:items-start list-none mt-12 text-offWhite text-lg'>
				<li className='flex flex-col gap-1'>
					<span>Care for Women</span>
					<span className='text-sm text-lightSuccess'>May 20, 2021.</span>
				</li>
				<li className='flex flex-col gap-1'>
					<span>Care for Women</span>
					<span className='text-sm text-lightSuccess'>May 20, 2021.</span>
				</li>
				<li className='flex flex-col gap-1'>
					<span>Care for Women</span>
					<span className='text-sm text-lightSuccess'>May 20, 2021.</span>
				</li>
			</ul>
		</div>
	);
}

export default Posts;
