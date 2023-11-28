import React from "react";
import { useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import {
	MdSignalCellularAlt,
	MdSignalCellularAlt2Bar,
	MdSignalCellularAlt1Bar,
} from "react-icons/md";
import { PiCircleDashedBold } from "react-icons/pi";
import { FaExclamation } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsCircleHalf } from "react-icons/bs";
import { IoMdDoneAll } from "react-icons/io";
import { FcCancel } from "react-icons/fc";
import { GoStack } from "react-icons/go";
import "./Board.css";
import Card from "../card/Card";
import proimg from "../../assets/propic.png";

const Board = () => {
	const { dataSelected, user } = useSelector((state) => state.dataCartSlice);

	return (
		dataSelected && (
			<div
				className="board_container"
				style={{ justifyContent: "space-evenly" }}
			>
				{dataSelected.map((element, index) => {
					const elmTit = element[index].title;
					return (
						<>
							<div
								key={index}
								className="board_block"
								style={{ backgroundColor: "whitesmoke" }}
							>
								<div className="board_cardHead">
									<div style={{ display: "flex", alignItems: "center" }}>
										{!user ? (
											<>
												{elmTit === "Urgent" && (
													<FaExclamation style={{ marginRight: "2" }} />
												)}
												{elmTit === "High" && (
													<MdSignalCellularAlt style={{ marginRight: "2" }} />
												)}
												{elmTit === "Medium" && (
													<MdSignalCellularAlt2Bar
														style={{ marginRight: "2" }}
													/>
												)}
												{elmTit === "Low" && (
													<MdSignalCellularAlt1Bar
														style={{ marginRight: "2" }}
													/>
												)}
												{elmTit === "No priority" && (
													<HiOutlineDotsHorizontal />
												)}
												{elmTit === "Todo" && (
													<PiCircleDashedBold style={{ marginRight: "2" }} />
												)}
												{elmTit === "In progress" && (
													<BsCircleHalf style={{ marginRight: "2" }} />
												)}
												{elmTit === "Done" && (
													<IoMdDoneAll style={{ marginRight: "2" }} />
												)}
												{elmTit === "Backlog" && (
													<GoStack style={{ marginRight: "2" }} />
												)}
												{elmTit === "Cancelled" && (
													<FcCancel style={{ marginRight: "2" }} />
												)}
											</>
										) : (
											<>
												<div className="board_image">
													<img src={proimg} alt="profile" />
												</div>
											</>
										)}
										<span>
											{element[index].title} {element[index].value.length}
										</span>
									</div>
									<div>
										<BsPlusLg style={{ cursor: "pointer" }} />
										<HiOutlineDotsHorizontal
											style={{ cursor: "pointer", marginLeft: 2 }}
										/>
									</div>
								</div>
								<div className="board_list">
									{element[index].value.map((element, ind) => {
										return (
											<Card
												key={ind}
												id={element.id}
												title={element.title}
												tags={element.tag}
											/>
										);
									})}
								</div>
							</div>
						</>
					);
				})}
			</div>
		)
	);
};

export default Board;
