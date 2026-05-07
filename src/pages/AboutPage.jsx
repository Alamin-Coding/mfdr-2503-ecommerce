import {
	Briefcase,
	DollarSign,
	Headphones,
	ShieldCheck,
	ShoppingBag,
	Store,
	Truck,
} from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

import man_1 from "../assets/team-1.png";
import man_2 from "../assets/team-2.png";
import man_3 from "../assets/team-3.png";

const AboutPage = () => {
	return (
		<div className="font-sans text-black bg-white">
			{/* Our Story Section */}
			<section className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
				<div className="flex-1 space-y-6">
					<h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
						Our Story
					</h1>
					<p className="text-gray-700 leading-relaxed">
						Launched in 2015, Exclusive is South Asia's premier online shopping
						marketplace with an active presence in Bangladesh. Supported by wide
						range of tailored marketing, data and service solutions, Exclusive
						has 10,500 sellers and 300 brands and serves 3 millions customers
						across the region.
					</p>
					<p className="text-gray-700 leading-relaxed">
						Exclusive has more than 1 Million products to offer, growing at a
						very fast. Exclusive offers a diverse assortment in categories
						ranging from consumer.
					</p>
				</div>
				<div className="flex-1">
					<img
						src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800"
						alt="Shopping friends"
						className="rounded-sm w-full h-[400px] object-cover"
					/>
				</div>
			</section>

			{/* Stats Section */}
			<section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{[
					{
						icon: <Store size={32} />,
						value: "10.5k",
						label: "Sellers active our site",
					},
					{
						icon: <DollarSign size={32} />,
						value: "33k",
						label: "Monthly Product Sale",
						active: true,
					},
					{
						icon: <ShoppingBag size={32} />,
						value: "45.5k",
						label: "Customer active in our site",
					},
					{
						icon: <Briefcase size={32} />,
						value: "25k",
						label: "Anual gross sale in our site",
					},
				].map((stat, idx) => (
					<div
						key={idx}
						className={`border border-gray-300 rounded p-8 flex flex-col items-center transition-colors group ${stat.active ? "bg-[#db4444] text-white border-[#db4444]" : "hover:bg-[#db4444] hover:text-white hover:border-[#db4444]"}`}
					>
						<div
							className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${stat.active ? "bg-white/30" : "bg-black text-white group-hover:bg-white/30"}`}
						>
							<div
								className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.active ? "bg-white text-black" : "bg-black text-white group-hover:bg-white group-hover:text-black"}`}
							>
								{stat.icon}
							</div>
						</div>
						<h3 className="text-3xl font-bold">{stat.value}</h3>
						<p className="text-sm mt-2">{stat.label}</p>
					</div>
				))}
			</section>

			{/* Team Section */}
			<section className="max-w-7xl mx-auto px-4 py-20">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{[
						{
							name: "Tom Cruise",
							role: "Founder & Chairman",
							img: man_1,
						},
						{
							name: "Emma Watson",
							role: "Managing Director",
							img: man_2,
						},
						{
							name: "Will Smith",
							role: "Product Designer",
							img: man_3,
						},
					].map((member, idx) => (
						<div key={idx} className="space-y-4">
							<div className="h-[430px] overflow-hidden bg-gray-100 flex justify-center rounded-sm">
								<img
									src={member.img}
									alt={member.name}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<h3 className="text-2xl font-semibold">{member.name}</h3>
								<p className="text-gray-600">{member.role}</p>
								<div className="flex gap-4 mt-3">
									<FaTwitter size={20} className="cursor-pointer" />
									<FaInstagram size={20} className="cursor-pointer" />
									<FaLinkedin size={20} className="cursor-pointer" />
								</div>
							</div>
						</div>
					))}
				</div>
				{/* Pagination Dots */}
				<div className="flex justify-center gap-2 mt-10">
					<div className="w-3 h-3 rounded-full bg-gray-300"></div>
					<div className="w-3 h-3 rounded-full bg-gray-300"></div>
					<div className="w-3 h-3 rounded-full bg-[#db4444] border-2 border-gray-300"></div>
					<div className="w-3 h-3 rounded-full bg-gray-300"></div>
					<div className="w-3 h-3 rounded-full bg-gray-300"></div>
				</div>
			</section>

			{/* Services Section */}
			<section className="max-w-5xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
				<div className="flex flex-col items-center">
					<div className="bg-gray-300 p-2 rounded-full mb-4">
						<div className="bg-black text-white p-3 rounded-full">
							<Truck size={32} />
						</div>
					</div>
					<h4 className="font-bold uppercase tracking-wide">
						Free and Fast Delivery
					</h4>
					<p className="text-xs text-gray-600 mt-1">
						Free delivery for all orders over $140
					</p>
				</div>
				<div className="flex flex-col items-center">
					<div className="bg-gray-300 p-2 rounded-full mb-4">
						<div className="bg-black text-white p-3 rounded-full">
							<Headphones size={32} />
						</div>
					</div>
					<h4 className="font-bold uppercase tracking-wide">
						24/7 Customer Service
					</h4>
					<p className="text-xs text-gray-600 mt-1">
						Friendly 24/7 customer support
					</p>
				</div>
				<div className="flex flex-col items-center">
					<div className="bg-gray-300 p-2 rounded-full mb-4">
						<div className="bg-black text-white p-3 rounded-full">
							<ShieldCheck size={32} />
						</div>
					</div>
					<h4 className="font-bold uppercase tracking-wide">
						Money Back Guarantee
					</h4>
					<p className="text-xs text-gray-600 mt-1">
						We return money within 30 days
					</p>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
