import React from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import Section from "../Section";
import Container from "../Container";
import { v4 as uuidv4 } from "uuid";

import { ProductData } from "../../data";

const FlashSale = () => {
  return (
    <Section className="pt-32">
      <Container>
        <div className="grid grid-cols-[auto_1fr_auto] gap-4">
          <SectionHeader subTitle={"Today's"} title={"Flash Sales"} />
          <div>timer</div>
          <div>arrow</div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {ProductData?.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FlashSale;
