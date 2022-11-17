import React from 'react';

function Contact() {
	return (
		<section id='contact'>
			<div className='reveal p-14 pl-[3vw] pr-[3vw]'>
				<div className='pt-14 pb-14 pl-[3vw] pr-[3vw] flex items-center flex-col reveal'>
					<h3 className='font-[Kalam] text-center text-4xl pb-2'>Contact Us</h3>
					<p className='max-w-lg text-center pb-16'>We look forward to hearing from you</p>
					<form
						className='flex flex-col gap-5 w-full items-center'
						onSubmit={(e) => {
							e.preventDefault();
							alert('Contacted');
						}}
					>
						<input
							type='text'
							className=' max-w-full p-5 border-[#00915F] border-2 w-[600px]'
							placeholder='Full name'
						/>
						<input
							type='email'
							className=' max-w-full p-5 border-[#00915F] border-2 w-[600px]'
							placeholder='Enter Email'
						/>
						<input
							type='tel'
							className=' max-w-full p-5 border-[#00915F] border-2 w-[600px]'
							placeholder='Phone number'
						/>
						<textarea
							className=' max-w-full p-5 border-[#00915F] border-2 w-[600px]'
							placeholder='Message'
							rows={3}
						></textarea>
						<button className='secondaryButton w-full max-w-[600px]' type='submit'>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
