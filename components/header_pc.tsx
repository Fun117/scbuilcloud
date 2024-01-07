'use client'

import React, { useState } from 'react';

export default function Header_pc_parts() {
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
    // <div className="fadeDown fixed inset-x-0 top-4 z-50 w-full">
    return (
        <div className="hidden md:block">
            <div className="fadeDown fixed inset-x-0 top-4 z-50 w-full bg-[your-background-color] backdrop-blur-md">
                <div className="flex justify-between text-white max-w-7xl gap-4 mx-auto border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-lg w-[95%] inset-x-0 backdrop-blur-md z-50">
                    <a className="flex items-center space-x-2 flex-shrink-0 relative z-50" href="/">
                    <img alt="Cursor Logo" loading="lazy" width="10" height="10" decoding="async" data-nimg="1" className="transition duration-300 transform blur-0 scale-100 h-5 w-5" style={transparent} src="/assets/img/ScbuilCloud_logo.png" />
                        <span className="text-lg text-[#CCCCCC] font-medium">ScbuilCloud</span>
                    </a>
                    <div className="flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 py-2 space-x-6 text-sm items-center justify-center px-6 font-medium overflow-hidden">
                        <a target="__blank" rel="noopener noreferrer" href="https://scratch.mit.edu/users/ScbuilCloud/" className="relative group bg-transparent hover:text-white/[0.64] transition duration-200">Scratch</a>
                        <a target="__blank" rel="noopener noreferrer" href="https://github.com/Fun117/scbuilcloud" className="relative group bg-transparent hover:text-white/[0.64] transition duration-200">GitHub</a>
                        <a target="__blank" rel="noopener noreferrer" href="https://discord.com/users/990984460365365258" className="relative group bg-transparent hover:text-white/[0.64] transition duration-200">Discord</a>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <a href="/api/auth/login" className="text-sm font-medium text-white text-opacity-60 hover:text-opacity-80 transition">Sign in</a>
                        <button className="group relative rounded-full p-px text-[0.8125rem] font-semibold leading-6 shadow-xl shadow-zinc-950 text-white">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

// <span className="absolute inset-0 overflow-hidden rounded-full">
//     <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
// </span>
// <div className="relative z-10 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-900 py-1 px-4 ring-1 ring-white/10 flex items-center space-x-2"><span>Download</span></div>
// <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>