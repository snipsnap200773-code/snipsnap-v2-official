"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slideImages = [
  { src: "/images/hero-1.jpg", alt: "ご新規様20%OFFキャンペーン", link: "#price" },
  { src: "/images/hero-2.jpg", alt: "訪問美容サービス", link: "#services" },
];

export function CampaignSlider() {
  return (
    <section className="w-full py-8 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4"> {/* 幅を少し絞って1枚を際立たせます */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1} // ★PCもスマホも「1枚」ずつ表示
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true} // 1枚ずつなら2枚でもループ可能です
          className="rounded-xl shadow-sm"
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={index} className="relative aspect-[16/9] overflow-hidden rounded-lg bg-white/50">
              <a href={image.link} className="relative block w-full h-full">
                 <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  unoptimized={true} 
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}