const AboutRight = () => {
	return (
		<>
			<div className="w-full space-y-10 flex justify-between items-center flex-col px-8 h-full">
				<div className="w-[80%] relative z-10 h-fit">
					<h1 className="text-[18em] bg-black text-center font-bold text-white">
						FE
					</h1>
					<div className="absolute h-full w-full border-[3px] border-black rounded-sm z-0 left-3 top-3 myBorder"></div>
				</div>
				<div className="mt-4 text-5xl font-semibold w-full space-y-3">
					<div className="flex justify-between">
						<p className="aspect-square p-4 px-6 bg-white text-center">F</p>
						<p className="aspect-square p-4 px-6 bg-white text-center">R</p>
						<p className="aspect-square p-4 px-6 bg-white text-center">O</p>
						<p className="aspect-square p-4 px-6 bg-white text-center">N</p>
						<p className="aspect-square p-4 px-6 bg-white text-center">T</p>
					</div>
					<div className="flex justify-around">
						<p className="aspect-square p-4 px-6 bg-white text-center">E</p>
						<p className="aspect-square p-4 px-6 bg-white text-center">N</p>
						<p className="aspect-square p-4 px-6 bg-white text-center">D</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutRight;
