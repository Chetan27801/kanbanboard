import React, { useEffect, useState } from "react";
import "./Header.css";
import { BsSliders, BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { dataSelect } from "../../redux/action";

const getGroup = () => {
	if (localStorage.getItem("group")) {
		return localStorage.getItem("group");
	} else {
		return "user";
	}
};

const getOrder = () => {
	if (localStorage.getItem("order")) {
		return localStorage.getItem("order");
	} else {
		return "priority";
	}
};

const Header = () => {
	const [slider, setSlider] = useState(false);
	const dispatch = useDispatch();
	const { tickets, users } = useSelector((state) => state.cartSlice);
	const [groups, setGroups] = useState(getGroup());
	const [order, setOrder] = useState(getOrder());

	const handleGroups = (e, value) => {
		if (value) {
			setGroups(e.target.value);
			setSlider(!setSlider);
			localStorage.setItem("group", e.target.value);
		} else {
			setOrder(e.target.value);
			setSlider(!setSlider);
			localStorage.setItem("order", e.target.value);
		}
	};

	useEffect(() => {
		if (groups === "user") {
			dispatch(
				dataSelect(
					groups,
					{
						tickets,
						users,
					},
					order
				)
			);
		} else {
			dispatch(dataSelect(groups, tickets, order));
		}
	}, [tickets, dispatch, groups, users, order]);

	return (
		<div className="header-cont">
			<div className="headerButton">
				<button className="dropbtn" onClick={() => setSlider(!slider)}>
					<BsSliders /> Display{" "}
					<BsChevronDown style={{ background: "white" }} />
				</button>

				{slider && (
					<>
						<div className="header_dropDown">
							<div className="dropdown_group">
								<div style={{ color: "grey" }}>Grouping</div>
								<select
									value={groups}
									onChange={(e) => handleGroups(e, true)}
									name="group"
									id="group"
								>
									<option value="status">Status</option>
									<option value="user">User</option>
									<option value="priority">Priority</option>
								</select>
							</div>

							<div className="dropdown_group">
								<span style={{ color: "grey" }}>Ordering</span>
								<select
									value={order}
									onChange={(e) => handleGroups(e, false)}
									name="order"
									id="order"
								>
									<option value="priority">Priority</option>
									<option value="title">Title</option>
								</select>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;