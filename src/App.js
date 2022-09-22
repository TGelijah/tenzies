import { useState, useEffect, useRef } from "react";
import Die from "./Die";
import HighScore from "./HighScore";

function App() {
	let idGenerator = () => {
		return Math.ceil(Math.random() * 13245454530233);
	};
	const dieGenerator = () => {
		return { value: Math.ceil(Math.random() * 6), isHeld: false };
	};
	const allNewDie = () => {
		let newDie = [];

		for (let i = 0; i < 10; i++) {
			newDie.push(dieGenerator());
		}

		return newDie;
	};

	const compareFunction = (a, b) => {
		if (a.time < b.time) {
			return -1;
		}
		if (a.time > b.time) {
			return 1;
		}

		return 0;
	};

	let isInitialMount = useRef(true);
	let intervalId = useRef("");
	let defaultData = {
		id: idGenerator(),
		name: "",
		rolls: 0,
		time: 0,
	};

	const [users, setUsers] = useState(
		JSON.parse(localStorage.getItem("record"))
	);
	const [player, setPlayer] = useState(defaultData);
	const [timer, setTimer] = useState(0);

	const [viewInfo, setViewInfo] = useState(false);
	const [tenzies, setTenzies] = useState(true);
	const [won, setWon] = useState(false);
	const [dieStyle, setDieStyle] = useState(true);

	const [die, setDie] = useState(allNewDie);

	function setTime() {
		setTimer((prevState) => 1 + prevState);
	}

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			intervalId.current = setInterval(setTime, 1000);
		}

		return () => clearInterval(intervalId.current);
	}, [tenzies]);

	useEffect(() => {
		const sample = die[0].value;
		const held = die.every((dice) => dice.isHeld === true);
		const value = die.every((dice) => dice.value === sample);

		if (held && value) {
			setTenzies(true);
			setWon(true);
			setPlayer((prevState) => {
				return {
					...prevState,
					time: timer,
				};
			});
		}
	}, [die]);

	useEffect(() => {
		localStorage.setItem(
			"record",
			JSON.stringify(users.sort(compareFunction).slice(0, 20))
		);

		setUsers(JSON.parse(localStorage.getItem("record")));
	}, [users]);

	const rollDie = () => {
		setDie((prevState) =>
			prevState.map((dice) => {
				return dice.isHeld ? dice : dieGenerator();
			})
		);
		setPlayer((prevState) => {
			return { ...prevState, rolls: prevState.rolls + 1 };
		});
	};

	const heldDice = (index) => {
		setDie((prevState) =>
			prevState.map((dice, i) => {
				return index === i ? { ...dice, isHeld: !dice.isHeld } : dice;
			})
		);
	};

	const newGame = () => {
		setTenzies(false);
		setDie(allNewDie);
		setPlayer(defaultData);
		setTimer(0);
		setWon(false);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const isUserNameAvailable = users.some((user) => user.name === player.name);
		let isIdValid = users.some((user) => user.id === player.id);

		if (player.name.length > 0) {
			if (isIdValid) {
				setPlayer((prevState) => {
					return { ...prevState, id: idGenerator() };
				});
			}
			if (isUserNameAvailable) {
				alert("User Exists");
			} else {
				if (player.rolls < 1 || player.time < 1) {
					alert("Invalid Game session, Please start a new game");
				} else {
					setUsers((prevState) => {
						return [...prevState, player];
					});
					setPlayer(defaultData);
					setTimer(0);
				}
			}
		} else {
			alert("Enter username to save");
		}
	};
	const changeHandler = (e) => {
		let value = String(e.target.value);
		setPlayer((prevState) => {
			return { ...prevState, [e.target.name]: value.trim().replace(" ", "") };
		});
	};

	const clearScore = () => {
		localStorage.clear();
		setUsers(() => []);
	};

	return (
		<main className="w-screen select-none h-screen overflow-y-scroll sm:h-screen sm:flex xl:space-x-5 p-8 bg-gray-100 text-gray-600 sm:justify-center relative ">
			<section className=" w-screen h-auto flex xl:flex-none xl:w-1/5 xl:h-full absolute top-0 left-0 xl:relative ">
				<div
					className={
						won
							? "visible flex h-full w-full items-center justify-evenly xl:space-x-0 xl:flex-none xl:block  "
							: "hidden"
					}
				>
					<label className=" w-auto h-auto text-[16px] font-bold underline ">
						Game Detail
					</label>
					<p className=" w-auto h-auto ">
						Time Used:
						{"\t"}
						{(String(parseInt(player.time / 60)).length < 2
							? "0" + parseInt(player.time / 60)
							: parseInt(player.time / 60)) +
							":" +
							(player.time % 60) +
							"s"}
					</p>
					<p className=" w-auto h-auto ">Total Rolls:{"\t" + player.rolls}</p>
				</div>
			</section>
			<section className=" w-full h-full sm:h-full sm:w-2/3 xl:w-3/5 sm:border-[10px] xl:border-[20px] sm:border-solid sm:flex sm:flex-col justify-center items-center sm:border-slate-700 relative ">
				<div className=" h-1/5 xl:h-1/3 w-full text-center ">
					<h1 className=" group font-extrabold sm:text-xl m-auto xl:w-[80%] xl:text-2xl text-gray-700 tracking-wider ">
						<label className=" text-[9px] tracking-normal group-hover:visible invisible ">
							Click on Tenzies to switch between dice style (Dots/Number)
						</label>
						<br />
						<label
							className="w-auto cursor-pointer "
							onClick={() => setDieStyle((prevState) => !prevState)}
						>
							Tenzies
						</label>
					</h1>
					<p className=" sm:text-base m-auto xl:w-[80%] xl:pt-4 xl:text-lg ">
						Roll until all dice are the same. Click each die to freeze it at its
						current value between rolls
					</p>
				</div>
				<div className=" w-full h-3/5 xl:h-2/3 flex justify-center items-center mt-16 xl:mt-0 ">
					<div
						className={
							tenzies
								? "flex h-full w-full justify-center items-center"
								: "grid grid-rows-2 mt-7 sm:mt-0 py-8 px-8 xl:p-0 grid-cols-5 h-full w-full xl:w-4/5 xl:h-1/2 "
						}
					>
						{tenzies && won ? (
							<form
								onSubmit={submitHandler}
								className=" select-none w-100 h-100 "
							>
								<div className="text-center h-1/2 w-full ">
									<p className=" text-6xl tracking-wider font-light ">
										YOU WON!!!!
									</p>
									<p className=" text-[14px] ">Press New Game to begin</p>
								</div>
								<div className=" mt-10 w-full h-1/2 ">
									<div className=" w-full h-auto flex justify-center items-center">
										<input
											type="text"
											placeholder="Enter username"
											onChange={changeHandler}
											value={player.name}
											name="name"
											className="h-[40px] indent-2 border-b-4 border-indigo-300 "
										/>
										<button
											type="submit"
											className=" ml-5 border-b-4 border-indigo-500 w-[80px] h-[40px] p-2 hover:bg-indigo-200 "
										>
											Save
										</button>
									</div>
									<div className=" w-full h-auto flex ml-4 mt-1 ">
										<label
											className=" w-[13px] h-[13px] text-[8px] rounded-full border-2 border-indigo-500 flex justify-center items-center cursor-pointer "
											onClick={() => {
												setViewInfo((prevState) => !prevState);
											}}
										>
											i
										</label>
										<label
											className={viewInfo ? " ml-1 text-sm visible " : "hidden"}
										>
											Enter username to save score
										</label>
									</div>
								</div>
							</form>
						) : tenzies ? (
							""
						) : (
							die.map((dice, index) => (
								<Die
									key={index}
									value={dice.value}
									isHeld={dice.isHeld}
									style={dieStyle}
									clickHandler={() => heldDice(index)}
								/>
							))
						)}
					</div>
				</div>
				<div className="w-full h-1/5 flex justify-center items-center -mt-12 ">
					{
						<button
							className=" visible w-[100px] h-[45px] xl:h-[70px] bg-indigo-700  shadow-md rounded-md text-slate-50 "
							onClick={tenzies ? newGame : rollDie}
						>
							{tenzies ? "New Game" : "Roll"}
						</button>
					}
				</div>
			</section>
			<section className=" w-full h-full sm:w-1/3 xl:w-1/5 ">
				<HighScore handleClear={() => clearScore()} users={users} />
			</section>
		</main>
	);
}

export default App;
