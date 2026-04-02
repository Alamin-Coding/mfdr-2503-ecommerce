import Container from "../components/Container"
import Section from "../components/Section"
import SectionHeader from "../components/SectionHeader"
import Banner from "../components/sections/Banner"

const HomePage = () => {
  return (
    <>
    <Section>
      <Container>
        <Banner/>
      </Container>
    </Section>
    <Section className="pt-41.25">
      <Container>
        <div className="grid grid-cols-[auto_1fr_auto] gap-4">
          <SectionHeader subTitle={"Today's"} title={"Flash Sales"}/>
          <div>timer</div>
          <div>arrow</div>
        </div>
      </Container>
    </Section>
    </>
  )
}

export default HomePage