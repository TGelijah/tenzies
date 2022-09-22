function Die(props) {
	let dots = [];
	for (let i = 1; i <= props.value; i++) {
		dots.push(i);
	}
	return (
		<>
			{props.style ? (
				<div
					className={`w-[90%] h-[40%] sm:w-[60px] sm:h-[60px] xl:w-[60%] xl:h-[80%] py-3 font-bold select-none ${
						props.isHeld ? "bg-green-500" : "bg-gray-700"
					} text-gray-50 shadow-xl rounded-md flex justify-center items-center cursor-pointer `}
					onClick={props.clickHandler}
				>
					{props.value}
				</div>
			) : (
				<section className="w-full h-full">
					{props.value === 1 && (
						<div
							className={`w-[90%] h-[40%] sm:w-[60px] sm:h-[60px] xl:w-[60%] xl:h-[65%] py-3 select-none ${
								props.isHeld ? "bg-green-500" : "bg-gray-700"
							} text-gray-50 shadow-xl rounded-md flex justify-center items-center cursor-pointer relative `}
							onClick={props.clickHandler}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[8%] h-[20%] sm:w-[10%] sm:h-[16%]"
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
						</div>
					)}
					{props.value === 2 && (
						<div
							className={`w-[90%] h-[40%] sm:w-[60px] sm:h-[60px] xl:w-[60%] xl:h-[65%] py-3 select-none ${
								props.isHeld ? "bg-green-500" : "bg-gray-700"
							} text-gray-50 shadow-xl rounded-md cursor-pointer relative `}
							onClick={props.clickHandler}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[9%] h-[10%] sm:w-[10%] sm:h-[10%] absolute left-2 top-2 "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[9%] h-[10%] sm:w-[10%] sm:h-[10%] absolute right-2 bottom-2 "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
						</div>
					)}
					{props.value === 3 && (
						<div
							className={`w-[90%] h-[40%] sm:w-[60px] sm:h-[60px] xl:w-[60%] xl:h-[65%] py-3 select-none ${
								props.isHeld ? "bg-green-500" : "bg-gray-700"
							} text-gray-50 shadow-xl rounded-md flex flex-col justify-between items-center cursor-pointer  `}
							onClick={props.clickHandler}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[8%] h-[20%] sm:w-[10%] sm:h-[16%]"
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[8%] h-[20%] sm:w-[10%] sm:h-[16%]"
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[8%] h-[20%] sm:w-[10%] sm:h-[16%]"
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
						</div>
					)}
					{props.value === 4 && (
						<div
							className={`w-[90%] h-[40%] sm:w-[60px] sm:h-[60px] xl:w-[60%] xl:h-[65%] py-3 select-none ${
								props.isHeld ? "bg-green-500" : "bg-gray-700"
							} text-gray-50 shadow-xl rounded-md cursor-pointer relative `}
							onClick={props.clickHandler}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[9%] h-[10%] sm:w-[10%] sm:h-[10%] absolute left-2 top-2 "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[9%] h-[10%] sm:w-[10%] sm:h-[10%] absolute right-2 top-2 "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[9%] h-[10%] sm:w-[10%] sm:h-[10%] absolute left-2 bottom-2 "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[9%] h-[10%] sm:w-[10%] sm:h-[10%] absolute right-2 bottom-2 "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
						</div>
					)}
					{props.value === 5 && (
						<div
							className={`w-[90%] h-[40%] sm:w-[60px] sm:h-[60px] xl:w-[60%] xl:h-[65%] py-3 select-none ${
								props.isHeld ? "bg-green-500" : "bg-gray-700"
							} text-gray-50 shadow-xl rounded-md flex justify-center items-center cursor-pointer relative `}
							onClick={props.clickHandler}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[9%] h-[10%] sm:w-[10%] sm:h-[10%] absolute left-2 top-2 "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[9%] h-[10%] sm:w-[10%] sm:h-[10%] absolute right-2 top-2 "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[9%] h-[10%] sm:w-[10%] sm:h-[10%] absolute left-2 bottom-2 "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[9%] h-[10%] sm:w-[10%] sm:h-[10%] absolute right-2 bottom-2 "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[8%] h-[20%] sm:w-[10%] sm:h-[16%]"
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
						</div>
					)}
					{props.value === 6 && (
						<div
							className={`w-[90%] h-[40%] sm:w-[60px] sm:h-[60px] xl:w-[60%] xl:h-[65%] select-none ${
								props.isHeld ? "bg-green-500" : "bg-gray-700"
							} text-gray-50 shadow-xl rounded-md cursor-pointer w-full h-full grid grid-cols-2 grid-rows-3 pl-2 pt-2 sm:pl-4 sm:pt-2 `}
							onClick={props.clickHandler}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[20%] h-[35%] sm:w-[20%] sm:h-[25%] "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[20%] h-[35%] sm:w-[20%] sm:h-[25%] "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[20%] h-[35%] sm:w-[20%] sm:h-[25%] "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[20%] h-[35%] sm:w-[20%] sm:h-[25%] "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[20%] h-[35%] sm:w-[20%] sm:h-[25%] "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=" w-[20%] h-[35%] sm:w-[20%] sm:h-[25%] "
							>
								<circle cx="50%" cy="50%" r="50%" fill="rgb(249,250,251)" />
							</svg>
						</div>
					)}
				</section>
			)}
		</>
	);
}

export default Die;
