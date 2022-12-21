import React from "react";
import ButtonToast from "../components/ButtonToast";
import Hello from "../components/Hello";
import Infos from "../components/Infos";
import QueryEX from "../components/QueryEX";

export default function Home() {
	return (
		<div className="text-center">
			<Hello />
			<Infos />
			<QueryEX />
			<ButtonToast />
		</div>
	);
}
