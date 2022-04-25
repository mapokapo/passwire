import "../shared/styles/globals.css";

import { NextPage } from "next";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
	const [scrolled, setScrolled] = useState(0);

	useEffect(() => {
		function func() {
			setScrolled(window.pageYOffset);
		}

		window.addEventListener("scroll", func);
		return () => {
			window.removeEventListener("scroll", func);
		};
	});

	const map = (value: number, x1: number, y1: number, x2: number, y2: number) =>
		((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

	const _getColor = () => {
		if (process["browser"]) {
			return `rgba(96, 165, 250, ${map(
				scrolled,
				0,
				document.documentElement.scrollHeight -
					document.documentElement.clientHeight,
				1,
				0.5
			)})`;
		} else {
			return "rgba(96, 165, 250, 1)";
		}
	};

	return (
		<>
			<div
				style={{
					backgroundColor: _getColor(),
				}}
				className="fixed w-full h-16 bg-gray-400"></div>
			<div className="flex flex-col min-h-screen pt-16">
				<div className="flex flex-row flex-1 mx-4 my-4 sm:mx-16 md:my-16 md:flex-col">
					<Component {...pageProps} />
				</div>
				<div className="flex flex-col items-center h-32 text-white bg-gray-800 justify-evenly sm:flex-row">
					<strong>My Website</strong>
					<p>hello</p>
					<p>hello</p>
				</div>
			</div>
		</>
	);
};

export default MyApp;
