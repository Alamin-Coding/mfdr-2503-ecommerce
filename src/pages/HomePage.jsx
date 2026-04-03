import Container from "../components/Container";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Banner from "../components/sections/Banner";
import FlashSale from "../components/sections/FlashSale";

const HomePage = () => {
  return (
    <>
      <Section>
        <Container>
          <Banner />
        </Container>
      </Section>
      <FlashSale />
    </>
  );
};

export default HomePage;
