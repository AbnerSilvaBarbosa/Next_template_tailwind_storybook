/* eslint-disable indent */
import { defaulT, erroR, info, success, warning } from "../scripts/funcsToasts";


function ButtonToast() {
	return (
		<div className="mt-5">
			<button onClick={defaulT} className="

			bg-gradient-to-t 
			from-purple-800 
			to-orange-300 

			hover:from-pink-500 
			hover:to-yellow-500 

			rounded-md 
			p-2">

				Teste Toast

			</button>
		</div>
	);
}

export default ButtonToast;
