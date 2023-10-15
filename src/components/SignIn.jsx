import { Link } from "react-router-dom";

const SignIn = () => {
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
						<form className="mt-8 space-y-4">
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
