import SectionHeader from "../SectionHeader";
import Section from "../Section";
import Container from "../Container";
import { ChevronLeft, ChevronRight, Heart, Monitor } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import { Computer, Gamepad } from "lucide-react";

const cardData = [
	{
		id: uuidv4(),
		title: "Phones",
		icon: <Gamepad />,
	},
	{
		id: uuidv4(),
		title: "Computers",
		icon: <Computer />,
	},
	{
		id: uuidv4(),
		title: "Phones",
		icon: <Heart />,
	},
	{
		id: uuidv4(),
		title: "Phones",
		icon: <Heart />,
	},
	{
		id: uuidv4(),
		title: "Phones",
		icon: <Heart />,
	},
	{
		id: uuidv4(),
		title: "Phones",
		icon: <Heart />,
	},
	{
		id: uuidv4(),
		title: "Monitor",
		icon: <Monitor />,
	},
];

const BrowseByCategory = () => {
	return (
		<Section className="pt-32 pb-15">
			<Container>
				<div className="grid grid-cols-[auto_1fr_auto] gap-4 mb-10 relative">
					<SectionHeader subTitle={"Categories"} title={"Browse By Category"} />

					<div className="flex items-center justify-end gap-5 absolute bottom-0 right-3 z-10">
						<span className="category-arrow-prev group cursor-pointer bg-F5F5F5 hover:bg-red-500 w-8.5 h-8.5 rounded-full flex items-center justify-center">
							<ChevronLeft className="group-hover:text-white" />
						</span>
						<span className="category-arrow-next group cursor-pointer bg-F5F5F5 hover:bg-red-500 w-8.5 h-8.5 rounded-full flex items-center justify-center">
							<ChevronRight className="group-hover:text-white" />
						</span>
					</div>
				</div>

				<div className="w-full">
					<Swiper
						navigation={true}
						slidesPerView={6}
						spaceBetween={30}
						modules={[Navigation, Autoplay]}
						className="category-slider"
						navigation={{
							prevEl: ".category-arrow-prev",
							nextEl: ".category-arrow-next",
						}}
						autoplay={{
							delay: 2000,
							pauseOnMouseEnter: true,
							disableOnInteraction: false,
						}}
						loop={true}
					>
						{cardData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="cursor-pointer flex flex-col items-center justify-center hover:bg-secondary group p-4 w-42.5 h-33.75 border border-border rounded hover:bg-black transition">
									<div className=" group-hover:stroke-F5F5F5 stroke-black transition group-hover:text-white">
										{item.icon}
									</div>

									<span className="block mt-2 group-hover:text-F5F5F5 transition">
										{item.title}
									</span>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
		</Section>
	);
};

export default BrowseByCategory;
