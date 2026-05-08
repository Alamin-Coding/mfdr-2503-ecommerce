import Container from "../Container";
import Section from "../Section";
import JBL from "../../assets/JBL_BG.png";
import Button from "../Button";
import useCountdown from "../CountDownDemo";

const bgImage = {
  background: `url(${JBL})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right center",
  backgroundSize: "cover",
};

const MusicExperience = () => {
  const { formattedTimeLeft } = useCountdown("2027-05-11T01:12:59");

  return (
    <Section>
      <Container>
        <div className="bg-black" style={bgImage}>
          <div className="py-[69px] pl-[56px] max-w-[443px]">
            <p className="text-[#00FF66]">Offer</p>
            <h2 className="text-white text-[45px] pt-1">
              Enhance Your Music Experience
            </h2>

            <div className="flex gap-6 py-10">
              <div className="size-[62px] rounded-full bg-F5F5F5 text-black flex items-center justify-center flex-col">
                <strong className="leading-none ">
                  {formattedTimeLeft.days}
                </strong>
                <span className="leading-none text-[11px]">Day</span>
              </div>
              <div className="size-[62px] rounded-full bg-F5F5F5 text-black flex items-center justify-center flex-col">
                <strong className="leading-none ">23</strong>
                <span className="leading-none text-[11px]">Hours</span>
              </div>
              <div className="size-[62px] rounded-full bg-F5F5F5 text-black flex items-center justify-center flex-col">
                <strong className="leading-none ">23</strong>
                <span className="leading-none text-[11px]">Hours</span>
              </div>
              <div className="size-[62px] rounded-full bg-F5F5F5 text-black flex items-center justify-center flex-col">
                <strong className="leading-none ">
                  {formattedTimeLeft.seconds}
                </strong>
                <span className="leading-none text-[11px]">Seconds</span>
              </div>
            </div>

            <Button secondary={true}>Buy Now!</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MusicExperience;
