import React from 'react';
import { formatNumberToNaira } from '../../../functions/stringManipulation';
// import Naira from '../../reusable/NairaComponent/Naira';

function DonationValue({
	value,
	selected = false,
	onClick,
}: {
	value: number;
	selected: boolean;
	onClick: (e: React.MouseEvent) => void;
}) {
	return (
		<div
			className={`${
				selected ? 'bg-[#D24943BF] text-offWhite' : 'bg-[#78E1BB33] text-[#525352]'
			}  w-[197px] h-[53px] flex items-center justify-center rounded-[7px] font-bold text-lg border-[1.5px] border-[#0830212B] cursor-pointer hover:bg-lightSuccess`}
			onClick={onClick}
		>
			{formatNumberToNaira(value)}
		</div>
	);
}

export default DonationValue;
