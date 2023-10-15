import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Header from "./components/Header";

function App() {
	const loadededCoffees = useLoaderData();
	const [coffees, setCoffees] = useState(loadededCoffees);

	return (
		<div className="container mx-auto">
			<h1 className="text-4xl text-purple-600 text-center font-bold underline">
				Hello Coffee!
			</h1>

			<Header></Header>

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
