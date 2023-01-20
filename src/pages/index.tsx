import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex-1 p-10">
			<div className="flex justify-between gap-8">
				<div className="">
					<h1 className="font-bold text-neutral-700 text-3xl">Problem:</h1>
					<h2 className="font-semibold text-5xl text-black">Energy Storage</h2>
					<div className="flex gap-5 mt-10 flex-wrap">
						<div className="w-56 text-center p-5 bg-white rounded shadow-xl text-black">
							<h4 className="text-3xl font-bold leading-snug tracking-tight mb-1">
								1.8%
							</h4>
							<p className="text-gray-600 text-center text-md">
								Increase in Energy Consumption in the US every year
							</p>
						</div>
						<div className="w-56 text-center p-5 bg-white rounded shadow-xl text-black">
							<h4 className="text-3xl font-bold leading-snug tracking-tight mb-1">
								20%
							</h4>
							<p className="text-gray-600 text-center text-md">
								and growing of energy is produced by renewable sources
							</p>
						</div>
						<div className="w-56 text-center p-5 bg-white rounded shadow-xl text-black">
							<h4 className="text-3xl font-bold leading-snug tracking-tight mb-1">
								1/3
							</h4>
							<p className="text-gray-600 text-center text-md">
								of energy could be lost without energy storage
							</p>
						</div>
					</div>
				</div>
				<div>
					<img
						src="/assets/energy.png"
						alt="battery diagram"
						className="rounded-lg mb-5 h-80"
					/>
				</div>
			</div>
			<div className="flex gap-5 pt-5 items-center w-1/2">
				<img src="/assets/battery.png" alt="battery icon" className="w-32" />
				<div>
					<h3 className="font-semibold text-2xl">
						Limited Energy Storage Options continue to prevent utilization of
						renewable energy sources
					</h3>
					<h3 className="font-semibold text-2xl pt-5">
						Scarcity of Lithium And Other Rare Metals will threaten global
						supplies as demand multiply
					</h3>
				</div>
			</div>
		</div>
	);
}
