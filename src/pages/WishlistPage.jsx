import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Section from "../components/Section";
import WishlistCard from "../components/WishlistCard";

import { BestSellingProductsData } from "../data";

const Wishlist = () => {
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

          <div className="grid grid-cols-4 gap-6">
            {BestSellingProductsData.slice(0, 4).map((product) => (
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
              {BestSellingProductsData.slice(0, 4).map((product) => (
                <WishlistCard key={product.id} product={product} justForYou={true} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Wishlist;
