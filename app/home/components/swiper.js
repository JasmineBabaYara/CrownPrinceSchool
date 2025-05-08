'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const initiatives = [
  {
    title: 'African Culture day',
    description: 'Students celebrate African Culture Day by proudly dressing in traditional attire to showcase their heritage.',
    image: '/images/carousel1.jpg',
  },
  {
    title: 'Worship wednesdays',
    description: 'Every Wednesday, students come together for uplifting worship and reflection sessions.',
    image: '/images/carousel2.jpg',
  },
  {
    title: 'Swimming Sessions',
    description: 'Students enjoy fun and skill-building swimming sessions as part of our extracurricular activities.',
    image: '/images/carousel3.jpg',
  },
  {
    title: 'Arts & Expression',
    description: 'Creative arts and crafts sessions allow students to express themselves through hands-on projects.',
    image: '/images/carousel4.jpg',
  },
  {
    title: 'physical education',
    description: 'Physical education sessions promote fitness, teamwork, and healthy habits through fun and active games.',
    image: '/images/carousel5.jpg',
  },
];

export default function InitiativeCarousel() {
  return (
    <div className="mx-auto px-4 py-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="initiative-swiper"
      >
        {initiatives.map((item, index) => (
          <SwiperSlide key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative w-full h-64">
              <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#280250] capitalize">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
