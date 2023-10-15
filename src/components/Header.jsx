import { NavLink } from "react-router-dom";

const Header = () => {
	const links = (
		<ul>
			<li>
				<NavLink
					to="/addCoffee"
					className={({ isActive }) => (isActive ? "text-orange-600" : "")}
				>
					Add Coffee
				</NavLink>
			</li>
		</ul>
	);

	return (
		<nav>
			<ul>{links}</ul>
		</nav>
	);
};

export default Header;
