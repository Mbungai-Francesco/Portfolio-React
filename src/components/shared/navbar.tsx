import { Link } from "react-router-dom";

const Navbar = () => {
	const routes = ["", "Skills", "Projects", "Contact"];
	return (
		<>
			<div className="flex flex-col">
				{routes.map((route) => (
					<Link to={route}>{route == '' ? 'About' : route}</Link>
				))}
			</div>
		</>
	);
};

export default Navbar;
