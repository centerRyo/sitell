import React from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import defaultClassNames from './dup-slider-default.m.scss'

SwiperCore.use([Autoplay, Pagination])

type Props = {
  classNames?: string,
}

export const DomSlider: React.FC<Props> = ({ classNames }) => {
  const styles = classNames || defaultClassNames

  const links = [
    {
      to: '/',
      src: '/img/topic_popular.png',
      alt: 'トピック_人気の要約',
    },
    {
      to: '/',
      src: '/img/topic_latest.png',
      alt: 'トピック_最新の要約',
    },
    {
      to: '/item/1',
      src: '/img/topic_recommended.png',
      alt: 'トピック_おすすめの要約',
    },
  ]

  return (
    <div className={styles.root}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          'delay': 5000,
          'disableOnInteraction': false,
        }}
        pagination={{
          'clickable': true,
          bulletClass: `swiper-pagination-bullet ${styles.bullet}`,
          bulletActiveClass: `swiper-pagination-bullet-active ${styles.bulletActive}`
        }}
        loop={true}
      >
        {links.map((link, index) => (
          <SwiperSlide key={index}>
            <Link to={link.to}>
              <img src={link.src} alt={link.alt} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
