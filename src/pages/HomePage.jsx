import Container from "../components/Container";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import SectionLine from "../components/SectionLine";
import Banner from "../components/sections/Banner";
import BestSellingProducts from "../components/sections/BestSellingProducts";
import BrowseByCategory from "../components/sections/BrowseByCategory";
import FlashSale from "../components/sections/FlashSale";
import MusicExperience from "../components/sections/MusicExperience";
import NewArrival from "../components/sections/NewArrival";

const HomePage = () => {
  return (
    <>
      <Section>
        <Container>
          <Banner />
        </Container>
      </Section>
      <FlashSale />
      <BrowseByCategory/>
      <SectionLine/>
      <BestSellingProducts/>
      <MusicExperience/>
      <NewArrival/>
    </>
  );
};

export default HomePage;
