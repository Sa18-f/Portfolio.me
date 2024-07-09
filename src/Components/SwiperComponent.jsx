import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

const SwiperComponent = () => {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        loading="lazy"
                        className="rounded-lg object-cover w-full h-[500px]"
                        src="https://i.ibb.co/WP5DtWb/FB-IMG-1720548882598-1.jpg"
                        alt="image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        loading="lazy"
                        className="rounded-lg object-cover w-full h-[500px]"
                        src="https://i.ibb.co/PCbsSXV/Whats-App-Image-2024-07-10-at-00-12-18-b33ccd88.jpg"
                        alt="image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        loading="lazy"
                        className="rounded-lg object-cover w-full h-[500px]"
                        src="https://i.ibb.co/h1KKvZC/Whats-App-Image-2024-07-04-at-02-22-53-994f0702.jpg"
                        alt="image"
                    />
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img
                        loading="lazy"
                        className="rounded-lg"
                        src="https://i.ibb.co/YhcQTkC/IMG-9554.jpg"
                        alt="image"
                    />
                </SwiperSlide> */}
                <SwiperSlide>
                    <img
                        loading="lazy"
                        className="rounded-lg object-cover w-full h-[500px]"
                        src="https://i.ibb.co/m6XB524/Whats-App-Image-2024-07-10-at-00-12-18-07f61000.jpg"
                        alt="image"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperComponent;