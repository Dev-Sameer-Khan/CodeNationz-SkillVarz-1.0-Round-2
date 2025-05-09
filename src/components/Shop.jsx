import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Shop = () => {
  useEffect(() => {
    gsap.fromTo(
      ".fade",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <div className="fade min-h-screen flex bg-black max-[599px]:flex-col text-white">
      <nav className="w-full px-10 max-[599px]:px-7 pt-10 max-[599px]:pt-6 fixed top-0 left-0 flex items-center justify-between z-[9999] font-[neue4] mix-blend-difference">
        <div className="logo text-[2vw] max-[599px]:text-[6vw] max-[1024px]:text-[4vw] leading-none cursor-pointer text-[#D9D9D9]">
          <Link to="/">
            <svg
              className="w-30 max-[599px]:w-26 h-full"
              width="420"
              height="120"
              viewBox="0 0 420 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3 92L0.2 20.5H15.4L28 61.9L31.1 73.3H31.3C32.4333 68.7667 33.4667 64.9667 34.4 61.9L46.9 20.5H61.6L37.5 92H24.3ZM66.2164 92V40.7H79.8164V92H66.2164ZM66.2164 32.7V20.5H79.8164V32.7H66.2164ZM109.38 93.5C102.046 93.5 96.313 91.9 92.1797 88.7C88.0464 85.4333 85.7797 81 85.3797 75.4H97.9797C98.8464 81.0667 102.58 83.9 109.18 83.9C112.18 83.9 114.48 83.3667 116.08 82.3C117.746 81.2333 118.58 79.8 118.58 78C118.58 77.3333 118.446 76.7333 118.18 76.2C117.98 75.6667 117.58 75.2 116.98 74.8C116.446 74.3333 115.946 73.9667 115.48 73.7C115.08 73.4333 114.346 73.1667 113.28 72.9C112.213 72.6333 111.38 72.4333 110.78 72.3C110.246 72.1667 109.28 72 107.88 71.8C106.546 71.5333 105.613 71.3333 105.08 71.2C102.28 70.6667 99.9797 70.1333 98.1797 69.6C96.4464 69 94.613 68.1667 92.6797 67.1C90.7464 65.9667 89.2797 64.4667 88.2797 62.6C87.3464 60.6667 86.8797 58.3667 86.8797 55.7C86.8797 50.3667 88.813 46.3 92.6797 43.5C96.613 40.7 101.646 39.3 107.78 39.3C114.38 39.3 119.546 40.8333 123.28 43.9C127.08 46.9 129.246 51.0333 129.78 56.3H117.48C116.946 51.3 113.646 48.8 107.58 48.8C104.846 48.8 102.68 49.3 101.08 50.3C99.5464 51.3 98.7797 52.7 98.7797 54.5C98.7797 55.1 98.8797 55.6667 99.0797 56.2C99.3464 56.6667 99.7464 57.1 100.28 57.5C100.88 57.8333 101.446 58.1333 101.98 58.4C102.513 58.6 103.28 58.8333 104.28 59.1C105.28 59.3 106.146 59.5 106.88 59.7C107.613 59.8333 108.613 60.0333 109.88 60.3C111.146 60.5 112.146 60.6667 112.88 60.8C115.013 61.2667 116.746 61.7 118.08 62.1C119.48 62.4333 121.08 63.0333 122.88 63.9C124.68 64.7 126.08 65.6333 127.08 66.7C128.146 67.7 129.046 69.1 129.78 70.9C130.58 72.6333 130.98 74.6667 130.98 77C130.98 82.0667 128.98 86.1 124.98 89.1C121.046 92.0333 115.846 93.5 109.38 93.5ZM182.615 92H169.515V86H169.215C167.348 88.5333 165.282 90.4 163.015 91.6C160.815 92.8 157.982 93.4 154.515 93.4C148.915 93.4 144.548 91.7333 141.415 88.4C138.282 85.0667 136.715 80.5667 136.715 74.9V40.7H150.215V72.6C150.215 78.8 153.048 81.9 158.715 81.9C161.848 81.9 164.348 80.8333 166.215 78.7C168.082 76.5667 169.015 73.7667 169.015 70.3V40.7H182.615V92ZM223.712 92C223.045 91.1333 222.512 89.2333 222.112 86.3H221.912C220.445 88.5 218.578 90.2 216.312 91.4C214.045 92.6 210.878 93.2 206.812 93.2C201.412 93.2 197.078 91.8333 193.812 89.1C190.545 86.3667 188.912 82.5 188.912 77.5C188.912 72.3 190.712 68.5 194.312 66.1C197.912 63.6333 202.978 61.9333 209.512 61C214.312 60.3333 217.578 59.6667 219.312 59C221.045 58.2667 221.912 57 221.912 55.2C221.912 53.3333 221.178 51.8667 219.712 50.8C218.245 49.6667 216.112 49.1 213.312 49.1C207.112 49.1 203.812 51.5 203.412 56.3H191.312C191.512 51.4333 193.478 47.4 197.212 44.2C200.945 41 206.345 39.4 213.412 39.4C227.812 39.4 235.012 45.7 235.012 58.3V84.4C235.012 88.2667 235.612 90.6333 236.812 91.5V92H223.712ZM210.112 83.7C213.845 83.7 216.778 82.7333 218.912 80.8C221.112 78.8667 222.212 76.5667 222.212 73.9V66.2C220.745 67.0667 217.578 68.0667 212.712 69.2C208.845 70.0667 206.112 71.0667 204.512 72.2C202.912 73.2667 202.112 74.9333 202.112 77.2C202.112 81.5333 204.778 83.7 210.112 83.7ZM244.758 92V20.5H259.258V79.9H292.858V92H244.758ZM332.305 92C331.639 91.1333 331.105 89.2333 330.705 86.3H330.505C329.039 88.5 327.172 90.2 324.905 91.4C322.639 92.6 319.472 93.2 315.405 93.2C310.005 93.2 305.672 91.8333 302.405 89.1C299.139 86.3667 297.505 82.5 297.505 77.5C297.505 72.3 299.305 68.5 302.905 66.1C306.505 63.6333 311.572 61.9333 318.105 61C322.905 60.3333 326.172 59.6667 327.905 59C329.639 58.2667 330.505 57 330.505 55.2C330.505 53.3333 329.772 51.8667 328.305 50.8C326.839 49.6667 324.705 49.1 321.905 49.1C315.705 49.1 312.405 51.5 312.005 56.3H299.905C300.105 51.4333 302.072 47.4 305.805 44.2C309.539 41 314.939 39.4 322.005 39.4C336.405 39.4 343.605 45.7 343.605 58.3V84.4C343.605 88.2667 344.205 90.6333 345.405 91.5V92H332.305ZM318.705 83.7C322.439 83.7 325.372 82.7333 327.505 80.8C329.705 78.8667 330.805 76.5667 330.805 73.9V66.2C329.339 67.0667 326.172 68.0667 321.305 69.2C317.439 70.0667 314.705 71.0667 313.105 72.2C311.505 73.2667 310.705 74.9333 310.705 77.2C310.705 81.5333 313.372 83.7 318.705 83.7ZM380.852 93.5C373.918 93.5 368.818 90.8667 365.552 85.6H365.352V92H352.252V20.5H365.852V46.9H366.152C369.418 41.8333 374.185 39.3 380.452 39.3C386.918 39.3 392.218 41.8333 396.352 46.9C400.485 51.9 402.552 58.4 402.552 66.4C402.552 74.6667 400.552 81.2667 396.552 86.2C392.552 91.0667 387.318 93.5 380.852 93.5ZM377.852 82.1C381.318 82.1 383.985 80.7333 385.852 78C387.785 75.2667 388.752 71.4 388.752 66.4C388.752 61.4667 387.752 57.5667 385.752 54.7C383.818 51.7667 381.018 50.3 377.352 50.3C369.485 50.3 365.552 55.7667 365.552 66.7C365.552 71.4333 366.652 75.2 368.852 78C371.052 80.7333 374.052 82.1 377.852 82.1Z"
                fill="#D9D9D9"
              />
              <path
                d="M408.021 29.0208C413.555 29.0208 418.042 24.5343 418.042 19C418.042 13.4656 413.555 8.97916 408.021 8.97916C402.486 8.97916 398 13.4656 398 19C398 24.5343 402.486 29.0208 408.021 29.0208Z"
                stroke="#D9D9D9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M413.705 16.4612C412.733 14.2877 410.556 12.7708 408.021 12.7708C404.581 12.7708 401.792 15.5597 401.792 19C401.792 22.4403 404.581 25.2292 408.021 25.2292C410.556 25.2292 412.733 23.7123 413.705 21.5387"
                stroke="#D9D9D9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="menu flex items-center gap-10 max-[599px]:gap-5">
          <div className="links flex items-center text-[#D9D9D9] gap-10 text-[1vw] max-[1025px]:text-[2vw] max-[599px]:hidden">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="/shop">Shop</a>
            <a href="/contact">Contact</a>
          </div>
          <span className="line origin-top inline-block w-[0.1px] h-[2rem] max-[599px]:h-[1.5rem] bg-[#D9D9D9]"></span>
          <div className="menu1 flex flex-col gap-2 cursor-pointer">
            <span className="line01 origin-[43%] will-change-transform w-[4rem] max-[599px]:w-[2.5rem] h-[1px] bg-[#D9D9D9]"></span>
            <span className="line02 origin-[43%] will-change-transform w-[4rem] max-[599px]:w-[2.5rem] h-[1px] bg-[#D9D9D9]"></span>
          </div>
        </div>
      </nav>
      <div className=" max-[599px]:w-[100%] w-[50%] flex flex-col justify-end max-[599px]:items-center max-[599px]:my-20 max-[599px]:p-4  max-[1024px]:p-7 p-14 gap-y-4">
        <h1 className="font-[sloop] max-[1024px]:text-5xl text-8xl">Premium</h1>
        <h1 className="font-[neue5] max-[1024px]:text-5xl text-8xl max-[599px]:text-center ">
          PREMADE <br />
          SERVICE
        </h1>
        <p className="font-[neue2] text-[1.5vw] text-gray-400 max-[599px]:w-[90%] max-[599px]:text-base w-[80%] max-[599px]:text-center">
          Launch your Website within days - cheap and with no headaches
        </p>
        <div className="flex flex-wrap max-[599px]:justify-center font-[neue2] gap-4 lg:gap-x-10 group">
          {/* Shop Sites Button */}
          <div className="flex justify-center">
            <button className="bg-[#D9D9D9] hover:text-white hover:bg-black hover:border-white border border-transparent px-9 py-2.5 rounded-full flex items-center  gap-4 max-[599px]:px-14 text-black ">
              <img
                className="w-6 max-[599px]:w-7 text-black"
                src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745578328/cartola_logo_lbucsm.svg"
                alt="Cartola Logo"
              />
              <span className="text-base">Shop Sites</span>
            </button>
          </div>

          {/* Explore Feature Button */}
          <div className="flex justify-center">
            <button className="bg-black text-white px-9 py-2.5 rounded-full flex items-center gap-4 border border-white hover:text-black hover:bg-[#FFFFFF]">
              <img
                className="w-6 max-[599px]:w-7"
                src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745578329/iron-maiden_legacy-of-the-beast-loading_logo_axec2g.svg"
                alt="Iron Logo"
              />
              <span className="text-base">Explore Feature</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-[599px]:w-full w-[50%]  h-screen max-[599px]:h-[70%] overflow-hidden ">
        <img
          className="object-cover max-[599px]:w-full max-[599px]:h-full h-[100%] object-center w-full"
          src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1745577025/Shop_pnwzja.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Shop;
