import React from "react";

export default function design() {
	return (
		<div className="p-10 flex-1">
			<h1 className="font-bold text-3xl">
				Aluminum Cathode + Sulfur Anode + Carbonate Electrolyte
			</h1>
			<div className="w-2/3 flex gap-8 pt-8">
				<div className="flex-1">
					<img
						src="https://s3-us-west-1.amazonaws.com/contentlab.studiod/3/2/ce1d88e335f44547b60b4ab00a263efa.png"
						alt="battery diagram"
						className="rounded-lg mb-5"
					/>
					<p>
						The cathode is is the positive or oxidizing electrode that acquires
						electrons from the external circuit and is reduced during the
						electrochemical reaction. The anode is the negative or reducing
						electrode that releases electrons to the external circuit and
						oxidizes during an electrochemical reaction. The electrolyte
						provides a medium through which charge-balancing positive ions can
						flow.
					</p>
				</div>
				<div className="flex-1">
					<p>
						We introduce novel carbonate electrolyte that differes from the
						commercialized/standardized DME and DOL ether-based electorlytes.
					</p>
					<ol className="list-decimal list-inside">
						<li>
							The novel carbonate electrolyte has been demonstrated to prevent
							dissolution of the polysulfides preventing loss of active
							matierals.
						</li>
						<li>
							It also goes agaisnt voluemtric expansion during the
							charge/discharge process, increasing lifetime of the battery.
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
}
