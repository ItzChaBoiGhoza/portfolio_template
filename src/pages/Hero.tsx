import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import '../index.css';

import Navbar from '../components/Navbar';

const Hero = () => {
    const [showContent, setShowContent] = useState(false);

    const fadeIn = showContent ? 'opacity-100' : 'opacity-0';

    return (
        <header>
            <div className={`transition-all duration-1000 ${fadeIn}`}>
                <Navbar />
            </div>
            <div className="grid grid-flow justify-items-center mt-[40vh]">
                <div className="text-[65px]">
                    <TypeAnimation sequence={[
                        '', 1000,
                        'ALWAYS CURIOUS, ALWAYS LEARNING', 1000, () => setShowContent(true)
                    ]}
                    wrapper="h1"
                    cursor={false}
                    speed={40}
                    preRenderFirstString={false}
                    repeat={0}
                    />
                    {/* <h1 className="text-[65px] text-(--h1-color) text-center">CODE WITH PURPOSE</h1> */}
                </div>
                <div className={`transition-all duration-1000 ${fadeIn}`}>
                    <h3 className="text-[45px] text-(--h3-color) text-center">QUALITY OVER QUANTITY</h3>
                </div>
            </div>
            <div className={`transition-all duration-700 delay-500 ${fadeIn}`}>
                {/* <div className="flex justify-center mt-[25px]">
                    <a href="" className="mx-3">
                        <svg className="w-[35px] h-[35px] text-(--svg-base-color) hover:text-(--base-color) hover:scale-135 cursor-pointer transition duration-700 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                        </svg>
                    </a>
                    <a href="" className="mx-3">
                        <svg className="w-[35px] h-[35px] text-(--svg-base-color) hover:text-(--base-color) hover:scale-135 cursor-pointer transition duration-700 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                        </svg>
                    </a>
                </div> */}            
                <div className="flex flex-1 justify-center mt-5">
                    <a href="#">
                        <svg className="w-11 h-11 text-(--svg-base-color) animate-pulse-scale cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className={`transition-all duration-700 delay-700 ${fadeIn}`}>
                <div className="grid grid-flow justify-items-center mt-[25vh] animate-bounce">
                    <p className="mb-3 text-[20px] text-(--base-color) opacity-15 text-center">scroll down</p>
                    <svg className="w-8 h-8 text-(--base-color) opacity-15" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 14-4-4m4 4 4-4"/>
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Hero;