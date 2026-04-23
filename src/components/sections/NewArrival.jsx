import React from 'react'
import Section from '../Section'
import Container from '../Container'
import { Link } from 'react-router'
import New_1 from '../../assets/new-1.png'
import New_2 from '../../assets/new-2.png'
import New_3 from '../../assets/new-3.png'
import New_4 from '../../assets/new-4.png'


const NewArrival = () => {
    return (
        <Section className={"py-15"}>
            <Container>
                <div className='grid grid-cols-2 gap-7.5'>
                    <div className='relative bg-black h-[600px]'>
                        <img className='absolute bottom-0 left-1/2 -translate-x-1/2' src={New_1} alt="image" />
                        <div className='absolute z-10 left-8 bottom-8 text-white max-w-[242px]'>
                            <h3>PlayStation 5</h3>
                            <p className='text-sm text-[#FAFAFA]/80 py-2'>Black and White version of the PS5 coming out on sale.</p>
                            <Link to={"/shop"} className='border-b border-b-slate-300'>Shop Now</Link>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div className='relative bg-[#0D0D0D] h-[284px]'>
                            <img className='absolute bottom-0 right-0' src={New_2} alt="image" />
                            <div className='absolute z-10 left-8 bottom-8 text-white max-w-[242px]'>
                                <h3>PlayStation 5</h3>
                                <p className='text-sm text-[#FAFAFA]/80 py-2'>Black and White version of the PS5 coming out on sale.</p>
                                <Link to={"/shop"} className='border-b border-b-slate-300'>Shop Now</Link>
                            </div>
                        </div>
                        <div className='h-[284px] grid grid-cols-2 gap-8'>
                            <div className='relative bg-[#0D0D0D] h-[284px]'>
                                <img className='absolute top-1/2 left-1/2 -translate-1/2' src={New_3} alt="image" />
                                <div className='absolute z-10 left-8 bottom-8 text-white max-w-[242px]'>
                                    <h3>PlayStation 5</h3>
                                    <p className='text-sm text-[#FAFAFA]/80 py-2'>Black and White version of the PS5 coming out on sale.</p>
                                    <Link to={"/shop"} className='border-b border-b-slate-300'>Shop Now</Link>
                                </div>
                            </div>
                            <div className='relative bg-[#0D0D0D] h-[284px]'>
                                <img className='absolute top-1/2 left-1/2 -translate-1/2' src={New_4} alt="image" />
                                <div className='absolute z-10 left-8 bottom-8 text-white max-w-[242px]'>
                                    <h3>PlayStation 5</h3>
                                    <p className='text-sm text-[#FAFAFA]/80 py-2'>Black and White version of the PS5 coming out on sale.</p>
                                    <Link to={"/shop"} className='border-b border-b-slate-300'>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default NewArrival