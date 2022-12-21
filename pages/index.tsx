import React from "react";
import Hello from "../components/Hello";
import Infos from "../components/Infos";
import QueryEX from "../components/QueryEX";

export default function Home() {
	return (
		<div className="text-center">
			<Hello />
			<Infos />
			<QueryEX />
		</div>
	);
}
