import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";




const Testimonials = () => {
    const [reviews, SetReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => SetReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle subHeading="What Our Client Say" heading="Testimonials"></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews?.map(item => <SwiperSlide key={item._id}>

                        <div className="flex flex-col items-center m-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                readOnly
                            />
                            <p>{item.details}</p>
                            <h1 className="text-yellow-500 text-xl">{item.name}</h1>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonials;