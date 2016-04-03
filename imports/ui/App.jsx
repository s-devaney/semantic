import React, { Component } from "react";

import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";

export default class App extends Component {
	render() {
		return (
			<div id="container">
				<div id="side">
					<Sidebar />
				</div>
				<Content />
			</div>
		);
	}
}