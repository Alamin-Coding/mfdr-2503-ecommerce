import { Link } from "react-router"

const menus = [
    {
        id:1,
        text: "Woman’s Fashion",
        submenu: [
            {
                id: "sub-1",
                text: "Sub menu -1",
                link: "/"
            }
        ],
        link:"/"
    },
    {
        id:2,
        text: "Men’s Fashion",
        submenu: [
            {
                id: "sub-2",
                text: "Sub menu -2",
                link: "/"
            }
        ],
        link:"/"
    },
    {
        id:3,
        text: "Electronics",
        link:"/"
    },
    {
        id:4,
        text: "Home & Lifestyle",
        link:"/"
    },
    {
        id:5,
        text: "Medicine",
        link:"/"
    },
    {
        id:6,
        text: "Sports & Outdoor",
        link:"/"
    },
    {
        id:7,
        text: "Baby’s & Toys",
        link:"/"
    },
    {
        id:8,
        text: "Groceries",
        link:"/"
    },
    {
        id:9,
        text: "Health & Beauty",
        link:"/"
    },
]

import banner_1 from "../../assets/banner-1.jpg"
import { ChevronRight } from "lucide-react"



const Banner = () => {
  return (
    <div className="grid grid-cols-[233px_1fr]">
        <div className="pt-10">
            <SideMenu/>
        </div>
        <div className="border-l border-l-border pl-11.25 pt-10">
            <div>
                <img src={banner_1} alt="image" />
            </div>
        </div>
    </div>
  )
}

const SideMenu = ()=> {
    return (
        <div>
            <ul className="space-y-3">
                {menus.map((menu)=> {
                    return <li  key={menu.id} className="flex justify-between items-center gap-3">
                        <Link to={menu.link}>{menu.text}</Link>
                        {(menu?.submenu?.length > 0) && <ChevronRight />}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Banner