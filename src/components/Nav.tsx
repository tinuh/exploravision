import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsBatteryFull } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function Nav() {
	const router = useRouter();

	return (
		<div className="flex flex-col justify-between h-screen bg-neutral-50 border-r">
			<div className="px-4 py-6">
				<h1 className="pl-5 font-bold text-neutral-700">Al-S Battery</h1>

				<nav aria-label="Main Nav" className="flex flex-col mt-6 space-y-1">
					<Link
						href="/"
						className={`flex items-center px-4 py-2 ${
							router.pathname === "/"
								? "bg-neutral-100 text-neutral-700"
								: "text-neutral-500"
						} rounded-lg`}
					>
						<BiHomeAlt size="1.3rem" />

						<span className="ml-3 text-sm font-medium"> Home </span>
					</Link>

					<Link
						href="/technology"
						className={`flex items-center px-4 py-2 ${
							router.pathname === "/technology"
								? "bg-neutral-100 text-neutral-700"
								: "text-neutral-500"
						} rounded-lg`}
					>
						<BsBatteryFull size="1.3rem" />

						<span className="ml-3 text-sm font-medium"> Our Technology </span>
					</Link>

					<Link
						href="/design"
						className={`flex items-center px-4 py-2 ${
							router.pathname === "/design"
								? "bg-neutral-100 text-neutral-700"
								: "text-neutral-500"
						} rounded-lg`}
					>
						<MdOutlineDesignServices size="1.3rem" />

						<span className="ml-3 text-sm font-medium"> Design </span>
					</Link>

					<Link
						href="/impact"
						className={`flex items-center px-4 py-2 ${
							router.pathname === "/impact"
								? "bg-neutral-100 text-neutral-700"
								: "text-neutral-500"
						} rounded-lg`}
					>
						<SlGraph size="1.3rem" />

						<span className="ml-3 text-sm font-medium"> Impact </span>
					</Link>

					<Link
						href="/faq"
						className={`flex items-center px-4 py-2 ${
							router.pathname === "/faq"
								? "bg-neutral-100 text-neutral-700"
								: "text-neutral-500"
						} rounded-lg`}
					>
						<FaQuestion size="1.3rem" />
						<span className="ml-3 text-sm font-medium"> FAQs </span>
					</Link>
				</nav>
			</div>
		</div>
	);
}
