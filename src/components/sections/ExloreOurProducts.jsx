


import React from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import { ArrowLeft, ArrowRight } from "../icons";
import Section from "../Section";
import Container from "../Container";
import { ExploreOurProductsData } from "../../data";
import Button from "../Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExploreOurProducts = () => {
	return (
		<Section className={"pb-15 pt-18"}>
			<Container>
				<div className="mb-10 grid grid-cols-[auto_1fr_auto] items-end gap-[87px] relative">
					<SectionHeader title="Explore Our Products" subTitle="Our Products" />
					<div>
						<div className="flex items-center justify-end gap-5 absolute bottom-0 right-3 z-10">
							<span className="group cursor-pointer bg-F5F5F5 hover:bg-red-500 w-8.5 h-8.5 rounded-full flex items-center justify-center">
								<ChevronLeft className="group-hover:text-white" /> 
							</span>
							<span className="group cursor-pointer bg-F5F5F5 hover:bg-red-500 w-8.5 h-8.5 rounded-full flex items-center justify-center">
								<ChevronRight className="group-hover:text-white" />
							</span>
						</div>
					</div>
					{/* <Arrows /> */}
				</div>
				<div className="grid grid-cols-4 gap-x-6 gap-y-15">
					{ExploreOurProductsData.map((product) => (
						<ProductCard key={product.id} product={product} price_with_rating={true} showPrice={false} ourProducts={true} />
					))}
				</div>
				<div className="pt-15 text-center">
					<Button TagName="a" href="/shop">View All Products</Button>
				</div>
			</Container>
		</Section>
	);
};

export default ExploreOurProducts;






