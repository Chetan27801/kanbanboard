import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import proimg from "../../assets/propic.png";
import "./Card.css";

const Card = ({ id, title, tags }) => {
	return (
		<div className="crdcontainer">
			<div className="cardHeader" style={{ justifyContent: "space-between" }}>
				<div className="card_id">{id}</div>

				<div className="card_image">
					<img src={proimg} alt="profile" />
					<div className={"profile_avail"}></div>
				</div>
			</div>

			<div className="card_title">
				<p>{title}</p>
			</div>

			<div className="card_tags">
				<div className="card_tag">
					<BsExclamationSquareFill />
				</div>
				{tags.map((element, index) => {
					return (
						<div key={index} className="card_tag cardtag_element">
							{element}
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Card;