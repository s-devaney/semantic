import React, { Component } from "react";

export default class Content extends Component {
	render() {
		return(
			<div id="content">
				<div className="ui secondary menu inverted blue">
					<a className="item">
						<i className="sidebar icon"></i>
					</a>
					<div className="right menu">
						<a className="item">
							<i className="icon search"></i>
						</a>
					</div>
				</div>
				<div className="ui message">
					<div className="header">
						Work in progress
					</div>
					<p>This site is a work in progress. Check back soon.</p>
				</div>
			</div>
		);
	}
}