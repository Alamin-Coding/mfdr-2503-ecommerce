import React from "react";
import checkout_image from "../assets/checkout-1.png";
import payment_image from "../assets/payment-method.png";

const CheckoutPage = () => {
	return (
		<div className="container py-10 font-sans text-sm md:text-base bg-white">
			{/* Breadcrumb */}
			<nav className="text-gray-400 mb-12">
				<span>Account</span> <span className="mx-1">/</span>
				<span>My Account</span> <span className="mx-1">/</span>
				<span>Product</span> <span className="mx-1">/</span>
				<span>View Cart</span> <span className="mx-1">/</span>
				<span className="text-black font-medium">CheckOut</span>
			</nav>

			<h1 className="text-3xl font-semibold mb-10 tracking-tight">
				Billing Details
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Left Side: Billing Form */}
				<form className="space-y-8">
					{[
						{ label: "First Name", required: true },
						{ label: "Company Name", required: false },
						{ label: "Street Address", required: true },
						{ label: "Apartment, floor, etc. (optional)", required: false },
						{ label: "Town/City", required: true },
						{ label: "Phone Number", required: true },
						{ label: "Email Address", required: true },
					].map((field, idx) => (
						<div key={idx} className="flex flex-col space-y-2">
							<label className="text-gray-400">
								{field.label}
								{field.required && (
									<span className="text-[#db4444] ml-1">*</span>
								)}
							</label>
							<input
								type="text"
								className="bg-[#f5f5f5] border-none rounded-sm px-4 py-3 outline-none w-full md:w-[450px]"
							/>
						</div>
					))}

					{/* Checkbox */}
					<div className="flex items-center gap-3 pt-2">
						<input
							type="checkbox"
							id="save-info"
							className="w-5 h-5 accent-[#db4444] cursor-pointer"
							defaultChecked
						/>
						<label htmlFor="save-info" className="cursor-pointer">
							Save this information for faster check-out next time
						</label>
					</div>
				</form>

				{/* Right Side: Order Summary */}
				<div className="space-y-8 lg:pt-10">
					{/* Product Items */}
					<div className="space-y-6 pr-25">
						<div className="flex justify-between items-center">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-50 flex items-center justify-center">
									<img src={checkout_image} alt="Monitor" />
								</div>
								<span>LCD Monitor</span>
							</div>
							<span className="font-medium">$650</span>
						</div>

						<div className="flex justify-between items-center">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-gray-50 flex items-center justify-center">
									<img src={checkout_image} alt="Gamepad" />
								</div>
								<span>H1 Gamepad</span>
							</div>
							<span className="font-medium">$1100</span>
						</div>
					</div>

					{/* Pricing Breakdown */}
					<div className="space-y-4 border-gray-300 pb-4 pr-25">
						<div className="flex justify-between">
							<span>Subtotal:</span>
							<span>$1750</span>
						</div>
						<div className="flex justify-between border-t border-gray-300 pt-4">
							<span>Shipping:</span>
							<span>Free</span>
						</div>
						<div className="flex justify-between border-t border-gray-300 pt-4 font-semibold text-lg">
							<span>Total:</span>
							<span>$1750</span>
						</div>
					</div>

					{/* Payment Methods */}
					<div className="space-y-4 pr-25">
						<div className="flex justify-between items-center">
							<label className="flex items-center gap-3 cursor-pointer">
								<input
									type="radio"
									name="payment"
									className="w-5 h-5 accent-black"
								/>
								<span>Bank</span>
							</label>
							<div className="flex gap-2">
								{/* Placeholder for Payment Logos */}
								<img src={payment_image} alt="Visa" className="h-4" />
							</div>
						</div>
						<label className="flex items-center gap-3 cursor-pointer">
							<input
								type="radio"
								name="payment"
								className="w-5 h-5 accent-black"
								defaultChecked
							/>
							<span>Cash on delivery</span>
						</label>
					</div>

					{/* Coupon Section */}
					<div className="flex gap-4">
						<input
							type="text"
							placeholder="Coupon Code"
							className="flex-1 border border-black rounded-sm px-4 py-3 outline-none"
						/>
						<button className="bg-[#db4444] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#c13e3e] transition-colors">
							Apply Coupon
						</button>
					</div>

					<button className="bg-[#db4444] text-white px-12 py-4 rounded-sm font-medium w-full md:w-fit hover:bg-[#c13e3e] transition-colors">
						Place Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default CheckoutPage;
