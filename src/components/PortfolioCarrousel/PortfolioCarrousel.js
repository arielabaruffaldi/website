import SwiperCore, { Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper';

import React, { useState } from 'react';
import styles from './PortfolioCarrousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel]);


const PortfolioCarrousel = ({ trabajos }) => {
    const [itemId, setItemId] = useState(0)

    return (
        <section className={styles.PortfolioCarrousel}>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={(slide) => setItemId(slide.activeIndex)}
                centeredSlides={true}
                mousewheel={{ forceToAxis: true, sensitivity: 0.5 }}
                forceToAxis={true}
            /* onSwiper={(swiper) => console.log(swiper)} */
            >
                {trabajos.map((trabajo, index) => {
                    return (
                        <>
                            <SwiperSlide key={index} >
                                {({ isActive }) => (
                                    <>
                                        <div className={styles.swiperContainer}>
                                            {isActive ?
                                                <>
                                                    <h2 className={styles.titleActive}>{trabajo.title}</h2>
                                                </> :
                                                <h2>{trabajo.title}</h2>
                                            }
                                        </div>
                                    </>
                                )}
                            </SwiperSlide>
                        </>
                    )
                })}
                <div style={{ backgroundImage: `url(${trabajos[itemId].foto})` }} className={styles.divBg}></div>
            </Swiper>
        </section >
    )
}

export default PortfolioCarrousel;