import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {FaStar} from "react-icons/fa6"
import NewProducr from './NewProducr';

//import InstagramPic1 from "src\assets\close-up-arrangement-modern-vases.jpg"
//import { Avatar } from 'flowbite-react';
//import proPic from "../src/assets/profile.jpg";




const HomePage = () => {
  return (
    <>
      <Layout title="LuxeMART - Best Offers">
        <section className='home-wrapper-1 py-2 position-relative'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 col-md-8'>
              <div className='main-banner position-relative'>
                <img
                  src="/images/Supermarket_web.jpg"
                  className=" rounded-3"
                  alt='main banner' style={{ width: '120%', marginLeft: '-60px', height: '600px' }}
                />
                <div className='container-xl'>
                  <div className='main-banner-content position-absolute '>
                    <h3>Fresh & Healthy <br /> Organic Food</h3>
                    <h5>Sale up to <span className="discount">30% OFF</span></h5>
                     <Link to='/shop-route' className='button button-outline-success'>Shop Now</Link>
                  </div>
                  </div>
                </div>
              </div>
            
            <div className='col-10 col-md-4'>
            <div className='small-banner-container'>
              <div className='small-banner position-relative p-3'>
                <img
                  src="/images/Supermarket_web5.jpg"
                  className="img-fluid rounded-1"
                  alt='small banner' style={{ height: '275px', width: '500px' }}
                />
               
              </div>
              <div className='small-banner position-relative p-2'>
                <img
                  src="/images/Supermarket_web3.jpg"
                  className="img-fluid rounded-1"
                  alt='small banner' style={{ height: '275px', width: '500px' }}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='home-wrapper-2 py-2 margin-wrapper-2' >
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12 '>
                <div className='services d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center gap-10'>
                    <img src='images/service-02.png' alt="services"/>
                    <div>
                      <h6>Daily Surprise Offers</h6>
                      <p className='mb-0'>Save upto 25% off</p>
                    </div>
                  </div>

                  <div className='d-flex align-items-center gap-10'>
                    <img src='images/service-03.png' alt="services"/>
                    <div>
                      <h6>Support 24/7</h6>
                      <p className='mb-0'>Shop with an expert</p>
                    </div>
                  </div>

                  <div className='d-flex align-items-center gap-10'>
                    <img src='images/service-04.png' alt="services"/>
                    <div>
                      <h6>Affordable Prices</h6>
                      <p className='mb-0'>Get Factory Default Price</p>
                    </div>
                  </div>

                  <div className='d-flex align-items-center gap-10'>
                    <img src='images/service-01.png' alt="services"/>
                    <div>
                      <h6>Secure Payments</h6>
                      <p className='mb-0'>100% Protected Payment</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
        </section>
      <section style={{ marginTop: '40px' }}>
      <div className='my-12 px-4 lg:px-24 '>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Featured Products</h2>
    </div>
      </section>
      <section style={{ marginTop: '20px' }}>
      <div className='my-12 px-4 lg:px-24 '>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Top Category</h2>
    </div>
      </section>
      <section style={{ marginTop: '20px' }}>
      <NewProducr/>
      </section>
      
      <section style={{ marginTop: '20px' }}>
      <div className='my-12 px-4 lg:px-24 '>
        <h2 className='text-5xl font-bold text-right mb-10 leading-snug'>Client Testimonial</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit error cupiditate minima dolorum debitis, 
                        provident doloribus. Possimus est maiores et autem, aliquam aspernatur obcaecati libero, dolorem necessitatibus 
                        consequatur placeat unde.</p>
                        
                        <img src="/images/profile.jpg" alt='Instagram Pic 1' 
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }} />


                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                    </div>
      
            
                </div>

        
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit error cupiditate minima dolorum debitis, 
                        provident doloribus. Possimus est maiores et autem, aliquam aspernatur obcaecati libero, dolorem necessitatibus 
                        consequatur placeat unde.</p>
                   
                        <img src="/images/profile.jpg" alt='Instagram Pic 1' 
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }} />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                    </div>
      
            
                </div>

        
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit error cupiditate minima dolorum debitis, 
                        provident doloribus. Possimus est maiores et autem, aliquam aspernatur obcaecati libero, dolorem necessitatibus 
                        consequatur placeat unde.</p>
                   
                        <img src="/images/profile.jpg" alt='Instagram Pic 1' 
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }} />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                    </div>
      
            
                </div>

        
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit error cupiditate minima dolorum debitis, 
                        provident doloribus. Possimus est maiores et autem, aliquam aspernatur obcaecati libero, dolorem necessitatibus 
                        consequatur placeat unde.</p>
                   
                        <img src="/images/profile.jpg" alt='Instagram Pic 1' 
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }} />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                    </div>
      
            
                </div>

        
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
      </section>
      <section>
      <div className='my-12 px-4 lg:px-24 ' style={{ marginTop: '40px' }}>
        <h2 className='text-xm font-bold text-center mb-10 leading-snug'>Follow us on Instagram</h2>
        <div className='flex justify-center items-center gap-4'>
       
        <img src="/images/close-up-arrangement-modern-vases.jpg" alt='Instagram Pic 1' style={{ width: '140px', height: '150px', objectFit: 'cover' }} />
        <img src="/images/close-up-fresh-coconut-with-oranges-pineapple.jpg" alt='Instagram Pic 2' style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <img src="/images/close-up-view-praline-chocolate-box.jpg" alt='Instagram Pic 3' style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <img src="/images/healthy-fruits-textures-collage.jpg" alt='Instagram Pic 4' style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <img src="/images/model-career-kit-still-life.jpg" alt='Instagram Pic 5' style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <img src="/images/side-view-ripe-fresh-vegetables-colorful-bell-peppers-tomatoes-garlic-broccoli-green-onion-black-background.jpg" alt='Instagram Pic 6' style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <img src="/images/close-up-arrangement-modern-vases.jpg" alt='Instagram Pic 1' style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <img src="/images/close-up-fresh-coconut-with-oranges-pineapple.jpg" alt='Instagram Pic 2' style={{ width: '140px', height: '150px', objectFit: 'cover' }} />
        <img src="/images/close-up-view-praline-chocolate-box.jpg" alt='Instagram Pic 3' style={{ width: '140px', height: '150px', objectFit: 'cover' }} />
        <img src="/images/healthy-fruits-textures-collage.jpg" alt='Instagram Pic 4' style={{ width: '140px', height: '150px', objectFit: 'cover' }} />
    
            </div>
            
    </div>

      </section>
      
      
      </Layout>
      

    </>
  );
}

export default HomePage;
