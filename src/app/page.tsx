'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import Header_pc_parts from '../../components/header_pc';
import Header_mb_parts from '../../components/header_mb';

export default function Home() {
  const color_transparent = {
    color:'transparent',
  };
  const transparent_none = {
    transparent: 'none',
  };
  const transform_none = {
    transform: 'none',
  };
  const opacity_1 = {
      opacity: '1',
  };
  const color_transparent_width_120_height_70 = {
    color:'transparent',
    width:'120px',
    height:'70px',
  };
  const color_transparent_width_150_height_70 = {
    color:'transparent',
    width:'150px',
    height:'70px',
  };
  const mix_blend_mode_overlay = {
    mixBlendMode:'overlay',
  };
  const transform_translateZ = {
    transform:'translateY(100px) translateZ(0px)',
  };
  if(typeof window !== 'undefined'){
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      const element = document.getElementById('transform_translateZ_scroll');
      var scY = (-300 + ( y / 1.5));
      if (element) {
        if(scY > 300){
          element.style.transform = `translateY(300px) translateZ(0px)`;
        }else{
          element.style.transform = `translateY(${scY}px) translateZ(0px)`;
        };
      };
    });
  };

  return (
    <body>
      <Header_pc_parts />
      <Header_mb_parts />
      <div>
        <main className="min-h-screen antialiased bg-background overflow-hidden relative __className_76c1ff">
          <div id='transform_translateZ_scroll' style={transform_translateZ}>
            <img alt="left gradient" loading="lazy" width="1023" height="1052" decoding="async" data-nimg="1" className="transition duration-1000 absolute left-0 select-none pointer-events-none bg-transparent border-none" style={color_transparent} srcSet="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fleft-gradient%401x.png&w=1080&q=75 1x, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fleft-gradient%401x.png&w=1080&q=75 2x" src="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fleft-gradient%401x.png&w=1080&q=75"/>
            <img alt="left gradient" loading="lazy" width="1023" height="1052" decoding="async" data-nimg="1" className="transition duration-1000 absolute right-0 select-none pointer-events-none bg-transparent border-none" style={color_transparent} srcSet="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fright-gradient%401x.png&w=1080&q=75 1x, https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fright-gradient%401x.png&w=1080&q=75 2x" src="https://cursor.sh/_next/image?url=%2Flanding%2Fgradients%2Fright-gradient%401x.png&w=1080&q=75"/>
          </div>
          <div className=" pt-32 md:pt-48 pb-10 md:pb-24 px-8 relative z-40">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
              <div className="z-50" style={opacity_1}>
                <div className="w-full flex justify-center">

              </div>
              <div>
                <h1 className="__className_2272f2 text-white text-center text-3xl md:text-6xl mb-4 font-bold">Cloud Data Service</h1>
              </div>
              <div>
                <div className="text-center font-medium text-base md:text-lg text-[#FFFFFF]/[.48] mb-8">A cloud service that handles game data synchronization, storage, and management.</div>
              </div>
              <div className="w-full">
                <div className="flex md:flex-row flex-col space-x-0 space-y-4 md:space-y-0 items-center justify-center md:space-x-4 pb-20 w-full relative z-40">
                  <button className="group md:w-fit group w-fit flex justify-center relative rounded-full p-px text-[0.8125rem] font-semibold leading-6 shadow-xl shadow-zinc-950 text-white">
                    <span className="absolute inset-0 overflow-hidden rounded-lg">
                      <span className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>
                    <div className="relative z-10 w-full flex justify-center rounded-lg bg-[#3887FD] bg-opacity-50 hover:bg-opacity-60 transition py-3 px-6 ring-1 items-center space-x-2">
                      <FontAwesomeIcon icon={faCloud} />
                      <span>introduction</span>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 opacity-20 group-hover:opacity-80"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-full opacity-100" style={transform_none}>
              <div className="absolute inset-x-0 z-[42] w-full sm:w-[80%] md:w-[50%] mx-auto rounded-md backdrop-blur-sm bg-[#526E89]/[0.2] mt-10 text-sm md:mt-20 flex items-center ">
                <input placeholder="search" className="border-blue-200 border border-opacity-50 rounded-md pl-4 py-3 bg-transparent w-full text-white focus:outline-none focus:shadow-xl focus:shadow-blue-500/[0.1] placeholder:text-xs sm:placeholder:text-base text-sm sm:text-lag md:text-lg" name="input" defaultValue="" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex space-x-2 mr-4">

                  </div>
                </div>
                <img alt="Product Preview" loading="lazy" width="1200" height="600" decoding="async" data-nimg="1" className="invisible sm:visible mx-auto [mask-image:linear-gradient(to_bottom,white,white,transparent)] transition duration-1000 h-full relative z-40 opacity-100" style={color_transparent} srcSet="https://cursor.sh/_next/image?url=%2Flanding%2Fhero%2Fhero-secondary%403x.webp&w=1200&q=75 1x, https://cursor.sh/_next/image?url=%2Flanding%2Fhero%2Fhero-secondary%403x.webp&w=1200&q=75 2x" src="https://cursor.sh/_next/image?url=%2Flanding%2Fhero%2Fhero-secondary%403x.webp&w=1200&q=75" />
              </div>
            </div>
          </div>
          <div className="pb-10 text-white max-w-7xl mx-auto overflow-hidden">
            <h2 className="text-center text-lg md:text-lg font-medium text-[#FFFFFF]/[0.54] max-w-[16rem] md:max-w-none mx-auto">Credit</h2>
            <div className="relative py-10 md:py-12">
              <div className="max-w-6xl mx-auto flex flex-wrap justify-center sm:justify-center items-center">
                <img alt="Shopify" draggable="false" loading="lazy" width="100" height="70" decoding="async" data-nimg="1" className="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style={color_transparent_width_120_height_70} srcSet="https://cursor.sh/_next/image?url=%2Flanding%2Flogos%2Fopenai-white.png&w=128&q=75 1x, https://cursor.sh/_next/image?url=%2Flanding%2Flogos%2Fopenai-white.png&w=128&q=75 2x" src="https://cursor.sh/_next/image?url=%2Flanding%2Flogos%2Fopenai-white.png&w=128&q=75" />
                <img alt="samsung" draggable="false" loading="lazy" width="150" height="70" decoding="async" data-nimg="1" className="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style={color_transparent_width_120_height_70} srcSet="https://cdn.discordapp.com/attachments/1193494938353147944/1193519396447068170/newimg_202417203927506.png?ex=65ad028e&is=659a8d8e&hm=c0fd93ecad702fc296f3a107ac7493c3e597a8c266bedc356a1f34b181c49ebe& 1x, https://cdn.discordapp.com/attachments/1193494938353147944/1193519396447068170/newimg_202417203927506.png?ex=65ad028e&is=659a8d8e&hm=c0fd93ecad702fc296f3a107ac7493c3e597a8c266bedc356a1f34b181c49ebe& 2x" src="https://cdn.discordapp.com/attachments/1193494938353147944/1193519396447068170/newimg_202417203927506.png?ex=65ad028e&is=659a8d8e&hm=c0fd93ecad702fc296f3a107ac7493c3e597a8c266bedc356a1f34b181c49ebe&" />
                <img alt="Facebook" draggable="false" loading="lazy" width="120" height="70" decoding="async" data-nimg="1" className="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style={color_transparent_width_120_height_70} srcSet="https://cdn.discordapp.com/attachments/1193494938353147944/1193522629777313893/vercel-logotype-light.png?ex=65ad0591&is=659a9091&hm=e3157d8fbf11363661b0989d332260e6f52349f8f193991d80ba4f0de3be7e1d& 1x, https://cdn.discordapp.com/attachments/1193494938353147944/1193522629777313893/vercel-logotype-light.png?ex=65ad0591&is=659a9091&hm=e3157d8fbf11363661b0989d332260e6f52349f8f193991d80ba4f0de3be7e1d& 2x" src="https://cdn.discordapp.com/attachments/1193494938353147944/1193522629777313893/vercel-logotype-light.png?ex=65ad0591&is=659a9091&hm=e3157d8fbf11363661b0989d332260e6f52349f8f193991d80ba4f0de3be7e1d&"/>
                <img alt="OpenAI" draggable="false" loading="lazy" width="120" height="70" decoding="async" data-nimg="1" className="object-contain grayscale mx-8  opacity-70 hover:opacity-80 transition duration-500" style={color_transparent_width_150_height_70} srcSet="https://cdn.discordapp.com/attachments/1193494938353147944/1193521706095083560/tailwindcss-logotype.png?ex=65ad04b5&is=659a8fb5&hm=f9259bed9203297a3c2006fdd5ea9672245c0f3a1446bc54e29ae05b4bf15e73& 1x, https://cdn.discordapp.com/attachments/1193494938353147944/1193521706095083560/tailwindcss-logotype.png?ex=65ad04b5&is=659a8fb5&hm=f9259bed9203297a3c2006fdd5ea9672245c0f3a1446bc54e29ae05b4bf15e73& 2x" src="https://cdn.discordapp.com/attachments/1193494938353147944/1193521706095083560/tailwindcss-logotype.png?ex=65ad04b5&is=659a8fb5&hm=f9259bed9203297a3c2006fdd5ea9672245c0f3a1446bc54e29ae05b4bf15e73&" />
              </div>
            </div>
          </div>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
          <h1>TEXT</h1>
        </main>
      </div>
    </body>
  )
};