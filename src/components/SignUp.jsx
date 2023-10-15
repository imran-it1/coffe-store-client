import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
	// use contect
	const { createUser } = useContext(AuthContext);

	const handleSignUp = e => {
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		// Create User
		createUser(email, password)
			.then(result => {
				const user = result.user;
				console.log(user);

				// New user created --- You can send user data to the Database

				// Use details object
				const usereCreationTime = user.metadata?.creationTime;
				const newUser = { email, password, createdAt: usereCreationTime };

				fetch("http://localhost:5000/users", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(newUser),
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						if (data.insertedId) {
							toast.success("User added to the database");
						}
					});
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div className="h-screen w-full">
			<Toaster></Toaster>
			<section className=" flex h-full justify-center items-center  px-4 mx-auto max-w-7xl">
				<div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5">
					<h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">
						Sign Up
					</h1>
					<p className="mb-2 text-sm font-normal text-center text-gray-700 md:text-base">
						Already have an account?
						<Link
							to={"/signin"}
							href="#"
							className="text-purple-700 hover:text-purple-900"
						>
							Sign in
						</Link>
					</p>
					<form onSubmit={handleSignUp} className="mt-8 space-y-4">
						<label className="block">
							<span className="block mb-1 text-xs font-medium text-gray-700">
								Email
							</span>
							<input
								className="form-input w-full rounded-md shadow-t-sm"
								type="email"
								name="email"
								placeholder="example@gamil.com"
								required
							/>
						</label>
						<label className="block">
							<span className="block mb-1 text-xs font-medium text-gray-700">
								Password
							</span>
							<input
								className="form-input  w-full rounded-md shadow-t-sm"
								type="password"
								name="password"
								placeholder="••••••••"
								required
							/>
						</label>
						<input
							type="submit"
							className="w-full bg-blue-600 hover:bg-blue-500 border-none text-white btn btn-primary btn-md"
							value="Sign Up"
						/>
					</form>

					<p className="my-5 text-xs font-medium text-center text-gray-700">
						By clicking &quot;Sign Up&quot; you agree to our
						<a href="#" className="text-purple-700 hover:text-purple-900">
							Terms of Service
						</a>
						and
						<a href="#" className="text-purple-700 hover:text-purple-900">
							Privacy Policy
						</a>
						.
					</p>
				</div>
			</section>
		</div>
	);
};

export default SignUp;
