import React from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import Section from "../Section";
import Container from "../Container";
import { v4 as uuidv4 } from "uuid";

import { ProductData } from "../../data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button";
import CountDown from "../CountDown";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const FlashSale = () => {
	return (
		<Section className="pt-32">
			<Container>
				<div className="border-b border-b-border pb-15">
					<div className="grid grid-cols-[auto_1fr_auto] gap-4 mb-10 relative">
						<SectionHeader subTitle={"Today's"} title={"Flash Sales"} />
						<CountDown />

						<div className="flex items-center justify-end gap-5 absolute bottom-0 right-3 z-10">
							<span className="flash-arrow-prev group cursor-pointer bg-F5F5F5 hover:bg-red-500 w-8.5 h-8.5 rounded-full flex items-center justify-center">
								<ChevronLeft className="group-hover:text-white" />
							</span>
							<span className="flash-arrow-next group cursor-pointer bg-F5F5F5 hover:bg-red-500 w-8.5 h-8.5 rounded-full flex items-center justify-center">
								<ChevronRight className="group-hover:text-white" />
							</span>
						</div>
					</div>
					<div className="w-full">
						<Swiper
							navigation={true}
							slidesPerView={4}
							spaceBetween={24}
							modules={[Navigation, Autoplay]}
							className="mySwiper"
							navigation={{
								prevEl: ".flash-arrow-prev",
								nextEl: ".flash-arrow-next",
							}}
							autoplay={{
								delay: 2000,
								pauseOnMouseEnter: true,
								disableOnInteraction: false,
							}}
							loop={true}
						>
							{ProductData?.slice(0, 8).map((item, index) => (
								<SwiperSlide key={index}>
									<ProductCard product={item} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className="flex justify-center pt-6">
						<Button>View All Products</Button>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default FlashSale;
