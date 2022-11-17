import React from 'react';
import LabelInput from '../../reusable/LabelInput/LabelInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import DonationValue from './DonationValue';

function DonationForm() {
	const changeDonationType = (value: string) => {
		formik.setFieldValue('donationType', value);
	};

	const formik = useFormik({
		initialValues: {
			donationType: 'Personal Info',
			firstName: '',
			lastName: '',
			country: '',
			state: '',
			city: '',
			email: '',
			phone: '',
			donationValue: 0,
		},
		onSubmit: () => {
			makeDonation();
		},
		validationSchema: yup.object({
			firstName: yup.string().when('donationType', {
				is: 'Personal Info',
				then: yup.string().trim().required('First name is required'),
			}),
			lastName: yup.string().when('donationType', {
				is: 'Personal Info',
				then: yup.string().trim().required('Last name is required'),
			}),
			country: yup.string().when('donationType', {
				is: 'Personal Info',
				then: yup.string().trim().required('Country is required'),
			}),
			state: yup.string().when('donationType', {
				is: 'Personal Info',
				then: yup.string().trim().required('State is required'),
			}),
			city: yup.string().when('donationType', {
				is: 'Personal Info',
				then: yup.string().trim().required('City is required'),
			}),
			email: yup.string().when('donationType', {
				is: 'Personal Info',
				then: yup.string().email('Must be a valid email').required('Email is required'),
			}),
			phone: yup.string().when('donationType', {
				is: 'Personal Info',
				then: yup.string().trim().required('Phone number is required'),
			}),

			donationValue: yup
				.number()
				.required('Donation amount is required')
				.typeError('Donation amount can only be a number'),
		}),
	});

	const makeDonation = async () => {
		alert('Thank you for donating');
	};
	return (
		<section id='donation-form'>
			<div className='pl-[3vw] pr-[3vw] pt-28 pb-28'>
				<div className='flex justify-center gap-10 lg:gap-28 mb-9 flex-wrap'>
					<div className='flex items-center'>
						<input
							type='radio'
							value='Personal Info'
							id='Personal Info'
							className='radioInput'
							checked={formik.values.donationType === 'Personal Info'}
							onChange={(e) => changeDonationType(e.target.value)}
						/>
						<label htmlFor='Personal Info' className='font-bold text-2xl '>
							Personal Info
						</label>
					</div>
					<div className='flex items-center'>
						<input
							type='radio'
							value='Anonymous Donation'
							id='Anonymous Donation'
							className='radioInput'
							checked={formik.values.donationType === 'Anonymous Donation'}
							onChange={(e) => changeDonationType(e.target.value)}
						/>
						<label htmlFor='Anonymous Donation' className='font-bold text-2xl'>
							Anonymous Donation
						</label>
					</div>
				</div>
				{formik.values.donationType === 'Personal Info' && (
					<div className='flex flex-row gap-8 justify-between flex-wrap mb-20'>
						<LabelInput
							containerClass='flex-[100%] lg:flex-[45%]'
							label='First Name'
							name='firstName'
							value={formik.values.firstName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.firstName ? formik.errors.firstName : ''}
						/>
						<LabelInput
							containerClass='flex-[100%] lg:flex-[45%]'
							label='Last Name'
							name='lastName'
							value={formik.values.lastName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.lastName ? formik.errors.lastName : ''}
						/>
						<LabelInput
							containerClass='flex-[100%] lg:flex-[45%]'
							label='Country'
							name='country'
							value={formik.values.country}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.country ? formik.errors.country : ''}
						/>

						<LabelInput
							containerClass='flex-[100%] lg:flex-[20%]'
							label='State'
							name='state'
							value={formik.values.state}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.state ? formik.errors.state : ''}
						/>
						<LabelInput
							containerClass='flex-[100%] lg:flex-[19%]'
							label='City'
							name='city'
							value={formik.values.city}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.city ? formik.errors.city : ''}
						/>
						<LabelInput
							containerClass='flex-[100%] lg:flex-[19%]'
							label='Email Address'
							name='email'
							type='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.email ? formik.errors.email : ''}
						/>
						<LabelInput
							containerClass='flex-[100%] lg:flex-[19%]'
							label='Phone'
							name='phone'
							type='tel'
							value={formik.values.phone}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.phone ? formik.errors.phone : ''}
						/>
					</div>
				)}
				<div className='flex flex-col items-center'>
					<h2 className='text-2xl font-bold mb-10 text-center'>
						How much would you like to donate?
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{[1000, 2500, 5000, 10000, 20000, 50000].map((item) => (
							<DonationValue
								value={item}
								selected={formik.values.donationValue === item}
								key={item}
								onClick={() => formik.setFieldValue('donationValue', item)}
							/>
						))}
					</div>
					<LabelInput
						containerClass='w-[400px] max-w-full mt-10'
						label='Enter value manually'
						name='donationValue'
						type='number'
						value={formik.values.donationValue}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.donationValue ? formik.errors.donationValue : ''}
					/>
					<button
						className='secondaryButton w-[500px] max-w-full mt-20'
						onClick={() => formik.handleSubmit()}
					>
						Donate
					</button>
				</div>
			</div>
		</section>
	);
}

export default DonationForm;
