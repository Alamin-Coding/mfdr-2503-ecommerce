import Checkouting from "../Checkouting"
import Section from "../Section";

import LCD_Monitor from "../../assets/lcd-monitor.png";
import H1_Gamepad from "../../assets/h1-gamepad.png";
import PP_1 from "../../assets/Bkash.png";
import PP_2 from "../../assets/Visa.png";
import PP_3 from "../../assets/Mastercard.png";
import PP_4 from "../../assets/Nagad.png";




const Bill = () => {
    return (
        <Section className="pt-45.25">

            <div><Checkouting className="py-12" title={"Billing Details"} /></div>
            <Section className="grid grid-cols-[auto_1fr] gap-43.25 pt-12 pb-20">
                <div className="pb-8 pr-43.25">

                    <div className="py-3">

                        <div className="text-sm text-gray-400 leading-relaxed">
                            <h3 >First Name <span className="text-red-500 opacity-40">*</span></h3>

                        </div>
                        <form action="" className="bg-F5F5F5 h-[50px] w-117.5">
                            <input type="text" />
                        </form>
                    </div>
                    <div className="py-3">

                        <div className="text-sm text-gray-400 leading-relaxed">
                            <h3 >Company Name</h3>

                        </div>
                        <form action="" className="bg-F5F5F5 h-[50px] w-117.5">
                            <input type="text" />
                        </form>
                    </div>
                    <div className="py-3">

                        <div className="text-sm text-gray-400 leading-relaxed">
                            <h3 >Street Address <span className="text-red-500 opacity-40">*</span></h3>

                        </div>
                        <form action="" className="bg-F5F5F5 h-[50px] w-117.5">
                            <input type="text" />
                        </form>
                    </div>
                    <div className="py-3">

                        <div className="text-sm text-gray-400 leading-relaxed">
                            <h3 >Apartment, floor, etc. (optional)</h3>

                        </div>
                        <form action="" className="bg-F5F5F5 h-[50px] w-117.5">
                            <input type="text" />
                        </form>
                    </div>
                    <div className="py-3">

                        <div className="text-sm text-gray-400 leading-relaxed">
                            <h3 >Town/City <span className="text-red-500 opacity-40">*</span></h3>

                        </div>
                        <form action="" className="bg-F5F5F5 h-[50px] w-117.5">
                            <input type="text" />
                        </form>
                    </div>
                    <div className="py-3">

                        <div className="text-sm text-gray-400 leading-relaxed">
                            <h3 >Phone Number <span className="text-red-500 opacity-40">*</span></h3>

                        </div>
                        <form action="" className="bg-F5F5F5 h-[50px] w-117.5">
                            <input type="text" />
                        </form>
                    </div>
                    <div className="py-3">

                        <div className="text-sm text-gray-400 leading-relaxed">
                            <h3 >Email Addresss <span className="text-red-500 opacity-40">*</span></h3>

                        </div>
                        <form action="" className="bg-F5F5F5 h-[50px] w-117.5">
                            <input type="text" />
                        </form>
                    </div>
                    <div className="py-3">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="w-4 h-4 color-red-500" />
                            <span className="text-sm text-gray-400">Save this information for next time</span>
                        </label>
                    </div>

                </div>

                <div className=" pb-45.5 max-w-130">

                    <div>
                        <div className="grid grid-cols-[1fr_auto_5fr] gap-4 text-end py-8 items-center">

                            <img src={H1_Gamepad} alt="photo" />
                            <p className="text-start">H1 Gamepad</p>
                            <p>$650</p>
                        </div>
                        <div className="grid grid-cols-[1fr_auto_5fr] gap-4 text-end items-center">

                            <img src={LCD_Monitor} alt="photo" />
                            <p className="text-start">LCD Monitor</p>
                            <p>$1100</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="py-8">
                        <div className="grid grid-cols-[1fr_auto] py-2">
                            <p>Subtotal:</p>
                            <p>$1750</p>
                        </div>
                        <div className="py-2">
                            <div className="grid grid-cols-[1fr_auto] border-t-1 border-b-1 border-b-rgba(0,0,0,0.4) border-t-rgba(0,0,0,0.4) py-3">
                                <p>Shipping:</p>
                                <p>Free</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[1fr_auto] py-2 ">
                            <p>Total:</p>
                            <p>$1750</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_auto]">
                        <div>
                            <label>
                                <input type="radio" name="p" /> Bank
                            </label>
                        </div>
                        <div className="grid grid-cols-4">
                            <img src={PP_1} alt="" />
                            <img src={PP_2} alt="" />
                            <img src={PP_3} alt="" />
                            <img src={PP_4} alt="" />
                        </div>
                    </div>
                    <div className="py-8">
                        <label>
                            <input type="radio" name="p" defaultChecked /> Cash on delivery
                        </label>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                        <form action="" className="border-1 ">
                            <input type="text" placeholder="Coupon Code" className="py-3 px-3 " />
                        </form>
                        <button className="bg-red-500 text-white py-3 px-6 rounded items-center">Apply Coupon</button>
                    </div>
                    <div>
                        <button className="bg-red-500 text-white py-3 px-6 rounded items-center w-48 mt-8">Place Order</button>
                    </div>
                </div>

            </Section>
        </Section>
    )
}

export default Bill;