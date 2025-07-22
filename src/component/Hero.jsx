import paypal from '../assets/image/Paypal.jpg'
import hero2 from '../assets/image/hero2.jpg'
import individuals from '../assets/image/individuals.jpg'
import business from '../assets/image/business.jpg'
import partners from '../assets/image/partners.jpg'
import main from '../assets/image/main.png'
import two from '../assets/image/two.png'
import third from '../assets/image/third.png'
import arrow from '../assets/image/arrow.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Hero = () => {
    return (
        <div>

            <div className='w-full  h-fit overflow-hidden bg-cover bg-center hidden md:block' style={{ backgroundImage: `url(${paypal})` }}>
                <div className=' my-[200px]  text-center w-full'>
                    <h1 className='w-full  font-[Helvetica Neue] text-[33px] pb-[20px] mt-8  text-center text-[#FFFFFF]'>The simpler, safer way to pay and get paid.</h1>
                    <div> <button className='w-[298px]  h-[50px]  bg-[#0070BA] mt-8   shadow-md text-[15px] font-semibold rounded-full border-white align-middle text-[#ffffff] '>Sign Up For Free</button></div>
                    <div className='mt-8 '>
                        <span className='text-center text-[13px] font-[Helvetica Neue]   font-[400]  h-[22.5px]  text-white '>
                            Own a business? Open a Business account.
                        </span>
                    </div>
                </div>
            </div>


            <div className='w-full  h-full overflow-hidden bg-cover bg-center block md:hidden ' style={{ backgroundImage: `url(${hero2})` }}>
                <div className=' md:my-[150px] my-[100px] text-center w-full'>
                    <h1 className='w-full  font-[Helvetica Neue] text-[33px] pb-[20px] mt-8  text-center text-[#FFFFFF]'>The simpler, safer way to pay and get paid.</h1>
                    <div> <button className='w-[298px]  h-[50px]  bg-[#0070BA] mt-8   shadow-md text-[15px] font-semibold rounded-full border-white align-middle text-[#ffffff] '>Sign Up For Free</button></div>
                    <div className='mt-8 '>
                        <span className='text-center text-[13px] font-[Helvetica Neue]   font-[400]  h-[22.5px]  text-white '>
                            Own a business? Open a Business account.
                        </span>
                    </div>
                </div>
            </div>

            <div className='bg-[#F5F7FA] md:w-full w-[470px]  h-[60px] text-center overflow-hidden flex flex-col justify-center'>
                <span className=' align-middle  text-[#4A4A4A]'> Have a query? Click here to reach Help Centre</span>
            </div>
            <div className='font-Helvetica Neue text-[35px] font-[400] text-center ml-8  h-[40px] md:w-fit w-[324px] md:ml-[450px] align-middle text-[#2C2E2F] md:mt-[90px] mt-[30px]'>
                PayPal is for everyone who pays or gets paid.
            </div>

            <div className='md:mt-12 mt-[200px]  justify-center md:block hidden'>
                <div className='flex justify-center gap-9'>
                    <div className='grid justify-center'>
                        <div>
                            <div className='flex justify-center'> <img src={individuals} alt="" /> </div>
                            <div className='font-Helvetica Neue font-[400] text-[27px] h-[35px] mt-[20px] tracking-normal align-middle text-center'>
                                Individuals
                            </div>
                            <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px] '>Find out why we have more than 200M</div>
                            <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px]'>active accounts worldwide.</div>
                        </div>

                        <div> <button className='broder border-[1px] border-[#0070BA] pt-[13px] pr-[64.33px] pl-[63.67px] pb-[16.5px] rounded-full text-[#0070BA] mt-[30px]'>Learn More</button></div>
                    </div>


                    <div className='ml-[50px] grid justify-center'>
                        <div>
                            <div className='flex justify-center'><img src={business} alt="" /></div>
                            <div className='font-Helvetica Neue font-[400] text-[25px] h-[35px] mt-[20px] tracking-normal align-middle text-center'>Businesses</div>
                            <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px]'>Join more than 7 million businesses</div>
                            <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px]'>around the world offering PayPal.</div>
                        </div>
                        <div><button className='broder border-[1px] border-[#0070BA] pt-[13px] pr-[64.33px] pl-[63.67px] pb-[16.5px] rounded-full text-[#0070BA] mt-[30px]'>Learn More</button></div>
                    </div>


                    <div className='ml-[50px] grid justify-center'>
                        <div className='flex justify-center'><img src={partners} alt="" /></div>
                        <div className='font-Helvetica Neue font-[400] text-[25px] h-[35px] mt-[20px] tracking-normal align-middle text-center'>Partners and developers</div>
                        <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px]'>Work with PayPal to offer your customers</div>
                        <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px]'>world class payment solutions.</div>
                        <button className='broder border-[1px] border-[#0070BA] pt-[13px] pr-[64.33px] pl-[63.67px] pb-[16.5px] rounded-full text-[#0070BA] mt-[30px]'>
                            Learn More</button>
                    </div>
                </div>



            </div>


            <div className='md:mt-12 mt-[200px] mb-[50px] flex justify-center md:hidden  '>
                <Swiper
                    modules={[Navigation, Pagination,]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='grid justify-center'>
                            <div>
                                <div className='flex justify-center'> <img src={individuals} alt="" /> </div>
                                <div className='font-Helvetica Neue font-[400] text-[27px] h-[35px] mt-[20px] tracking-normal align-middle text-center'>
                                    Individuals
                                </div>
                                <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px] '>Find out why we have more than 200M</div>
                                <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px]'>active accounts worldwide.</div>
                            </div>

                            <div> <button className='broder border-[1px] border-[#0070BA] pt-[13px] pr-[64.33px] pl-[63.67px] pb-[16.5px] rounded-full text-[#0070BA] mt-[30px]'>Learn More</button></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='ml-[50px] grid justify-center'>
                            <div>
                                <div className='flex justify-center'><img src={business} alt="" /></div>
                                <div className='font-Helvetica Neue font-[400] text-[25px] h-[35px] mt-[20px] tracking-normal align-middle text-center'>Businesses</div>
                                <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px]'>Join more than 7 million businesses</div>
                                <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px]'>around the world offering PayPal.</div>
                            </div>
                            <div><button className='broder border-[1px] border-[#0070BA] pt-[13px] pr-[64.33px] pl-[63.67px] pb-[16.5px] rounded-full text-[#0070BA] mt-[30px]'>Learn More</button></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='ml-[50px] grid justify-center'>
                            <div className='flex justify-center'><img src={partners} alt="" /></div>
                            <div className='font-Helvetica Neue font-[400] text-[25px] h-[35px] mt-[20px] tracking-normal align-middle text-center'>Partners and developers</div>
                            <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px]'>Work with PayPal to offer your customers</div>
                            <div className='font-Helvetica Neue text-[13.99px] text-center mt-[6px]'>world class payment solutions.</div>
                            <button className='broder border-[1px] border-[#0070BA] pt-[13px] pr-[64.33px] pl-[63.67px] pb-[16.5px] rounded-full text-[#0070BA] mt-[30px]'>
                                Learn More</button>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>

            <div className='bg-[#F7F9FA] w-full pb-[100px]'>
                <div>
                    <div className='font-Helvetica Neue text-[33px] md:w-full w-[304px] font-[400] h-[50px] text-center align-middle text-[#2C2E2F] md:mt-[90px] md:ml-0 ml-[50px] md:p-[100px]'> PayPal connects buyers and sellers.</div>
                    <div className='flex justify-center  md:mt-5 mt-[70px] '>
                        <div className='font-bold text-[12px] text-center text-[#666666] underline  '>For buyers</div>
                        <div className='font-bold text-[12px] text-center ml-7 text-[#0070BA]'>For sellers</div>

                    </div>

                    <div  className=' gap-20 mt-[70px] md:hidden '>
                    <Swiper
                        modules={[Navigation, Pagination,]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className='grid justify-center'>
                            <img src={main} alt="" />
                            <div className='flex '>

                                <div className='border border-[#C0C0C0] w-[46px] h-[46.48px] text-center pt-2   rounded-full'>   1</div>
                                <div className='mt-2 ml-2'>
                                    <div className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] align-middle text-[#2C2E2F]'>
                                        Sign up with just an email
                                    </div>
                                    <div className='font-Helvetica text-[13.99px] h-[22.49px] align-middle text-[#2C2E2F]'>
                                        address and password.
                                    </div>
                                </div>
                            </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='grid justify-center'>
                            <div>
                                <img src={two} alt="" />
                            </div>

                            <div className='flex'>
                                <div className='border border-[#C0C0C0] w-[46px] h-[46.48px] text-center pt-2   rounded-full'>2</div>
                                <div className='font-Helvetica Neue text-[13.99px] h-[22.49px] align-middle text-[#2C2E2F] mt-3 ml-2'>Securely add your cards.</div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                             <div className='grid justify-center'>
                            <div>
                                <img src={third} alt="" />
                            </div>
                            <div>
                                <div className='flex'>
                                    <div className='border border-[#C0C0C0] w-[46px] h-[46.48px] text-center pt-2   rounded-full'>3</div>
                                    <div>
                                        <div className='font-Helvetica Neue text-[13.99px] h-[22.49px] align-middle text-[#2C2E2F] mt-2 ml-2'>
                                            Use the PayPal button to check
                                        </div>
                                        <div className='font-Helvetica Neue text-[13.99px] h-[22.49px] align-middle text-[#2C2E2F] mt-1 ml-2'>
                                            out with just an email address
                                        </div>
                                        <div className='font-Helvetica Neue text-[13.99px] h-[22.49px] align-middle text-[#2C2E2F] mt-1 ml-2'>and password.</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        </SwiperSlide>

                        
                    </Swiper>
                    </div>

                    <div className='mt-[70px] md:block hidden'>
                        <div className='flex justify-center gap-20 '>
                        
                        <div>
                            <img src={main} alt="" />
                            <div className='flex '>

                                <div className='border border-[#C0C0C0] w-[46px] h-[46.48px] text-center pt-2   rounded-full'>   1</div>
                                <div className='mt-2 ml-2'>
                                    <div className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] align-middle text-[#2C2E2F]'>
                                        Sign up with just an email
                                    </div>
                                    <div className='font-Helvetica text-[13.99px] h-[22.49px] align-middle text-[#2C2E2F]'>
                                        address and password.
                                    </div>
                                </div>
                            </div>

                        </div>


                        
                        <div className='mt-[50px]'>
                            <img src={arrow} alt="" />
                        </div>

                        <div>
                            <div>
                                <img src={two} alt="" />
                            </div>

                            <div className='flex'>
                                <div className='border border-[#C0C0C0] w-[46px] h-[46.48px] text-center pt-2   rounded-full'>2</div>
                                <div className='font-Helvetica Neue text-[13.99px] h-[22.49px] align-middle text-[#2C2E2F] mt-3 ml-2'>Securely add your cards.</div>
                            </div>
                        </div>
                        
                        
                        <div className='mt-[50px]'>
                            <img src={arrow} alt="" />
                        </div>
                

                        <div>
                            <div>
                                <img src={third} alt="" />
                            </div>
                            <div>
                                <div className='flex'>
                                    <div className='border border-[#C0C0C0] w-[46px] h-[46.48px] text-center pt-2   rounded-full'>3</div>
                                    <div>
                                        <div className='font-Helvetica Neue text-[13.99px] h-[22.49px] align-middle text-[#2C2E2F] mt-2 ml-2'>
                                            Use the PayPal button to check
                                        </div>
                                        <div className='font-Helvetica Neue text-[13.99px] h-[22.49px] align-middle text-[#2C2E2F] mt-1 ml-2'>
                                            out with just an email address
                                        </div>
                                        <div className='font-Helvetica Neue text-[13.99px] h-[22.49px] align-middle text-[#2C2E2F] mt-1 ml-2'>and password.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>


                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='broder border-[1px] border-[#0070BA] pt-[13px] pr-[64.33px] pl-[63.67px] pb-[16.5px] rounded-full  text-[#0070BA] mt-[30px]] '>
                        Learn More</button>

                </div>
            </div>
            <div>

            </div>

            <div className='bg-[#003087]  w-full '>
                <div className='font-Helvetica Neue font-[400] text-[37px] pt-[90.17px]  h-[50px] text-center align-middle text-[#FFFFFF]'>
                    Join 200M active PayPal accounts worldwide.
                </div>
                <div className=' flex justify-center p-[70px] mt-12 md:hidden'>              
                     <Swiper
                    modules={[Navigation, Pagination,]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    
                    <SwiperSlide> 
                        <div >
                        <div className='font-Helvetica Neue text-[26px] h-[35px] mt-2 align-middle text-[#FFFFFF]'>
                            Safer and protected
                        </div>
                        <div className='grid mt-2'>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>Shop with peace of mind. We don't share</span>
                            <span className='font-Helvetica Neue text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>your full financial information with</span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>sellers. And PayPal Buyer Protection</span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>covers your eligible purchases if they</span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>don't show up or match their description.</span>
                            <span className='font-Helvetica Neue text-[13px] h-[22.5px] mt-5 font-bold leading-none align-middle text-[#FFFFFF]'>More about security</span>
                        </div>
                    </div>
                      </SwiperSlide>
                    <SwiperSlide>
                         <div className='ml-[50px]'>
                        <div className='font-Helvetica Neue text-[26px] h-[35px] align-middle mt-2 text-[#FFFFFF]'>
                            Across devices, Worldwide
                        </div>
                        <div className='grid mt-2'>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>With just one account, you can shop at </span>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>millions of merchants around the </span>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>world, and pay for goods or services</span>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]' >almost anywhere. Use any of your</span>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>devices to manage your account on</span>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>the go with the PayPal app.</span>
                            <span className='font-Helvetica Neue text-[13px] h-[22.5px] mt-5 font-bold leading-none align-middle text-[#FFFFFF]'>Get the mobile app</span>

                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='ml-[50px]'>
                        <div className='font-Helvetica Neue text-[26px] h-[35px] align-middle mt-2 text-[#FFFFFF]'>
                            Mostly free, always upfront
                        </div>
                        <div className='grid mt-2'>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>
                                It's free to open a PayPal account and buy </span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>something using PayPal unless it involves a</span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>currency conversion. There may be fees for</span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>other transactions.</span>
                            <span className='font-Helvetica Neue text-[13px] h-[22.5px] mt-[20px] font-bold leading-none align-middle text-[#FFFFFF]'>More about fees</span>
                        </div>
                    </div>

                    </SwiperSlide>
                    

                </Swiper>
                </div>
 

                <div className='p-[70px] mt-9 md:block hidden'>
                    <div className='flex justify-center'>
                    <div >
                        <div className='font-Helvetica Neue text-[26px] h-[35px] mt-2 align-middle text-[#FFFFFF]'>
                            Safer and protected
                        </div>
                        <div className='grid mt-2'>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>Shop with peace of mind. We don't share</span>
                            <span className='font-Helvetica Neue text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>your full financial information with</span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>sellers. And PayPal Buyer Protection</span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>covers your eligible purchases if they</span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>don't show up or match their description.</span>
                            <span className='font-Helvetica Neue text-[13px] h-[22.5px] mt-5 font-bold leading-none align-middle text-[#FFFFFF]'>More about security</span>
                        </div>
                    </div>

                    <div className='ml-[50px]'>
                        <div className='font-Helvetica Neue text-[26px] h-[35px] align-middle mt-2 text-[#FFFFFF]'>
                            Across devices, Worldwide
                        </div>
                        <div className='grid mt-2'>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>With just one account, you can shop at </span>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>millions of merchants around the </span>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>world, and pay for goods or services</span>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]' >almost anywhere. Use any of your</span>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>devices to manage your account on</span>
                            <span className='font-Helvetica Neue font-[400] text-[14.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>the go with the PayPal app.</span>
                            <span className='font-Helvetica Neue text-[13px] h-[22.5px] mt-5 font-bold leading-none align-middle text-[#FFFFFF]'>Get the mobile app</span>

                        </div>
                    </div>

                    <div className='ml-[50px]'>
                        <div className='font-Helvetica Neue text-[26px] h-[35px] align-middle mt-2 text-[#FFFFFF]'>
                            Mostly free, always upfront
                        </div>
                        <div className='grid mt-2'>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>
                                It's free to open a PayPal account and buy </span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>something using PayPal unless it involves a</span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>currency conversion. There may be fees for</span>
                            <span className='font-Helvetica Neue text-[13.99px] h-[22.49px] leading-none align-middle text-[#FFFFFF]'>other transactions.</span>
                            <span className='font-Helvetica Neue text-[13px] h-[22.5px] mt-[20px] font-bold leading-none align-middle text-[#FFFFFF]'>More about fees</span>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            <div className='grid justify-center bg-[#F7F9FA] w-full '>
                <div className='font-Helvetica Neue text-[26px] h-[35px] align-middle p-[60px]'>
                    Sign up and get started.
                </div>

                <button className='font-Helvetica Neue font-bold text-[14px]  h-[22.5px] text-center  align-middle text-[#FFFFFF] bg-[#0070BA] broder border-[3px] border-[#0070BA] pt-[10px] md:px-[70px] px-[30px] pb-[30px]    m-[50px] rounded-full '>
                    Get Started</button>

            </div>

            <div>
                <div className='md:grid flex justify-between md:ml-[400px]'>
                    <div className='md:flex grid md:justify-around md:mt-[50px] mt-[30px] md:ml-0 ml-5 '>
                        <div className='md:flex grid gap-8'>
                            <span className='font-Helvetica Neue font-bold text-[12px] h-[26px] align-middle text-[#666666]'>Help and Contact</span>
                            <span className='font-Helvetica Neue font-bold text-[12px] h-[26px] align-middle text-[#666666] md:ml-[40px]'>Fees</span>
                            <span className='font-Helvetica Neue font-bold text-[13px] h-[26px] align-middle text-[#666666] md:ml-[40px]'>Security</span>
                            <span className='font-Helvetica Neue font-bold text-[12px] h-[26px] align-middle text-[#666666] md:ml-[40px]'>Features</span>
                            <span className='font-Helvetica Neue font-bold text-[12px] h-[26px] align-middle text-[#666666] md:ml-[40px]'>Shop</span>
                        </div>

                        <div className='font-Helvetica Neue font-bold text-[12px] h-[26px] align-middle text-[#666666] md:ml-[40px] md:mt-0 mt-[60px]'>
                            Arabic
                        </div>
                    </div>
                    <div className='md:flex grid justify-between md:mt-[30px] md:mr-0 mr-5 mt-[50px] '>

                        <div className='md:flex grid'>
                            <span className='font-Helvetica Neue text-[12px] h-[26px] align-middle'>About</span>
                            <span className='font-Helvetica Neue text-[11px] h-[26px] align-middle md:ml-[30px]'>Newsroom</span>
                            <span className='font-Helvetica Neue text-[10px] h-[26px] align-middle md:ml-[30px]'>Jobs</span>
                            <span className='font-Helvetica Neue text-[11px] h-[26px] align-middle md:ml-[30px]'>Developers</span>
                            <span className='font-Helvetica Neue text-[12px] h-[26px] align-middle md:ml-[30px]'>Partners </span>
                        </div>

                        <div className='md:block hidden'>
                            <span className='font-Helvetica Neue text-[12px] h-[26px] align-middle'>© 1999-2023</span>
                            <span className='font-Helvetica Neue text-[11px] h-[26px] align-middle ml-[10px] '>Accessibility</span>
                            <span className='font-Helvetica Neue text-[11px] h-[26px] align-middle ml-[10px]'>Privacy</span>
                            <span className='font-Helvetica Neue text-[11px] h-[26px] align-middle ml-[10px]'>Legal</span>
                        </div>
                    </div>
                </div>

                <div className='md:ml-[400px] mt-[20px] ml-[50px]'>
                    <div className='md:w-fit w-[335px] text-[12px] font-Helvetica Neue h-[18px] align-middle text-center '>
                        PayPal Pte. Ltd. (“3PL”) has applied for a license under the Singapore
                        Payment Services Act (“PS Act”) with the Monetary Authority of Singapore. During this statutory
                    </div>

                    <div className='md:w-fit w-[335px] text-[11px] font-Helvetica Neue h-[18px] align-middle md:mt-4 text-center mt-[50px]'>
                        transitional period, 3PL is operating under
                        an exemption from holding a license and is allowed to continue to provide specific payment services.
                    </div>
                </div>

                <div className='md:hidden block mt-10  text-center'>
                    <span className='font-Helvetica Neue text-[12px] h-[26px] align-middle'>© 1999-2023</span>
                    <span className='font-Helvetica Neue text-[11px] h-[26px] align-middle ml-[10px] '>Accessibility</span>
                    <span className='font-Helvetica Neue text-[11px] h-[26px] align-middle ml-[10px]'>Privacy</span>
                    <span className='font-Helvetica Neue text-[11px] h-[26px] align-middle ml-[10px]'>Legal</span>
                </div>

            </div>

        </div>
    )



}
export default Hero