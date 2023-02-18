import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-expand-md bg-body-tertiary fixed-top" data-bs-theme="dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						JixxyNews
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar"
						aria-controls="offcanvasNavbar"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="offcanvas offcanvas-end"
						tabIndex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
					>
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
								JixxyNews
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link className="nav-link" aria-current="page" to="/">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" aria-current="page" to="/business">
										Business
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										aria-current="page"
										to="/entertainment"
									>
										Entertainment
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" aria-current="page" to="/general">
										General
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" aria-current="page" to="/health">
										Health
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" aria-current="page" to="/science">
										Science
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" aria-current="page" to="/sports">
										Sports
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										aria-current="page"
										to="/technology"
									>
										Technology
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
