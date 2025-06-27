"use client";

import Appoinment from "@/components/Appoinment";
import Blog from "@/components/Blog";
import CarouselCard from "@/components/CarouselCard/inedx";
import CarouselSlider from "@/components/CarouselSlider";
import Divider from "@/components/Divider";
import FocusArea from "@/components/FocusArea";
import Footer from "@/components/Footer";
import Header from "@/components/Header/page";
import Introduction from "@/components/Introduction";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar/page";
import ParallexBanner from "@/components/ParallexBanner";
import ServiceCount from "@/components/ServiceCount";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  return (
    <div className="bg-white " ref={ref}>
      <Header />
      <Navbar ref={ref} />
      <CarouselSlider />
      <Introduction />
      <Divider />
      <FocusArea />
      <Map />
      <ServiceCount />
      <CarouselCard />
      <Appoinment />
      <ParallexBanner />
      <Blog />
      <Footer/>
    </div>
  );
}
