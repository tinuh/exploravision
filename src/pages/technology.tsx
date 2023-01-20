import React from "react";
import { FaRecycle } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { GiChemicalTank, GiChemicalDrop } from "react-icons/gi";

export default function technology() {
	return (
		<div className="p-10 flex-1">
			<h1 className="font-bold text-neutral-700 text-3xl">Solution:</h1>
			<h2 className="font-semibold text-5xl text-black">
				The Aluminum-Sulfur Battery
			</h2>
			<div className="p-5 bg-neutral-300 mt-10 rounded-lg">
				<h3 className="font-semibold text-2xl">How does it work?</h3>
				<div className="flex pt-6 gap-3 justify-center flex-wrap items-stretch text-center">
					<div className="flex flex-col gap-3 w-48 items-center p-5 rounded-lg">
						<FaRecycle size="2rem" />
						Cathode made of aluminum that is far safer and more recyclable
					</div>
					<div className="flex flex-col gap-3 w-48 items-center p-5 rounded-lg">
						<IoEarthOutline size="2rem" />
						Sulfur anode which is far more abundant and esnures high specific
						capacity
					</div>
					<div className="flex flex-col gap-3 w-48 items-center p-5 rounded-lg">
						<BsClockHistory size="2rem" />
						The novel carbonate electrolytes prevents the dissolution and loss
						of active materials and esnures long cyclability
					</div>
					<div className="flex flex-col gap-3 w-48 items-center p-5 rounded-lg">
						<GiChemicalTank size="2rem" />
						During charge short-chain and medium-chain alunminum polysulfides
						are reduced to long-chain PS and into elemantary sulfur
					</div>
					<div className="flex flex-col gap-3 w-48 items-center p-5 rounded-lg">
						<GiChemicalDrop size="2rem" />
						During discharge elemantary sulfur octet is reduced to lithium
						octasulfide and evnetually to small-chain and medium-chain PS
					</div>
					<div className="flex flex-col gap-3 w-48 items-center p-5 rounded-lg">
						<FaCarAlt size="2rem" />
						Electric vehicles and other electronic devices can use Al-S
						batteries without worry of danger
					</div>
				</div>
			</div>
		</div>
	);
}
