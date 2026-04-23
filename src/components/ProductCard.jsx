import { Eye } from "lucide-react";
import cardImage from "../assets/product-1.png"

import { Star, Heart } from "./icons";

const ProductCard = ({ product, ourProducts=false }) => {
  const { price, oldPrice, title, image, discount, thumbnail } = product;
  return (
    <div>
      <div className="bg-F5F5F5 p-3 group/parent relative parent h-62.5 flex items-center justify-center rounded overflow-hidden">
        <img src={ thumbnail ? thumbnail :cardImage} alt="image" />
        
        {discount && <div className="absolute top-3 left-3 z-10 w-[55px] h-[26px] flex items-center justify-center text-white text-xs bg-secondary rounded">
          {discount}%
        </div>}

        <div className="flex flex-col gap-3 absolute right-3 top-3 z-10">
          <span className="cursor-pointer bg-white hover:bg-red-500 group w-8.5 h-8.5 rounded-full flex items-center justify-center">
            <Heart className="group-hover:stroke-white" stroke="black" />
          </span>
          <span className="cursor-pointer bg-white hover:bg-red-500 group w-8.5 h-8.5 rounded-full flex items-center justify-center">
            <Eye className="group-hover:stroke-white" stroke="black" />
          </span>
        </div>
        <button className="transition-all duration-300 opacity-0 h-10 group-hover/parent:opacity-100 bg-black text-white w-full absolute -bottom-1 left-0 group-hover/parent:bottom-0">
          Add To Cart
        </button>
      </div>
      {!ourProducts ? (
        <div className="p-4">
        <h4 className="font-medium line-clamp-1">{title}</h4>
        <p className="pt-2 pb-3">
           <span className="text-secondary">${price}</span> ${oldPrice}
        </p>

          
        <div>
          <ul className="flex gap-2 items-center">
            <li>
              <Star className="text-gold" />
            </li>
            <li>
              <Star className="text-gold" />
            </li>
            <li>
              <Star className="text-gold" />
            </li>
            <li>
              <Star className="text-gold" />
            </li>
            <li>
              <Star className="text-gold" />
            </li>
          </ul>
        </div>
        </div>
      ) : (
        <div className="p-4 space-y-1">
          <h4 className="font-medium line-clamp-1">{title}</h4>
          <div className="flex items-center gap-1">
            <p className="pt-0.5">
              <span className="text-secondary">${price}</span> ${oldPrice}
            </p>
            <ul className="flex gap-2 items-center">
              <li>
                <Star color="#FFAD33" />
              </li>
              <li>
                <Star color="#FFAD33"  />
              </li>
              <li>
                <Star color="#FFAD33" />
              </li>
              <li>
                <Star color="#FFAD33" />
              </li>
              <li>
                <Star color="#FFAD33" />
              </li>
            </ul>
          </div>
      </div>
      )}
    </div>
  );
};

export default ProductCard;
