function Navbar() {
	return (
		<nav className="fixed top-0 left-0 flex justify-around text-white w-full shadow-sm shadow-sky-400 bg-black ">
			<div className="container m-auto flex justify-between items-center">
				<h1 className="pl-8 py-4 text-xl font-bold">Lorem</h1>

				<ul className="hidden md:flex items-center  text-base font-semibold cursor-pointer">
					<li className="hover:border-b-2 hover:border-sky-600 py-1 px-6">Home</li>
					<li className="hover:border-b-2 hover:border-sky-600 py-1 px-6">Contact</li>
					<li className="hover:border-b-2 hover:border-sky-600 py-1 px-6">Services</li>
					<li className="hover:border-b-2 hover:border-sky-600 py-1 px-6">About</li>
				</ul>

				<button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-black-200 group">
					<div className="w-5 h-1 bg-sky-500 mb-1"></div>
					<div className="w-5 h-1 bg-sky-500 mb-1"></div>
					<div className="w-5 h-1 bg-sky-500 "></div>

					<div className="bg-black shadow-sm shadow-sky-400 absolute top-0 -right-full h-screen w-8/12 text-white opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
						<ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
							<li className="hover:border-b-2 hover:border-sky-600 py-4 px-6 w-full">Home</li>
							<li className="hover:border-b-2 hover:border-sky-600 py-4 px-6 w-full">Contract</li>
							<li className="hover:border-b-2 hover:border-sky-600 py-4 px-6 w-full">Services</li>
							<li className="hover:border-b-2 hover:border-sky-600 py-4 px-6 w-full">About</li>
						</ul>
					</div>
				</button>


			</div>
		</nav>
	);
}

export default Navbar;
