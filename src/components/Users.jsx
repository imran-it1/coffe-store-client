import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const Users = () => {
	const loadedUsers = useLoaderData();
	const [users, setUsers] = useState(loadedUsers);
	let rowNumber = 1;

	const handleDelete = id => {
		console.log("Delee this user", id);

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete!",
		}).then(result => {
			if (result.isConfirmed) {
				fetch(
					`https://coffee-store-server-ql9lqw8nj-imran-it1.vercel.app/users/${id}`,
					{
						method: "DELETE",
					}
				)
					.then(res => res.json())
					.then(data => {
						Swal.fire("Deleted!", "User has been deleted.", "success");
						if (data.deletedCount > 0) {
							// Set reamaining user to the state and rerender the user details table
							const remainingUsers = users?.filter(user => user._id !== id);
							setUsers(remainingUsers);
						}
					});
			}
		});
	};

	return (
		<div className=" w-full container mx-auto flex justify-center items-center  h-screen">
			<Toaster />
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead className=" bg-rose-100">
						<tr>
							<th></th>
							<th>Email</th>
							<th>Password</th>
							<th>Time</th>
							<th>Last Signin</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users?.map(user => (
							<tr className="bg-base-200" key={user._id}>
								<th>{rowNumber++}</th>
								<td>{user.email}</td>
								<td>{user.password}</td>
								<td>{user.createdAt}</td>
								<td>{user.lastSignIn}</td>
								<td className=" flex gap-4">
									<button onClick={() => handleDelete(user._id)}>
										<AiFillDelete className=" text-xl text-neutral-500 hover:text-orange-600 duration-200 ease-linear" />
									</button>
									<button>
										<AiTwotoneEdit className=" text-xl text-neutral-500 hover:text-orange-600 duration-200 ease-linear" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
