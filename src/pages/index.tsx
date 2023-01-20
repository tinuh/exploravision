import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex p-10">
			<div className="">
				<h1 className="font-bold text-neutral-700 text-3xl">Problem:</h1>
				<h2 className="font-semibold text-5xl text-black">Energy Storage</h2>
				<div className="w-56 mt-10 text-center p-5 bg-white rounded shadow-xl text-black">
					<h4 className="text-3xl font-bold leading-snug tracking-tight mb-1">
						1.8%
					</h4>
					<p className="text-gray-600 text-center text-md">
						Increase in Energy Consumption in the US every year
					</p>
				</div>
			</div>
		</div>
	);
}
