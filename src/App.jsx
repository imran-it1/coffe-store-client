import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
	const loadededCoffees = useLoaderData();
	const [coffees, setCoffees] = useState(loadededCoffees);

	return (
		<div className="container mx-auto">
			<h1 className="text-4xl text-purple-600 text-center font-bold underline">
				Hello Coffee!
			</h1>
			<div className="flex justify-center items-center mt-5 gap-5 text-red-500 ">
				<Link className="hover:underline" to={"/addCoffee"}>
					Add Coffee
				</Link>
			</div>

			<div className="grid gap-5 grid-cols-2">
				{coffees?.map(coffee => (
					<CoffeeCard
						key={coffee._id}
						coffee={coffee}
						coffees={coffees}
						setCoffees={setCoffees}
					></CoffeeCard>
				))}
			</div>
		</div>
	);
}

export default App;
