import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	const routes = ["", "Skills", "Projects", "Contact"];
	const location = useLocation();

	return (
		<>
			<div className="flex flex-col">
				{routes.map((route) => (
					<div
						className={`flex items-center myNav cursor-pointer ${
							location.pathname === `/${route}` ? "active" : ""
						}`}
						key={route}
					>
						<div className="w-16 h-0 mr-6 myNavLine"></div>
						<Link
							to={route}
							className="w-fit self-center text-2xl font-normal uppercase"
						>
							{route == "" ? "About" : route}
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default Navbar;
