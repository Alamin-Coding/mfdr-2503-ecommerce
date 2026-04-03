import { Eye } from "lucide-react";

import { Star, Heart } from "./icons";

const ProductCard = ({ product }) => {
  const { price, oldPrice, title, image } = product;
  return (
    <div>
      <div className="bg-F5F5F5 p-3 relative group">
        <img src={image} alt="image" />

        <div className="flex flex-col gap-3 absolute right-0 top-0 z-10">
          <span className="bg-white w-8.5 h-8.5 rounded-full flex items-center justify-center">
            <Eye />
          </span>
          <span className="bg-white w-8.5 h-8.5 rounded-full flex items-center justify-center">
            <Heart color="rgba(0,0,0,0.5)" stroke="green" />
          </span>
        </div>
        <button className="invisible group-hover:visible bg-black text-white w-full absolute bottom-0 left-0">
          Add To Cart
        </button>
      </div>
      <div className="p-4">
        <h4>{title}</h4>
        <p>
          $ <span>{price}</span> ${oldPrice}
        </p>

        <div>
          <ul>
            <li>
              <Star className="text-gold" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
