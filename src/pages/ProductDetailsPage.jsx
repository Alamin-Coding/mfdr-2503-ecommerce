import React, { useState } from "react";
import { Star, Heart, Truck, RotateCcw, Plus, Minus } from "lucide-react";
import { BestSellingProductsData } from "../data";
import WishlistCard from "../components/WishlistCard";

const ProductDetailsPage = () => {
	const [quantity, setQuantity] = useState(2);
	const [selectedSize, setSelectedSize] = useState("M");
	const [selectedColor, setSelectedColor] = useState("blue");

	return (
		<div className="max-w-7xl mx-auto px-4 py-10 font-sans text-black">
			{/* Breadcrumb */}
			<nav className="text-gray-400 text-sm mb-12">
				<span>Account</span> <span className="mx-1">/</span>
				<span>Gaming</span> <span className="mx-1">/</span>
				<span className="text-black font-medium">Havic HV G-92 Gamepad</span>
			</nav>

			<div className="flex flex-col lg:flex-row gap-12">
				{/* Left: Image Gallery */}
				<div className="flex flex-col-reverse md:flex-row gap-4 flex-1">
					{/* Thumbnails */}
					<div className="flex md:flex-col gap-4">
						{[1, 2, 3, 4].map((i) => (
							<div
								key={i}
								className="bg-[#f5f5f5] p-4 rounded-sm w-32 h-28 flex items-center justify-center cursor-pointer"
							>
								<img
									src="https://m.media-amazon.com/images/I/6124s9SjhPL._SL1500_.jpg"
									alt="thumbnail"
									className="object-contain"
								/>
							</div>
						))}
					</div>
					{/* Main Image */}
					<div className="bg-[#f5f5f5] flex-1 flex items-center justify-center p-8 rounded-sm">
						<img
							src="https://m.media-amazon.com/images/I/6124s9SjhPL._SL1500_.jpg"
							alt="Havic HV G-92 Gamepad"
							className="max-w-full h-auto object-contain"
						/>
					</div>
				</div>

				{/* Right: Product Info */}
				<div className="flex-1 space-y-6">
					<h1 className="text-2xl font-semibold tracking-wide">
						Havic HV G-92 Gamepad
					</h1>

					<div className="flex items-center gap-4 text-sm">
						<div className="flex text-yellow-400">
							{[...Array(4)].map((_, i) => (
								<Star key={i} size={16} fill="currentColor" />
							))}
							<Star size={16} className="text-gray-300" fill="currentColor" />
						</div>
						<span className="text-gray-400">(150 Reviews)</span>
						<span className="text-gray-300">|</span>
						<span className="text-[#00FF66]">In Stock</span>
					</div>

					<div className="text-2xl font-medium">$192.00</div>

					<p className="text-sm leading-relaxed border-b border-gray-300 pb-6">
						PlayStation 5 Controller Skin High quality vinyl with air channel
						adhesive for easy bubble free install & mess free removal Pressure
						sensitive.
					</p>

					{/* Colours */}
					<div className="flex items-center gap-4">
						<span className="text-xl mr-2">Colours:</span>
						<button
							onClick={() => setSelectedColor("blue")}
							className={`w-5 h-5 rounded-full bg-[#A0BCE0] ring-1 ring-offset-2 ${selectedColor === "blue" ? "ring-black" : "ring-transparent"}`}
						/>
						<button
							onClick={() => setSelectedColor("red")}
							className={`w-5 h-5 rounded-full bg-[#E07575] ring-1 ring-offset-2 ${selectedColor === "red" ? "ring-black" : "ring-transparent"}`}
						/>
					</div>

					{/* Size */}
					<div className="flex items-center gap-4">
						<span className="text-xl mr-2">Size:</span>
						{["XS", "S", "M", "L", "XL"].map((size) => (
							<button
								key={size}
								onClick={() => setSelectedSize(size)}
								className={`w-10 h-10 border rounded-md flex items-center justify-center font-medium transition-colors
                  ${selectedSize === size ? "bg-[#db4444] text-white border-[#db4444]" : "hover:border-black"}`}
							>
								{size}
							</button>
						))}
					</div>

					{/* Action Bar */}
					<div className="flex items-center gap-4 pt-2">
						<div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
							<button
								onClick={() => setQuantity(Math.max(1, quantity - 1))}
								className="p-2 px-4 hover:bg-[#db4444] hover:text-white transition-colors border-r border-gray-400"
							>
								<Minus size={20} />
							</button>
							<span className="px-8 font-bold text-xl">{quantity}</span>
							<button
								onClick={() => setQuantity(quantity + 1)}
								className="p-2 px-4 bg-[#db4444] text-white hover:bg-[#c13e3e] transition-colors"
							>
								<Plus size={20} />
							</button>
						</div>

						<button className="flex-1 md:flex-none md:px-12 py-3 bg-[#db4444] text-white rounded-md font-medium hover:bg-[#c13e3e] transition-colors">
							Buy Now
						</button>

						<button className="p-2 border border-gray-400 rounded-md hover:bg-gray-50 transition-colors">
							<Heart size={24} />
						</button>
					</div>

					{/* Delivery Info Box */}
					<div className="border border-gray-400 rounded-md mt-10">
						<div className="flex items-center gap-4 p-4 border-b border-gray-400">
							<Truck size={32} />
							<div>
								<p className="font-medium">Free Delivery</p>
								<p className="text-xs underline cursor-pointer">
									Enter your postal code for Delivery Availability
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 p-4">
							<RotateCcw size={32} />
							<div>
								<p className="font-medium">Return Delivery</p>
								<p className="text-xs">
									Free 30 Days Delivery Returns.{" "}
									<span className="underline cursor-pointer">Details</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Just for you */}
			<div className="pt-0">
				<div className="flex justify-between items-center gap-6 pt-20 pb-15">
					<div className="space-y-6">
						<h3 className="flex items-center gap-4">
							<div className="h-10 w-5 rounded bg-secondary"></div>
							<span className="text-[20px] text-black leading-none">
								Related Item
							</span>
						</h3>
					</div>
				</div>

				<div className="grid grid-cols-4 gap-6">
					{BestSellingProductsData.slice(0, 4).map((product) => (
						<WishlistCard
							key={product.id}
							product={product}
							justForYou={true}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsPage;
