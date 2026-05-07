import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Message sent successfully!");
		setFormData({ name: "", email: "", phone: "", message: "" });
	};

	return (
		<div className="max-w-6xl mx-auto px-6 py-12">
			{/* Breadcrumb */}
			<div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
				<a href="#" className="hover:text-black">
					Home
				</a>
				<span>/</span>
				<span className="text-black font-medium">Contact</span>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
				{/* Left Info */}
				<div className="lg:col-span-5 bg-white p-8 rounded-sm shadow-box">
					{/* Call Us */}
					<div className="flex gap-4">
						<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
							<Phone className="text-white" size={22} />
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-1">Call To Us</h3>
							<p className="text-gray-600 text-sm">
								We are available 24/7, 7 days a week.
							</p>
							<p className="mt-2 font-medium">
								Phone: <span>+8801611112222</span>
							</p>
						</div>
					</div>

					<div className="w-full h-px bg-gray-200 my-8" />

					{/* Write To Us */}
					<div className="flex gap-4">
						<div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
							<Mail className="text-white" size={22} />
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-1">Write To Us</h3>
							<p className="text-gray-600 text-sm">
								Fill out our form and we will contact you within 24 hours.
							</p>
							<div className="mt-4 space-y-1 text-sm">
								<p>
									Emails:{" "}
									<a
										href="mailto:customer@exclusive.com"
										className="text-blue-600 hover:underline"
									>
										customer@exclusive.com
									</a>
								</p>
								<p>
									<a
										href="mailto:support@exclusive.com"
										className="text-blue-600 hover:underline"
									>
										support@exclusive.com
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Form */}
				<div className="lg:col-span-7 bg-white p-8 rounded-sm shadow-box">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="relative">
								<label className="block text-sm font-medium mb-1 absolute top-1/2 translate-y-[-50%] left-2 z-10">
									Your Name <span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									required
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									className="h-12.5 bg-F5F5F5 w-full px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-200 placeholder:bg-red-500"
								/>
							</div>
							<div className="relative">
								<label className="block text-sm font-medium mb-1 absolute top-1/2 translate-y-[-50%] left-2 z-10">
									Your Email <span className="text-red-500">*</span>
								</label>
								<input
									type="email"
									required
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									className="h-12.5 bg-F5F5F5 w-full px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
								/>
							</div>
							<div className="relative">
								<label className="block text-sm font-medium mb-1 absolute top-1/2 translate-y-[-50%] left-2 z-10">
									Your Phone <span className="text-red-500">*</span>
								</label>
								<input
									type="tel"
									required
									value={formData.phone}
									onChange={(e) =>
										setFormData({ ...formData, phone: e.target.value })
									}
									className="h-12.5 bg-F5F5F5 w-full px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
								/>
							</div>
						</div>

						<div className="relative">
							<label className="block text-sm font-medium mb-1 absolute top-3 left-2 z-10">
								Your Message
							</label>
							<textarea
								rows={8}
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								className="bg-F5F5F5 w-full px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
							/>
						</div>

						<div className="flex justify-end">
							<button
								type="submit"
								className="bg-red-500 hover:bg-red-600 text-white px-10 py-3.5 rounded-lg font-medium flex items-center gap-2 transition"
							>
								Send Message
								<Send size={18} />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
