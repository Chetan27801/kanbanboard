import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/action";
import { useEffect } from "react";
import Header from "./components/header/Header";
import Board from "./components/board/Board";

function App() {
	const dispatch = useDispatch();
	const { tickets } = useSelector((state) => state.cartSlice);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return tickets ? (
		<div>
			<Header />
			<Board/>
		</div>
	) : (
		console.error("Error!!!")
	);
}

export default App;
