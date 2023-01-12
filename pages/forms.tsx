import { useForm, SubmitHandler } from "react-hook-form";

//https://react-hook-form.com/ts#UseFormReturn

type FormValues = {
	name: string;
	email: string;
	password: string;
};

function Forms() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

	return (
		<div className="flex justify-center ">
			<div className="border-2 border-sky-600 h-96 w-96 items-center">
				<div className="text-center">
					<h1 className="bg-sky-600 text-base font-semibold">
						React Hook
					</h1>
				</div>

				<div className=" flex flex-col items-center gap-10 mt-6">
					<div className="">
						<p className="text-white">Name*</p>

						{errors?.name?.type === "required" && (
							<p className="text-red-500 font-serif">
								{" "}
								Campo Obrigátorio
							</p>
						)}

						<input
							className={
								errors?.name
									? "rounded-lg border-2 border-red-700"
									: "rounded-lg"
							}
							type="text"
							id=""
							{...register("name", { required: true })}
						/>
					</div>

					<div>
						<p className="text-white">Email*</p>
						<input
							className="rounded-lg "
							type="text"
							id=""
							{...register("email")}
						/>
					</div>

					<div>
						<p className="text-white">Password*</p>
						<input
							className="rounded-lg "
							type="text"
							id=""
							{...register("password")}
						/>
					</div>

					<div>
						<button
							className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-mono rounded-xl p-2"
							onClick={() => handleSubmit(onSubmit)()}>
							Up Forms
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Forms;
