import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import DonateBanner from '../components/pages/Donate/DonateBanner';
import DonationForm from '../components/pages/Donate/DonationForm';

function Donate() {
	return (
		<AppLayout>
			<DonateBanner />
			<DonationForm />
		</AppLayout>
	);
}

export default Donate;
