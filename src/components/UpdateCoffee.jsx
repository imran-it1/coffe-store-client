import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
	const coffee = useLoaderData();
	const { _id, name, quantity, details, photo, supplier, taste, category } =
		coffee || {};

	const handleUpdateCoffee = event => {
		event.preventDefault();

		const form = event.target;

		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;

		const updatedCoffee = {
			name,
			quantity,
			supplier,
			taste,
			category,
			details,
			photo,
		};

		fetch(`http://localhost:5000/coffee/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updatedCoffee),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: "Coffee updated Successful",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};

	return (
		<div className="  bg-[#F4F3F0] h-screen">
			<h1 className="text-3xl font-bold text-center pt-10">
				Update a coffee: {name}
			</h1>
			<form onSubmit={handleUpdateCoffee} className=" w-full px-24">
				{/* First Row */}
				<div className=" w-full md:flex gap-5 mt-10">
					<div className=" w-full">
						<label className="block font-semibold text-gray-800">Name</label>
						<input
							type="text"
							name="name"
							defaultValue={name}
							placeholder="Enter coffee name"
							className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 bg-gray-50"
						/>
					</div>
					<div className=" w-full">
						<label className="block font-semibold text-gray-800">
							Quantity
						</label>
						<input
							type="number"
							name="quantity"
							defaultValue={quantity}
							placeholder="Enter available quantity"
							className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 bg-gray-50"
						/>
					</div>
				</div>
				{/* Second Row */}
				<div className=" w-full md:flex gap-5 mt-10">
					<div className=" w-full">
						<label className="block font-semibold text-gray-800">
							Supplier
						</label>
						<input
							type="text"
							name="supplier"
							defaultValue={supplier}
							placeholder="Enter coffee supplier"
							className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 bg-gray-50"
						/>
					</div>
					<div className=" w-full">
						<label className="block font-semibold text-gray-800">Taste</label>
						<input
							type="text"
							name="taste"
							defaultValue={taste}
							placeholder="Enter coffee taste"
							className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 bg-gray-50"
						/>
					</div>
				</div>
				{/* Third Row */}
				<div className=" w-full md:flex gap-5 mt-10">
					<div className=" w-full">
						<label className="block font-semibold text-gray-800">
							Category
						</label>
						<input
							type="text"
							name="category"
							defaultValue={category}
							placeholder="Enter coffee category"
							className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 bg-gray-50"
						/>
					</div>
					<div className=" w-full">
						<label className="block font-semibold text-gray-800">Details</label>
						<input
							type="text"
							name="details"
							defaultValue={details}
							placeholder="Enter coffee details"
							className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 bg-gray-50"
						/>
					</div>
				</div>
				<div className=" w-full mt-10">
					<label className="block font-semibold text-gray-800">Photo</label>
					<input
						type="text"
						name="photo"
						defaultValue={photo}
						placeholder="Enter photo URL"
						className="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 bg-gray-50"
					/>
				</div>
				<input
					type="submit"
					className=" mt-10 w-full px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
					value="Update Coffee"
				/>
			</form>
		</div>
	);
};

export default UpdateCoffee;
