import { Carousel, } from "@/components/common/carousel/Carousel";
import Header from "@/components/common/header/Header";
import Image from "next/image";
import imgBanner from "../../public/images/new.webp";
import { CarouselMutiple } from "@/components/common/carousel/MultipleCarousel";
import CategoryCollection from "@/components/common/homepage/CategoryCollection";
import { AboutComponent } from "@/components/features/motion/homepage/about";
import { SkillSet } from "@/components/features/motion/homepage/skillset";
import { Project } from "@/components/features/motion/homepage/project";

export default function Home() {
  const images = [imgBanner, imgBanner,imgBanner,imgBanner,imgBanner];
  const sentence1="Welcome to my Portfolio!"
  const sentence2="React Developer"
  

  return (
    <div className="">
        <AboutComponent/>
        <SkillSet/>
        <Project/>
    </div>
  );
}
