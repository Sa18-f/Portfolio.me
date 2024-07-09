

const About = () => {
    return (
        <div id="about" className="my-12 text-start flex lg:flex-row flex-col-reverse justify-between items-center gap-6 mx-auto container p-2">
            {/* <div>
                <img className="rounded-xl lg:w-[400px] transition-transform hover:scale-110" src="https://i.ibb.co/hCp3Tp5/Whats-App-Image-2024-07-04-at-15-24-14-9c3fa3ed.jpg" alt="" />
            </div> */}
            <div className="w-[75%] lg:w-1/3 " style="opacity: 1; transform: none;"><div className="swiper swiper-cards swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper"><div className="swiper-wrapper" style="cursor: grab; transition-duration: 0ms;"><div className="swiper-slide swiper-slide-prev" style="width: 384px; z-index: 4; transform: translate3d(calc(-7.25% + 0px), 0px, -100px) rotateZ(-2deg) scale(1); transition-duration: 0ms;"><img loading="lazy" className="rounded-lg object-cover " src="https://i.ibb.co/fC163x1/me.jpg" alt="image"/><div className="swiper-slide-shadow" style="opacity: 1; transition-duration: 0ms;"></div></div><div className="swiper-slide swiper-slide-visible swiper-slide-active" style="width: 384px; z-index: 5; transform: translate3d(-384px, 0px, 0px) rotateZ(0deg) scale(1); transition-duration: 0ms;"><img loading="lazy" className="rounded-lg object-cover " src="https://i.ibb.co/YNkyfNF/hike.jpg" alt="image"/><div className="swiper-slide-shadow" style="opacity: 0; transition-duration: 0ms;"></div></div><div className="swiper-slide swiper-slide-next" style="width: 384px; z-index: 4; transform: translate3d(calc(7.25% - 768px), 0px, -100px) rotateZ(2deg) scale(1); transition-duration: 0ms;"><img loading="lazy" className="rounded-lg object-cover " src="https://i.ibb.co/HzNXktP/bike.jpg" alt="image"/><div className="swiper-slide-shadow" style="opacity: 1; transition-duration: 0ms;"></div></div><div className="swiper-slide" style="width: 384px; z-index: 3; transform: translate3d(calc(13% - 1152px), 0px, -200px) rotateZ(4deg) scale(1); transition-duration: 0ms;"><img loading="lazy" className="rounded-lg object-cover " src="https://i.ibb.co/YhcQTkC/IMG-9554.jpg" alt="image"/><div className="swiper-slide-shadow" style="opacity: 1; transition-duration: 0ms;"></div></div><div className="swiper-slide" style="width: 384px; z-index: 2; transform: translate3d(calc(17.25% - 1536px), 0px, -300px) rotateZ(6deg) scale(1); transition-duration: 0ms;"><img loading="lazy" className="rounded-lg object-cover " src="https://i.ibb.co/5BrGfZp/stand.jpg" alt="image"/><div className="swiper-slide-shadow" style="opacity: 1; transition-duration: 0ms;"></div></div></div></div></div>
            <div className="">
                {/* <h1 className="text-4xl font-medium text-white"> Hi There! I’m Md. Shoriful Islam</h1> */}
                <div className="flex gap-7 items-center flex-wrap text-[#0788FF]"><div><span className="blue-text-gradient font-bold lg:text-[44px] text-[30px]"><span>21</span></span><br /><span className="text-gray-400 font-semibold lg:text-normal text-sm">years old</span></div><div><span className="blue-text-gradient font-bold lg:text-[44px] text-[30px]"><span>10</span>+</span><br /><span className="text-gray-400 font-semibold lg:text-normal text-sm">month’s web dev </span></div><div><span className="blue-text-gradient font-bold lg:text-[44px]  text-[30px]"><span>578</span></span><br /><span className="text-gray-400 font-semibold lg:text-normal text-sm">Total Commits</span></div></div>
                {/* <h3 className="text-2xl font-medium text-[#0788FF] mt-3">Mern Stack Web Developer</h3> */}
                <p className="mt-5 text-[18px] max-w-[650px] leading-[30px] text-start text-white" style={{ opacity: 1, transform: 'none' }}>
                    I’m a skilled software developer with experience in <span className="font-bold text-xl">React</span> and <span className="font-bold text-xl">JavaScript</span>, and expertise in frameworks like <span className="font-bold text-xl">Node.Js</span> and <span className="font-bold text-xl">Express.Js</span>. I’m a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let’s work together to bring your ideas to life!
                </p>

                <div className="text-[#8FA3B8] text-lg font-semibold mt-3">
                    <div className="grid lg:grid-cols-[auto_auto_2fr] grid-cols-[2fr_2fr_auto] gap-x-4 gap-y-2">
                        <span>Birthday</span><span>:</span><span>February 20, 2003</span>
                        <span>From</span><span>:</span><span>Noakhali, Chottogram, Bangladesh</span>
                        <span>SSC</span><span>:</span><span>Department of Science at Begumganj Govt. Technical <br /> High School with GPA-4.94</span>
                        <span>Diploma In Engineering</span><span>:</span><span>Department of Computer Science and Technology at <br /> Feni Computer Institute.</span>
                        <span>Language</span><span>:</span><span>Bangla, English</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;