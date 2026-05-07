import React from "react";

const NotFoundPage = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 py-10 font-sans">
			{/* Breadcrumb */}
			<nav className="text-gray-400 text-sm mb-20 md:mb-32">
				<span>Home</span>
				<span className="mx-2">/</span>
				<span className="text-black">404 Error</span>
			</nav>

			{/* Main Content */}
			<div className="flex flex-col items-center text-center space-y-8">
				<h1 className="text-7xl md:text-9xl font-medium tracking-wider text-black">
					404 Not Found
				</h1>

				<p className="text-black text-base md:text-lg">
					Your visited page not found. You may go home page.
				</p>

				<div className="pt-8">
					<button
						className="bg-[#db4444] text-white px-12 py-4 rounded-sm font-medium hover:bg-[#c13e3e] transition-colors"
						onClick={() => (window.location.href = "/")}
					>
						Back to home page
					</button>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
