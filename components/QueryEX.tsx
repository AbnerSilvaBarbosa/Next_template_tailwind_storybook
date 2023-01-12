import { useQuery } from "react-query";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

import { ResponseQuery } from "../typescript/types";
import { useState } from "react";

// Video for example use React Query
// https://www.youtube.com/watch?v=BIQD-pZRPKE&t=1060s

function QueryEX() {
	const [visible, setvisible] = useState(false);

	const hadleVisible = () => {
		setvisible(!visible);
	};

	const key = ["posts-teste"];

	const { isLoading, error, data } = useQuery<Array<ResponseQuery>>(key, () =>
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((data) => data.data)
	);

	if (isLoading) {
		return <h1>Carregando</h1>;
	}

	if (error) {
		return <h1>Erro na request</h1>;
	}

	const variants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 0, y: 15 },
	};

	return (
		<div className="mt-5">
			<button
				className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-mono rounded-xl p-2"
				onClick={hadleVisible}>
				Teste React Query
			</button>

			{data?.map((e) => (
				<AnimatePresence key={e.id}>
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={visible ? "open" : "closed"}
						variants={variants}
						transition={{ delay: 0.5 }}>
						<div
							className={`text-white text-lg font-thin mt-3  ${
								visible ? "text-white" : "hidden"
							}`}>
							<h1>{e.title}</h1>;
						</div>
					</motion.div>
				</AnimatePresence>
			))}
		</div>
	);
}

export default QueryEX;
