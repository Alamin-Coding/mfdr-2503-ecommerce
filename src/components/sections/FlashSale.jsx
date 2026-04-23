import React from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import Section from "../Section";
import Container from "../Container";
import { v4 as uuidv4 } from "uuid";

import { ProductData } from "../../data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button";

const FlashSale = () => {
  return (
    <Section className="pt-32">
      <Container>
        <div className="border-b border-b-border pb-15">
          <div className="grid grid-cols-[auto_1fr_auto] gap-4 mb-10 relative">
            <SectionHeader subTitle={"Today's"} title={"Flash Sales"} />
            <div className="flex gap-4 items-end ml-[87px]">
              <div className="space-y-2">
                <p className="text-sm block leading-[1]">Days</p>
                <p className="block font-bold text-[32px] leading-[1]">23</p>
              </div>
              <span className="text-[40px] leading-tight text-secondary">:</span>
              <div className="space-y-2">
                <p className="text-sm block leading-[1]">Days</p>
                <p className="block font-bold text-[32px] leading-[1]">23</p>
              </div>
              <span className="text-[40px] leading-tight text-secondary">:</span>
              <div className="space-y-2">
                <p className="text-sm block leading-[1]">Days</p>
                <p className="block font-bold text-[32px] leading-[1]">23</p>
              </div>
              <span className="text-[40px] leading-tight text-secondary">:</span>
              <div className="space-y-2">
                <p className="text-sm block leading-[1]">Days</p>
                <p className="block font-bold text-[32px] leading-[1]">23</p>
              </div>
              <span className="text-[40px] leading-tight text-secondary">:</span>
            </div>

            <div className="flex items-center justify-end gap-5 absolute bottom-0 right-3 z-10">
              <span className="group cursor-pointer bg-F5F5F5 hover:bg-red-500 w-8.5 h-8.5 rounded-full flex items-center justify-center">
                <ChevronLeft className="group-hover:text-white" />
              </span>
              <span className="group cursor-pointer bg-F5F5F5 hover:bg-red-500 w-8.5 h-8.5 rounded-full flex items-center justify-center">
                <ChevronRight className="group-hover:text-white" />
              </span>
            </div>

          </div>
          <div className="grid grid-cols-4 gap-6">
            {ProductData?.slice(0, 4).map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>
          <div className="flex justify-center pt-6">
            <Button>View All Products</Button>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default FlashSale;
