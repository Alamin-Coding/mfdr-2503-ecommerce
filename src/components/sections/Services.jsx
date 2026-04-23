
import Container from '../Container'
import Section from '../Section'
import ServiceCard from '../ServiceCard'
import service_icon_1 from '../../assets/icons/service-2.svg'
import service_icon_2 from '../../assets/icons/service-1.svg'
import service_icon_3 from '../../assets/icons/service-3.svg'


const Services = () => {
    return (
        <Section className={"pb-15"}>
            <Container>
                <div className='flex justify-between gap-4'>
                    <ServiceCard icon={service_icon_1} description={"Free delivery for all orders over $140"} title={"FREE AND FAST DELIVERY"} />
                    <ServiceCard icon={service_icon_2} description={"Friendly 24/7 customer support"} title={"24/7 CUSTOMER SERVICE"} />
                    <ServiceCard icon={service_icon_3} description={"Free delivery for all orders over $140"} title={"FREE AND FAST DELIVERY"} />
                </div>
            </Container>

        </Section>
    )
}

export default Services