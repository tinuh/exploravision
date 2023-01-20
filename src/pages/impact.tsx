import React from "react";

export default function Impact() {
	return (
		<div className="p-10">
			<h1 className="font-bold text-3xl">The Impact</h1>
			<div className="flex flex-wrap py-8 gap-5">
				<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
					<a href="#" className="relative">
						<img
							className="rounded-t-lg"
							src="https://cdn.motor1.com/images/mgl/G4z31/s3/tesla-roadster.jpg"
							alt="Electric cars are the future"
						/>
						<p className="absolute bottom-1 right-2 text-white">Inside EVs</p>
					</a>
					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 ">
								Increased Performance & Range in EVs
							</h5>
						</a>
						<p className="mb-3 font-normal text-neutral-700 ">
							With the reduction in weight and increase in energy density, EVs
							can now have ranges upward of 600 miles. Additionally, with a
							higher power density they can deliver more power to the wheels.
						</p>
					</div>
				</div>
				<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
					<a href="#" className="relative">
						<img
							className="rounded-t-lg"
							src="/assets/trees.jpg"
							alt="Electric cars are the future"
						/>
						<p className="absolute bottom-1 right-2 text-white">
							City of Wisconsin Dells
						</p>
					</a>
					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 ">
								Sustainable
							</h5>
						</a>
						<p className="mb-3 font-normal text-neutral-700 ">
							Aluminum Sulfur batteries are made from abundant, renewable and
							low cost materials. Compared to lithium, aluminum can be sourced
							much more easily and sustainably. This makes them a sustainable
							alternative to Lithium ion batteries.
						</p>
					</div>
				</div>
				<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
					<a href="#" className="relative">
						<img
							className="rounded-t-lg"
							src="/assets/fire.jpg"
							alt="Electric cars are the future"
						/>
						<p className="absolute bottom-1 right-2 text-white">ERI Direct</p>
					</a>
					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 ">
								Safe & Non-flammable
							</h5>
						</a>
						<p className="mb-3 font-normal text-neutral-700 ">
							Unlike, Lithium Ion batteries, Aluminum Sulfur batteries are
							non-flammable and do not release any toxic gasses. They also have
							a high electrochemical stability, which means they are less prone
							to degradation over time. The production of Al-S batteries also
							generates fewer greenhouse gas emissions than Li-ion batteries.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
