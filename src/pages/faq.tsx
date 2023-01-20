import React from "react";

export default function faq() {
	return (
		<div className="p-10 flex-1">
			<h1 className="font-bold text-3xl">Frequently Asked Questions</h1>
			<div className="space-y-4 pt-8">
				<details
					className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
					open
				>
					<summary className="flex items-center justify-between cursor-pointer">
						<h2 className="font-medium text-gray-900">
							Why are aluminum sulfur batteries more effective than lithium ion
							batters?
						</h2>

						<span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						Lithium-batteires are plauged with safety issues and limited
						capacity. The battery serves as a long-term solution that can be
						improved upon to LIBS drawbacks.
					</p>
				</details>

				<details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
					<summary className="flex items-center justify-between cursor-pointer">
						<h2 className="font-medium text-gray-900">
							Could the battery be extended to other applications?
						</h2>

						<span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="absolute inset-0 opacity-100 group-open:opacity-0"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="absolute inset-0 opacity-0 group-open:opacity-100"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						Hello put smth here
					</p>
				</details>
				<details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
					<summary className="flex items-center justify-between cursor-pointer">
						<h2 className="font-medium text-gray-900">
							Could this battery completely replace lithium ion batteires?
						</h2>

						<span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="absolute inset-0 opacity-100 group-open:opacity-0"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="absolute inset-0 opacity-0 group-open:opacity-100"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						Hello put smth here
					</p>
				</details>
			</div>
		</div>
	);
}
