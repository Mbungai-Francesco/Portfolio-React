import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	const routes = ["", "Skills", "Projects", "Contact"];
	const location = useLocation();
	console.log(routes)

	return (
		<>
			<div className="flex flex-col w-fit">
				{routes.map((route) => (
					<Link 
						to={route}
						className={`flex items-center myNav cursor-pointer mb-3 w-full ${
							location.pathname === `/${route}` ? "active" : ""
						}`}
						key={route}
					>
						<div className="w-16 h-0 mr-6 myNavLine"></div>
						<p
							
							className="w-fit self-center text-2xl font-normal uppercase"
						>
							{route == "" ? "About" : route}
						</p>
					</Link>
				))}
			</div>
		</>
	);
};

export default Navbar;
