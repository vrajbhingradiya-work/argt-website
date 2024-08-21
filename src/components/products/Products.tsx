import Image from "next/image";
import React from "react";
import image1 from "@/public/products/01.jpg";
import image2 from "@/public/products/02.jpeg";
import image3 from "@/public/products/03.jpeg";
import image4 from "@/public/products/04.jpg";
import image5 from "@/public/products/05.jpeg";
import image6 from "@/public/products/06.jpeg";
import image7 from "@/public/products/07.jpeg";
import image8 from "@/public/products/08.jpg";
import image9 from "@/public/products/09.jpeg";
import riceImage from "@/public/products/rice.jpeg";
import coconutImage from "@/public/products/coconut.jpeg";
import SlideInFromBottom from "../animations/SlideInFromBottom";

function Products() {
  const productsList = [
    {
      title: "Cotton",
      imgSrc: image1,
    },
    {
      title: "Rice",
      imgSrc: riceImage,
    },
    {
      title: "Coconut",
      imgSrc: coconutImage,
    },
    {
      title: "Peanut",
      imgSrc: image2,
    },
    {
      title: "Coffee Beans",
      imgSrc: image3,
    },
    {
      title: "Raw Fishes",
      imgSrc: image4,
    },
    {
      title: "Vegetables",
      imgSrc: image5,
    },
    {
      title: "Fruits",
      imgSrc: image6,
    },
    {
      title: "Raw Meat",
      imgSrc: image7,
    },
    {
      title: "Brass and Copper Hand Crafted Products",
      imgSrc: image8,
    },
    {
      title: "Spices",
      imgSrc: image9,
    },
  ];
  return (
    <div
      id="services"
      className="max-w-[100vw] overflow-hidden w-full flex justify-center items-center bg-[#F5F6F7] py-16"
    >
      <div className="w-full xl:max-w-[1050px] overflow-hidden flex flex-col gap-8 py-12 items-center justify-center">
        <p className="text-center font-medium text-dark-blue text-3xl md:text-6xl pb-12 ">
          {"PRODUCTS THAT WE EXPORT"}
        </p>
        <div className="w-full grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.map((product: any, index: any) => {
            return (
              <SlideInFromBottom key={index} sequence={index + 2}>
                <ProductCard product={product} />
              </SlideInFromBottom>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;

function ProductCard({ product }: any) {
  return (
    <div className="relative mx-auto w-[320px] sm:w-[250px] lg:w-[350px] text-white ">
      <div className="relative mx-auto w-[320px] sm:w-[250px] lg:w-[350px] ">
        <Image src={product.imgSrc} alt="img" className="object-cover" />
      </div>
      <div className="absolute group flex flex-col items-center justify-center bg-black/50 mx-auto w-[320px] sm:w-[250px] lg:w-[350px] h-full top-0 left-0">
        <span className="text-secondary text-2xl font-semibold px-[20%] text-center group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300 ">
          {product.title.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
