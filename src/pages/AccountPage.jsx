import React from "react";

const AccountPage = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 py-10 font-sans text-sm md:text-base">
			{/* Breadcrumb and Welcome Message */}
			<div className="flex justify-between items-center mb-16">
				<nav className="text-gray-400">
					<span>Home</span>
					<span className="mx-2">/</span>
					<span className="text-black font-medium">My Account</span>
				</nav>
				<p className="text-black">
					Welcome! <span className="text-[#db4444]">Md Rimel</span>
				</p>
			</div>

			<div className="flex flex-col md:flex-row gap-10 lg:gap-20">
				{/* Sidebar Navigation */}
				<aside className="w-full md:w-64 space-y-8">
					<div>
						<h3 className="font-semibold mb-4">Manage My Account</h3>
						<ul className="ml-8 space-y-2">
							<li className="text-[#db4444] cursor-pointer">My Profile</li>
							<li className="text-gray-500 hover:text-[#db4444] cursor-pointer">
								Address Book
							</li>
							<li className="text-gray-500 hover:text-[#db4444] cursor-pointer">
								My Payment Options
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">My Orders</h3>
						<ul className="ml-8 space-y-2 text-gray-500">
							<li className="hover:text-[#db4444] cursor-pointer">
								My Returns
							</li>
							<li className="hover:text-[#db4444] cursor-pointer">
								My Cancellations
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4 cursor-pointer hover:text-[#db4444]">
							My WishList
						</h3>
					</div>
				</aside>

				{/* Main Form Content */}
				<main className="flex-1 bg-white shadow-box border border-gray-50 rounded-sm p-8 md:p-12 lg:px-20">
					<h2 className="text-[#db4444] text-xl font-medium mb-8">
						Edit Your Profile
					</h2>

					<form className="space-y-6">
						{/* Name Row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="flex flex-col space-y-2">
								<label className="text-black">First Name</label>
								<input
									type="text"
									placeholder="Md"
									className="bg-[#f5f5f5] border-none rounded-sm px-4 py-3 outline-none"
								/>
							</div>
							<div className="flex flex-col space-y-2">
								<label className="text-black">Last Name</label>
								<input
									type="text"
									placeholder="Rimel"
									className="bg-[#f5f5f5] border-none rounded-sm px-4 py-3 outline-none"
								/>
							</div>
						</div>

						{/* Contact Row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="flex flex-col space-y-2">
								<label className="text-black">Email</label>
								<input
									type="email"
									placeholder="rimel1111@gmail.com"
									className="bg-[#f5f5f5] border-none rounded-sm px-4 py-3 outline-none"
								/>
							</div>
							<div className="flex flex-col space-y-2">
								<label className="text-black">Address</label>
								<input
									type="text"
									placeholder="Kingston, 5236, United State"
									className="bg-[#f5f5f5] border-none rounded-sm px-4 py-3 outline-none"
								/>
							</div>
						</div>

						{/* Password Changes Section */}
						<div className="space-y-4 pt-4">
							<label className="text-black block">Password Changes</label>
							<input
								type="password"
								placeholder="Current Passwod"
								className="w-full bg-[#f5f5f5] border-none rounded-sm px-4 py-3 outline-none"
							/>
							<input
								type="password"
								placeholder="New Passwod"
								className="w-full bg-[#f5f5f5] border-none rounded-sm px-4 py-3 outline-none"
							/>
							<input
								type="password"
								placeholder="Confirm New Passwod"
								className="w-full bg-[#f5f5f5] border-none rounded-sm px-4 py-3 outline-none"
							/>
						</div>

						{/* Form Actions */}
						<div className="flex justify-end items-center gap-8 pt-6">
							<button
								type="button"
								className="text-black hover:underline transition-all"
							>
								Cancel
							</button>
							<button
								type="submit"
								className="bg-[#db4444] text-white px-12 py-4 rounded-sm hover:bg-[#c13e3e] transition-colors"
							>
								Save Changes
							</button>
						</div>
					</form>
				</main>
			</div>
		</div>
	);
};

export default AccountPage;
