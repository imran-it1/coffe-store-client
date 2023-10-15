import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
	const { _id, name, quantity, details, photo } = coffee || {};

	const handleDelete = _id => {
		console.log(_id);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(result => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/coffee/${_id}`, {
					method: "DELETE",
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
							const remaining = coffees.filter(cof => cof._id !== _id);
							setCoffees(remaining);
						}
					});
			}
		});
	};

	return (
		<div className="p-5 h-full grid gap-5 grid-cols-3 rounded-md shadow-md  ">
			<figure>
				<img
					src={photo}
					className="object-cover object-center w-full rounded h-72 "
				/>
			</figure>
			<div className="flex flex-col justify-between p-6 space-y-8">
				<div className="space-y-2 flex flex-col gap-5 justify-center h-full">
					<p className="">Name: {name}</p>
					<p className="">Name: {quantity}</p>
					<p className="">Name: {details}</p>
				</div>
			</div>
			<div className=" flex flex-col gap-5 justify-center ">
				<div className="btn-group btn-group-vertical">
					<button className="btn btn-primary">Details</button>
					<Link to={`/updateCoffee/${_id}`} className="btn btn-secondary">
						<button>Edit</button>
					</Link>
					<button onClick={() => handleDelete(_id)} className="btn btn-error">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};
CoffeeCard.propTypes = {
	coffee: PropTypes.object,
	coffees: PropTypes.array,
	setCoffees: PropTypes.func,
};

export default CoffeeCard;
