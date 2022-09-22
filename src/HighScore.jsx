import { useState } from "react";

function HighScore(props) {
	const [toggleHighScore, setToggleHighScore] = useState(false);

	return (
		<div className=" w-full h-full relative text-center ">
			<h2
				className=" w-full h-[5%] underline font-extrabold cursor-pointer "
				onClick={() => {
					setToggleHighScore((prevState) => !prevState);
				}}
			>
				{toggleHighScore ? "HIDE" : "SHOW"} HIGH SCORES
			</h2>
			<div
				className={
					toggleHighScore
						? "w-full h-[95%] border-2 ml-3 border-gray-900 visible"
						: "hidden"
				}
			>
				<div className=" grid grid-cols-4 font-extrabold">
					<h1>Rank</h1>
					<h1> Name</h1>
					<h1>Rolls</h1>
					<h1>Time</h1>
				</div>
				{props.users.map((user, index) => {
					return (
						<div key={user.id} className="grid grid-cols-4">
							<p className="font-bold">{index + 1}</p>
							<p>{user.name}</p>
							<p>{user.rolls}</p>
							<p>
								{(String(parseInt(user.time / 60)).length < 2
									? "0" + parseInt(user.time / 60)
									: parseInt(user.time / 60)) +
									":" +
									(user.time % 60) +
									"s"}
							</p>
						</div>
					);
				})}

				<button
					onClick={props.handleClear}
					className="absolute right-1 bottom-2"
				>
					Clear All
				</button>
			</div>
		</div>
	);
}

export default HighScore;
