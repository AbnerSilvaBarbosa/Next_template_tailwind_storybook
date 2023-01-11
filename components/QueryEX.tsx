import { useQuery } from "react-query"
import axios from "axios"

import { ResponseQuery } from "../typescript/types"
import { useState } from "react"

// Video for example use React Query
// https://www.youtube.com/watch?v=BIQD-pZRPKE&t=1060s

function QueryEX() {
	const [visible, setvisible] = useState(true)

	const hadleVisible = () => {
		setvisible(!visible)
	}

	const key = ["posts-teste"]

	const { isLoading, error, data } = useQuery<Array<ResponseQuery>>(key, () =>
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((data) => data.data)
	)

	if (isLoading) {
		return <h1>Carregando</h1>
	}

	if (error) {
		return <h1>Erro na request</h1>
	}

	return (
		<div className="mt-5">
			<button
				className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-mono rounded-xl p-2"
				onClick={hadleVisible}>
				Teste React Query
			</button>

			{data?.map((e) => (
				<div
					key={e.id}
					className={`text-white text-lg font-thin mt-3  ${
						visible ? "text-white" : "hidden"
					}`}>
					<h1>{e.title}</h1>;
				</div>
			))}
		</div>
	)
}

export default QueryEX
