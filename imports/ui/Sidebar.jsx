import React, { Component } from "react";

export default class Sidebar extends Component {
	getItems() {
		return [
			{ _id: 1, text: "Home", "icon": "home" },
			{ _id: 2, text: "Messages", "icon": "mail", label: "4" },
			{ _id: 3, text: "Friends", "icon": "male", label: "1" }
		];
	}

	renderItems() {
		return this.getItems().map((item) => (
			<a className="item">
				<i className={"LEFT "+ item.icon +" icon"}></i>
				{item.text}
				{ item.label ? (
					<div className="ui small label blue">{item.label}</div>
					) : ""
				}
			</a>
		));
	}

	render() {
		return(
			<div id="side-container">
				<div id="menu-header" className="ui secondary menu inverted blue one item">
					<div className="header item">
						Brand
					</div>
				</div>
				<div id="menu" className="ui vertical pointing inverted menu left fixed">
					{this.renderItems()}
				</div>
			</div>
		);
	}
}