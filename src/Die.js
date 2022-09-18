function Die(props) {
	return (
		<div
			className={`w-[90%] h-[40%] sm:w-[60px] sm:h-[60px] xl:w-[60%] xl:h-[80%] py-3 font-bold select-none ${
				props.isHeld ? "bg-green-500" : "bg-gray-700"
			} text-gray-50 shadow-xl rounded-md flex justify-center items-center cursor-pointer`}
			onClick={props.clickHandler}
		>
			{props.value}
		</div>
	);
}

export default Die;
