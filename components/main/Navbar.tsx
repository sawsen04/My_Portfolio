import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // const [navbar, setNavbar] = useState(false);
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#hero" className="h-auto w-auto flex flex-row items-center">
          {/* <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          /> */}

          <span className="font-bold ml-[40px] hidden md:block text-gray-300">
            Sawsen AYARI
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>

            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
      {/*Mobile button*/}
      {/* <div className="md:hidden">
        <button
          className="p-2 text-white rounded-md outline-none focus:border-white "
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <Image src="/close.svg" width={30} height={30} alt="logo" />
          ) : (
            <Image
              src="/hamburger.svg"
              width={30}
              height={30}
              alt="logo"
              className="focus:border-none active:border-none"
            />
          )}
        </button>
      </div> */}
      {/* <div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "pb-12 md:p-0 block" : "hidden"
          }`}
        >
          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a
                href="#about-me"
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer"
              >
                About me
              </a>

              <a
                href="#skills"
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer"
              >
                Projects
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <a href={social.link} key={social.name}>
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// function NavBar() {
//   const [navbar, setNavbar] = useState(false);
//   return (
//     <div>
//       <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
//         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//           <div>
//             <div className="flex items-center justify-between py-3 md:py-5 md:block">
//               {/* LOGO */}
//               <Link href="/">
//                 <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
//               </Link>
//               {/* HAMBURGER BUTTON FOR MOBILE */}
//               <div className="md:hidden">
//                 <button
//                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <Image src="/close.svg" width={30} height={30} alt="logo" />
//                   ) : (
//                     <Image
//                       src="/hamburger-menu.svg"
//                       width={30}
//                       height={30}
//                       alt="logo"
//                       className="focus:border-none active:border-none"
//                     />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div
//               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                 navbar ? "p-12 md:p-0 block" : "hidden"
//               }`}
//             >
//               <ul className="h-screen md:h-auto items-center justify-center md:flex ">
//                 <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="#about" onClick={() => setNavbar(!navbar)}>
//                     About
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="#blog" onClick={() => setNavbar(!navbar)}>
//                     Blogs
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="#contact" onClick={() => setNavbar(!navbar)}>
//                     Contact
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="#projects" onClick={() => setNavbar(!navbar)}>
//                     Projects
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default NavBar;
