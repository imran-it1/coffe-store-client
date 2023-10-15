import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
	const { signInUser } = useContext(AuthContext);

	const handleSignIn = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		console.log(email, password);

		signInUser(email, password)
			.then(result => {
				console.log(result.user);

				const user = {
					email,
					lastSignIn: result.user?.metadata?.lastSignInTime,
				};

				// send user last log in time to the database
				// We don't have access to the _id here, so we use inique email id for this operation

				fetch(
					"https://coffee-store-server-ql9lqw8nj-imran-it1.vercel.app/users",
					{
						method: "PATCH",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(user),
					}
				)
					.then(res => res.json())
					.then(data => {
						console.log(data);
					});
			})
			.catch(error => {
				console.error(error);
			});
	};

	return (
		<div>
			<div className="h-screen w-full">
				<section className=" flex h-full justify-center items-center  px-4 mx-auto max-w-7xl">
					<div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5">
						<h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">
							Sign In
						</h1>
						<p className="mb-2 text-sm font-normal text-center text-gray-700 md:text-base">
							Don&apos;t have an account?
							<Link
								to={"/signup"}
								className="text-purple-700 hover:text-purple-900"
							>
								Sign Up
							</Link>
						</p>
						<form onSubmit={handleSignIn} className="mt-8 space-y-4">
							<label className="block">
								<span className="block mb-1 text-xs font-medium text-gray-700">
									Your Email
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
									Create a password
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
								className="w-full bg-blue-600 border-none text-white btn btn-primary btn-md"
								value="Sign Up"
							/>
						</form>

						<p className="my-5 text-xs font-medium text-center text-gray-700">
							By clicking &quot;Sign In&quot; you agree to our
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
		</div>
	);
};

export default SignIn;
