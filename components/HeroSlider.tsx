"use client";
import cx from "classnames";
import Container from "./Container";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import Link from "next/link";
import DocumentIcon from "./Icons/Document";
import { generateAnchorLink } from "@/helpers/general";

type Specs = {
  key: string;
  value: string;
};

export type Slide = {
  title: string;
  description: string;
  background: string;
  image: string;
  cta?: {
    title: string;
    link: string;
  };
  specs: Specs[];
};

type HeroSliderProps = {
  slides: Slide[];
};

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleInView(i: number) {
    setActiveIndex(i);
  }

  return (
    <div className="relative w-full" style={{}}>
      <div className="sticky flex flex-col justify-center items-center top-0 h-screen z-10">
        {slides.map((beer, i) => (
          <div
            key={i}
            className={cx(
              "h-screen absolute z-0 top-0 left-0 w-full rounded-b-4xl transition-all bg-cover duration-500",
              activeIndex === i ? "opacity-100" : "opacity-0 delay-150"
            )}
            style={{
              backgroundImage: `url("${beer.background}")`,
            }}
          />
        ))}
        <Container className="absolute flex justify-between w-full z-20">
          <div className=" rounded-4xl shadow-card backdrop-blur-sm space-y-6 p-4 bg-white/20 bg-gradient-to-b from-transparent via-transparent to-black/20">
            {slides.map((beer, i) => (
              <Link
                href={`#${beer.title}`}
                key={i}
                className={cx(
                  " flex relative z-10 items-end justify-center rounded-2xl size-20  transition duration-300",
                  activeIndex === i
                    ? "bg-[#EDEDED] bg-opacity-100"
                    : " bg-black bg-opacity-20 hover:bg-opacity-100 hover:bg-[#EDEDED]"
                )}
              >
                <img
                  src={beer.image}
                  alt="beer"
                  className="h-[120%] object-contain"
                />
              </Link>
            ))}
          </div>

          <div className="relative max-w-lg flex items-center w-full">
            {slides.map((beer, i) => (
              <div
                key={i}
                className={cx(
                  "absolute transition-all duration-500",
                  i === activeIndex ? "opacity-100" : " opacity-0"
                )}
              >
                <h2
                  id={generateAnchorLink(beer.title)}
                  className="text-[52px] font-neutraface text-white font-black lg:leading-tight"
                >
                  {beer.title}
                </h2>
                <div
                  className="font-medium text-white [&>p+p]:mt-4 mt-4"
                  dangerouslySetInnerHTML={{ __html: beer.description }}
                ></div>
                {beer.specs && beer.specs.length > 0 && (
                  <div className="grid auto-cols-auto grid-flow-col border text-white border-white rounded-2xl mt-8">
                    <div className=" divide-y divide-white border-r">
                      {beer.specs.map((spec, i) => (
                        <p key={i} className=" text-xl px-4 py-2 font-semibold">
                          {spec.key}
                        </p>
                      ))}
                    </div>
                    <div className="divide-y divide-white">
                      {beer.specs.map((spec, i) => (
                        <p key={i} className=" text-xl px-4 py-2 font-semibold">
                          {spec.value}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {beer.cta && (
                  <Link
                    href={beer.cta.link}
                    className="backdrop-blur-sm inline-flex items-center text-xl font-semibold bg-white/10 mt-8 py-4 px-4 rounded-2xl text-white"
                    style={{
                      boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    {beer.cta.title}
                    <DocumentIcon className="size-6 ml-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Container className="lg:pl-64 relative z-10 pointer-events-none -mt-[90vh]">
        {slides.map((beer, i) => (
          <BeerContainer
            key={i}
            beer={beer}
            i={i}
            onVisibilityChange={(i) => handleInView(i)}
          />
        ))}
      </Container>
    </div>
  );
}

function BeerContainer({
  beer,
  i,
  onVisibilityChange,
}: {
  beer: Slide;
  i: number;
  onVisibilityChange: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.8,
    once: false,
  });

  useEffect(() => {
    if (isInView) {
      onVisibilityChange(i);
    }
  }, [isInView]);

  return (
    <div
      id={`${beer.title}`}
      ref={ref}
      className="h-screen flex relative z-10 items-center snap-start"
    >
      <img src={beer.image} alt="beer" className="h-[80%]" />
    </div>
  );
}
