

import SectionHeader from "../SectionHeader";
import Section from "../Section";
import Container from "../Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoryCard from "../CategoryCard";
import CetagoriesCard from "../CategoryCard";


const BrowseByCategory = () => {
  return (
    <Section className="pt-32 pb-15">
      <Container>
        <div className="grid grid-cols-[auto_1fr_auto] gap-4 mb-10 relative">
          <SectionHeader subTitle={"Categories"} title={"Browse By Category"} />


          <div className="flex items-center justify-end gap-5 absolute bottom-0 right-3 z-10">
            <span className="group cursor-pointer bg-F5F5F5 hover:bg-red-500 w-8.5 h-8.5 rounded-full flex items-center justify-center">
              <ChevronLeft className="group-hover:text-white" />
            </span>
            <span className="group cursor-pointer bg-F5F5F5 hover:bg-red-500 w-8.5 h-8.5 rounded-full flex items-center justify-center">
              <ChevronRight className="group-hover:text-white" />
            </span>
          </div>

        </div>

         <CetagoriesCard/>
        
      </Container>
    </Section>
  );
};

export default BrowseByCategory;
