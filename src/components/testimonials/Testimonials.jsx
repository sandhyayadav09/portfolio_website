import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar : AVTR1,
    name : 'E-Shop Website',
    review : 'This is an web appliaction which is used to buy and sell variety of products. Users can surf thought different categories of products and add them to cart according to their interest. Frontend technologies used in making this project are HTML, bootstrap and CSS and backend technologies include Django and SQLite.This application is fully interactive with salient key Features. Users can review the product based on their experience by adding images and comments. Authentication is done by Password Hashing. Users can find the product by applying filters also. '
  },
  {
    avatar : AVTR2,
    name : 'To-Do-List',
    review : 'Lorem, ipsum dolor 😫sit amet consectetur adipisicing elit. Dicta voluptatibus neque ea. Quo consectetur blanditiis perspiciatis maxime voluptates? Rerum sapiente quisquam iste, error hic optio fugit deleniti commodi accusamus praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto,                                                                                          ex autem vel molestiae repellat corporis quam at veritatis aliquam iste quasi atque nobis vero quibusdam accusantium excepturi nam commodi.'
  },
  {
    avatar : AVTR3,
    name : 'TimeStamp Website',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus neque ea. Quo consectetur blanditiis perspiciatis maxime voluptates? Rerum sapiente quisquam iste, error hic optio fugit deleniti commodi accusamus praesentium? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus neque ea. Quo consectetur blanditiis perspiciatis maxime voluptates? Rerum sapiente quisquam iste, error hic optio fugit deleniti commodi accusamus praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto, ex autem vel molestiae repellat corporis quam at veritatis aliquam iste quasi atque nobis vero quibusdam accusantium excepturi nam commodi.'
  },
  {
    avatar : AVTR4,
    name : 'Tina snow',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus neque ea. Quo consectetur blanditiis perspiciatis maxime voluptates? Rerum sapiente quisquam iste, error hic optio fugit deleniti commodi accusamus praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto, ex autem vel molestiae repellat corporis quam at veritatis aliquam iste quasi atque nobis vero quibusdam accusantium excepturi nam commodi.'
  }
]
const Testimonials = () => {
  return (
   <section id='testimonials'>
    <h5>My work</h5>
    <h2>Project Description</h2>

    <Swiper className="container testimonials__container"
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
    >{
      data.map(({avatar, name,review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="Avatar one" />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
    
          )
      })
    }
    </Swiper>
   </section>
  )
}

export default Testimonials