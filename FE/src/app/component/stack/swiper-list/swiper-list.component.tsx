import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
import React, { useRef, useState } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import useWindowSize from '~/app/hook/useWindow';

interface SwiperListProps {
    props?: any
    title?: string
    children?: any
}

const SwiperList: FunctionComponent<SwiperListProps> = ({ title, children }) => {
    const windowSize = useWindowSize()
    return (
        <>
            <div css={cssSwiper}>
                <Swiper
                    slidesPerView={windowSize.width < 739 ? 1 : 2}
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {children}
                </Swiper>

            </div>
        </>
    )
}

export default SwiperList

const cssSwiper = css`
padding: 12px 0;
border-radius: 8px;
height: 100%;
width: 100%;
background-color: var(--color-white);
.title{
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: rgb(39, 39, 42);
}

`