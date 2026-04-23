import React from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import Section from "../Section";
import Container from "../Container";
import { v4 as uuidv4 } from "uuid";

import { BestSellingProductsData } from "../../data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button";
import {Link} from "react-router"

const BestSellingProducts = () => {
  return (
    <Section className="pt-32">
      <Container>
        <div className="border-b border-b-border pb-15">
          <div className="grid grid-cols-[auto_auto] gap-4 mb-10 relative items-end">
            <SectionHeader subTitle={"This Month"} title={"Best Selling Products"} />

            <div className="flex justify-end">
              <Button TagName={Link} to="/shop">View All</Button>
            </div>

          </div>
          <div className="grid grid-cols-4 gap-6">
            {BestSellingProductsData?.slice(0, 4).map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default BestSellingProducts;
