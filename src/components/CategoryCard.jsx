// for uniqe id import uuid
import { v4 as uuidv4 } from 'uuid';

// import all icon component for cetagoriescard
import {Heart} from "../components/icons/Heart";
import { Computer, Gamepad } from 'lucide-react';

const CetagoriesCard = () => {

  // cetagoriescard data list 
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
  ];

  return (
    <div className="grid grid-cols-6 gap-7.5">
      {/* use maping from carddata list */}
      {cardData.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer flex flex-col items-center justify-center hover:bg-secondary group p-4 w-42.5 h-33.75 border border-border rounded hover:bg-black transition"
        >
          <div className=" group-hover:stroke-F5F5F5 stroke-black transition group-hover:text-white">
            {item.icon}
          </div>

          <span className="block mt-2 group-hover:text-F5F5F5 transition">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CetagoriesCard;