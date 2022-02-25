import React from "react";

import './card.style.css';

export const Card = (props) => (
	<div className="card">
		<h6 key={props.user.id}> {props.user.name} </h6>
	</div>
);