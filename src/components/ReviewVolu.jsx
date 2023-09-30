



import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles
// import Slider1 from "../assets/slider1.jpg";
// import Slider2 from "../assets/slider2.png";
// import Slider3 from "../assets/slider3.jpg";
// import Tagline from "../assets/tagline.png";
// import Slider1 from "../assets/dege.png";
// import Slider2 from "../assets/IMG_7523.png";
// import Slider4 from "../assets/amc.jpg";

// import Slider3 from "../assets/WhatsApp Image 2023-07-05 at 4.07.49 PM.jpeg";
// import Tagline from "../assets/WhatsApp Image 2023-07-07 at 11.04.26 PM.jpeg";

const ReviewVolu = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className="w-full ">
            <Slider {...settings}>
                <div>
                    <div class="flex items-center justify-center mb-4">
                        <div class=" content-around  block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            <figure class="flex flex-col backdrop-blur-sm bg-white/30   items-center bg-zinc-200justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                                    <p class="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center space-x-3">


                                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Yogesh Mahadik </div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        {/* 1card */}


                        <div class=" content-around   block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            <figure class="flex flex-col items-center bg-zinc-200justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">222Very easy this was to integrate</h3>
                                    <p class="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center space-x-3">


                                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Mahesh Yadav </div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        {/* 1_2card */}

                        <div class=" content-around   block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            <figure class="flex flex-col items-center bg-zinc-200justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">222Very easy this was to integrate</h3>
                                    <p class="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center space-x-3">


                                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Somnath Shewale </div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    {/* 1_2_3_card */}
                </div>
                {/* first */}

                <div>
                    <div class="flex items-center justify-center mb-4">
                        <div class=" content-around   block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            <figure class="flex flex-col items-center bg-zinc-200justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">222Very easy this was to integrate</h3>
                                    <p class="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center space-x-3">


                                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Subhash zambare </div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        {/* 1card */}


                        <div class=" content-around   block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            <figure class="flex flex-col items-center bg-zinc-200justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">222Very easy this was to integrate</h3>
                                    <p class="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center space-x-3">


                                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Vijya Shewale </div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        {/* 1_2card */}

                        <div class=" content-around   block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            <figure class="flex flex-col items-center bg-zinc-200justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">222Very easy this was to integrate</h3>
                                    <p class="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center space-x-3">


                                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Raghavdas chaudhari</div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    {/* 1_2_3_card */}
                </div>
                {/* last one */}


                <div>
                    <div class="flex items-center justify-center mb-4">
                        <div class=" content-around   block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            <figure class="flex flex-col items-center bg-zinc-200justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                                    <p class="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center space-x-3">


                                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Govind Hirve</div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        {/* 1card */}


                        <div class=" content-around   block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            <figure class="flex flex-col items-center bg-zinc-200justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                                    <p class="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center space-x-3">


                                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Savita Sutar </div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        {/* 1_2card */}

                        <div class=" content-around   block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                            <figure class="flex flex-col items-center bg-zinc-200justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">3Very easy this was to integrate</h3>
                                    <p class="my-4">If you care for your time, I hands down would go with this."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center space-x-3">


                                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                                        <div>Shardha shewale </div>
                                        <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    {/* 1_2_3_card */}
                </div>
                {/* last */}




















            </Slider>
        </div>
    );
};

export default ReviewVolu;

