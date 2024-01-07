'use client'

import React, { useState } from 'react';

export default function Header_mb_parts() {
    const transparent = {
        color: 'transparent',
    };
    const opacity_1 = {
        opacity: '1',
    };
    const height_100vh = {
        height: '100vh',
    };
    const opacity_1_and_transform = {
        opacity: '1',
        transform: 'translateX(0vw) translateZ(0px)',
    };
    const opacity_1_and_height_100vh = { ...opacity_1, ...height_100vh };

    const headerMobBoxs = () => {
        document.getElementById('headerMob')?.classList.toggle('fadeDown');
        document.getElementById('headerMob')?.classList.toggle('fadeOutUp');

        document.getElementById('headerMobBox')?.classList.toggle('fadeDown');
        document.getElementById('headerMobBox')?.classList.toggle('fadeOut');
        if(document.getElementById('headerMobBox')?.classList.contains('hidden')){//class hiddenを持っているか
        document.getElementById('headerMobBox')?.classList.toggle('hidden');
        }else{
        window.setTimeout(function(){//fadeOutアニメーションが終わったら（0.5s）あとにhiddenを追加
            document.getElementById('headerMobBox')?.classList.toggle('hidden');
        }, 500); 
        }
    };

    const [isVisible, setIsVisible] = useState(true);

    const handleAnimationEnd = () => {
        setIsVisible(false);
    };

    return (
        <div className="block md:hidden">
            <div className="fixed top-4 w-full z-50 ">
                <div className="items-center justify-between px-4 w-full flex">
                    <div id='headerMob' className="fadeDown w-full flex items-center justify-between  backdrop-blur-md border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-full ">
                        <a className="flex items-center space-x-2 flex-shrink-0 relative z-50" href="/">
                            <img alt="Cursor Logo" loading="lazy" width="10" height="10" decoding="async" data-nimg="1" className="transition duration-300 transform blur-0 scale-100 h-5 w-5" style={transparent} src="/assets/img/ScbuilCloud_logo.png" />
                            <span className="text-lg text-[#CCCCCC] font-medium">ScbuilCloud</span>
                        </a>
                        <button onClick={headerMobBoxs}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-white h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
                            </svg>
                        </button>
                    </div>
                    <div id='headerMobBox' className={`fadeOut hidden fixed inset-0 bg-background z-50 flex flex-col justify-center items-center space-y-10  text-xl font-bold text-zinc-600  hover:text-zinc-800 transition duration-200`} onAnimationEnd={handleAnimationEnd} style={opacity_1_and_height_100vh}>
                        <div>
                            <button onClick={headerMobBoxs}>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="absolute right-8 top-6 h-5 w-5 text-white/[0.64]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"></path>
                                    <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
                                </svg>
                            </button>
                        </div>
                        <a className="relative" href="/pricing">
                            <span className="block text-white/[0.64]" style={opacity_1_and_transform}>Pricing </span>
                        </a>
                        <a className="relative" href="/features">
                            <span className="block text-white/[0.64]" style={opacity_1_and_transform}>Features </span>
                        </a>
                        <a target="__blank" rel="noopener noreferrer" href="https://github.com/getcursor/cursor" className="relative">
                            <span className="block text-white/[0.64]" style={opacity_1_and_transform}>GitHub </span>
                        </a>
                        <a target="__blank" rel="noopener noreferrer" href="https://forum.cursor.sh" className="relative">
                            <span className="block text-white/[0.64]" style={opacity_1_and_transform}>Forum </span>
                        </a>
                        <a target="__blank" rel="noopener noreferrer" href="https://anysphere.co" className="relative">
                            <span className="block text-white/[0.64]" style={opacity_1_and_transform}>Careers </span>
                        </a>
                        <a className="relative" href="/blog">
                            <span className="block text-white/[0.64]" style={opacity_1_and_transform}>Blog </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};