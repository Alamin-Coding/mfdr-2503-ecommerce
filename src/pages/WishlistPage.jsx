import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Section from "../components/Section";
import WishlistCard from "../components/WishlistCard";

import { BestSellingProductsData } from "../data";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const [Item1, setItem1] = useState([]);
  const [Item2, setItem2] = useState([]);
  const [Item3, setItem3] = useState([]);
  const { wishlist } = useSelector((state) => state.wishlist);
  const categoryArray = Array.from(
    new Set(wishlist.map((item) => item.category)),
  );

  console.log(categoryArray);

  useEffect(() => {
    if (categoryArray.length > 0) {
      fetch(`https://dummyjson.com/products/category/${categoryArray[0]}`)
        .then((res) => res.json())
        .then((data) => setItem1(data.products[0]));
    }
    if (categoryArray.length > 1) {
      fetch(`https://dummyjson.com/products/category/${categoryArray[2]}`)
        .then((res) => res.json())
        .then((data) => setItem2(data.products[2]));
    }
    if (categoryArray.length > 2) {
      fetch(`https://dummyjson.com/products/category/${categoryArray[2]}`)
        .then((res) => res.json())
        .then((data) => setItem3(data.products[3]));
    }
  }, []);

  console.log(Item1);
  console.log(Item2);
  console.log(Item3);

  return (
    <Section className="pb-35">
      <Container>
        <div className="">
          <div className="flex justify-between items-center gap-6 pt-20 pb-15">
            <p>Wishlist ({4})</p>
            <Button outlate={true} className="">
              Move All To Bag
            </Button>
          </div>

          {wishlist?.length < 1 && (
            <p className="p-50 text-xl">Item not found!</p>
          )}
          <div className="grid grid-cols-4 gap-6">
            {wishlist?.map((product) => (
              <WishlistCard key={product.id} product={product} />
            ))}
          </div>

          {/* Just for you */}
          <div className="pt-0">
            <div className="flex justify-between items-center gap-6 pt-20 pb-15">
              <div className="space-y-6">
                <h3 className="flex items-center gap-4">
                  <div className="h-10 w-5 rounded bg-secondary"></div>
                  <span className="text-[20px] text-black leading-none">
                    Just For You
                  </span>
                </h3>
              </div>
              <Button outlate={true} className="">
                Move All To Bag
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {Item1 && <WishlistCard product={Item1} justForYou={true} />}
              {Item2 && <WishlistCard product={Item2} justForYou={true} />}
              {Item3 && <WishlistCard product={Item3} justForYou={true} />}
              {/* <WishlistCard product={Item4} justForYou={true} /> */}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Wishlist;
