import React, { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { call, messages } from "../utils/tasks";
const Layout: React.FC<{
  children?: ReactNode;
  pageName: string;
}> = ({ children, pageName }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [rightDiv, setRightDiv] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  });
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setRightDiv(false);
  };
  const toggleChat = () => {
    setRightDiv(!rightDiv);
    setShowMenu(false);
  };

  return (
    <div className="flex font-poppins grid-cols-3 text-[#202020] flex-row h-full max-w-[1440px] mx-auto font-sans">

      {/* menu */}
      <div
        className={`w-[94px] bg-[#FBFAFF] h-[100vh] top-0  z-[5]  fixed leftNav transition-all ease-in-out overflow-auto ${
          showMenu ? "block left-0" : "hidden md:block left-[-94px]"
        }`}
      >
        <div className="justify-center w-full flex gap-[2.8rem] flex-col items-center my-[20px] ">
          <button className="md:hidden" onClick={toggleMenu}>
            <img src="/images/logo_icon.svg" alt="" className=" mb-32" />
          </button>
          <Link to="#" className="hidden md:block">
            <img src="/images/logo_icon.svg" alt="" className=" mb-32" />
          </Link>
          <div className="parent-relative menu">
            <Link to="#" className=" relative z-[2]">
              <img
                src="/images/menu_icon.svg"
                alt=""
                className={`${pageName === "index" && "activePage"}`}
              />
            </Link>
            <div className="child-absolute tooltipText ">
              <p className="">Menu</p>
            </div>
          </div>

          <div className="parent-relative menu">
            <Link to="#" className=" relative z-[2]">
              <img
                src="/images/menu_icon2.svg"
                alt=""
                className={`${pageName === "" && "activePage"}`}
              />
            </Link>
            <div className="child-absolute tooltipText">
              <p className="">About</p>
            </div>
          </div>
          <div className="parent-relative menu">
            <Link to="#" className=" relative z-[2]">
              <img
                src="/images/menu_icon3.svg"
                alt=""
                className={`${pageName === "" && "activePage"}`}
              />
            </Link>
            <div className="child-absolute tooltipText ">
              <p className="">Record</p>
            </div>
          </div>
          <div className="parent-relative menu">
            <Link to="#" className=" relative z-[2]">
              <img
                src="/images/settings.svg"
                alt=""
                className={`${pageName === "settings" && "activePage"}`}
              />
            </Link>
            <div className="child-absolute tooltipText">
              <p className="">Settings</p>
            </div>
          </div>
          <div className="parent-relative menu">
            <Link to="#" className=" relative z-[2]">
              <img
                src="/images/menu_icon4.svg"
                alt=""
                className={`${pageName === "" && "activePage"}`}
              />
            </Link>
            <div className="child-absolute tooltipText">
              <p className="">Send</p>
            </div>
          </div>
          <div className="parent-relative menu">
            <Link to="#" className=" relative z-[2]">
              <img
                src="/images/menu_icon5.svg"
                alt=""
                className={`${pageName === "" && "activePage"}`}
              />
            </Link>
            <div className="child-absolute tooltipText">
              <p className="">Records</p>
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      <div
        className="fixed top-0 bg-[#fff] h-[76px] z-[3] flex items-center justify-between md:justify-end w-full max-w-[1440px] md:pr-[41px]
      md:gap-[200px] lg:gap-[410px] px-[30px] md:px-0"
      >
        <button className="md:hidden" onClick={toggleMenu}>
          <img
            src="/images/menu_icon_open.png"
            alt=""
            className="w-[20px] h-[20px] float-left"
          />
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-[#F3F7FA] rounded-[7px] text-[#23235F] text-sm pl-[10px] md:pl-[20px] pr-[40px] py-[10px] w-[180px] md:w-[290px] placeholder:text-[#23235F] hidden md:block"
          />
          <img
            src="/images/search.svg"
            alt=""
            className="pl-[-50px] absolute right-1 md:right-4 top-[10px]"
          />
        </div>
        <div className="flex ">
          <button onClick={toggleChat}>
            <img src="/images/notify.svg" alt="" className="mr-4 md:mr-8" />
          </button>
          <div className="w-[40px] h-[40px] bg-[#e5fdf6] rounded-full flex justify-center items-center mr-4">
            <img src="/images/profile_img.svg" alt="" className="" />
          </div>

          <button onClick={toggleChat}>
            <img
              src="/images/dropdown.svg"
              alt=""
              className={` ${!rightDiv && windowWidth! <= 1024 && "flip"} `}
            />
          </button>
        </div>
      </div>

      {/* body */}
      <div
        className=" text-[#fff] w-full min-h-[100vh] bg-[#f3f4f8] relative top-[76px]  md:pl-[94px] lg:pr-[396px] py-[30px]  
       overscroll-x-hidden box-border"
      >
        <div className="w-[100%] max-w-[100%] px-[20px] md:px-[40px] ">
          {children}
        </div>
      </div>

      {/* rightDiv */}
      <div
        className={`${
          rightDiv ? "block !right-0" : " "
        } sm:w-[396px] bg-[#fff] top-[76px] fixed rightNav z-[4] text-[#000] px-[10px] sm:px-[41px]  overflow-auto pb-10 transition-all ease-in-out`}
      >
        <div className="pt-[30px] pb-[30px]">
          <div className="flex items-center justify-between">
            <h2 className="text-[#232360] text-xl leading-[26px] font-sans font-bold">
              Today's Schedule
            </h2>

            <div className="bg-[#f4f4f4] rounded-[25px] px-4 py-2 flex justify-between gap-4">
              <button className="">
                <img src="/images/menu2.svg" alt="" className="" />
              </button>
              <button className="">
                <img src="/images/calendar.svg" alt="" className="" />
              </button>
            </div>
          </div>

          <div className="font-medium mt-7 relative">
            <div className="">
              <p className="text-[#0F846D] text-xs ">
                30 minute call with Client
              </p>
              <p className="text-[#232360] text-lg leading-[1.465rem] mt-3">
                Project Discovery Call
              </p>
            </div>
            <div className="text-right absolute right-0 top-0">
              <button className="text-center text-[#0F846D] text-[0.8125rem] leading-4">
                + Invite
              </button>
            </div>
          </div>

          <div className="bg-[#16C6A4] rounded-[10px]  flex justify-between px-4 py-5 items-center mt-7">
            <div className="flex items-center gap-8">
              <div className="flex">
                {call.map((item, index) => {
                  return (
                    <img
                      key={item.id}
                      src={item.img}
                      alt=""
                      className={`${
                        index >= 1 && "ml-[-10px]"
                      } rounded-full border-[3px] border-[#fff] w-[30px] h-[30px]`}
                    />
                  );
                })}

                <p
                  className={`rounded-full border-[3px] border-[#fff] w-[30px] h-[30px] ml-[-10px]
                   mx-auto text-center bg-[#ebf1fd] text-base text-[#1EA7FF] font-bold`}
                >
                  R
                </p>
              </div>
              <p className="text-[#fff] text-base leading-5 ">28:35</p>
            </div>
            <div className="flex items-center">
              <button className="">
                <img src="/images/call.svg" alt="" />
              </button>
              <button className="ml-4">
                <img src="/images/dot.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t-[#E8EDF1] border-t-[1px] ">
          <h2 className="text-[#232360] text-xl leading-[26px] font-sans font-bold my-5">
            Messages
          </h2>

          <div className="flex flex-col gap-4">
            {messages.map((item) => {
              return (
                <div key={item.id} className="flex items-center gap-4">
                  <div
                    className="border-[1px] rounded-full p-[2px]"
                    style={{ borderColor: item.color }}
                  >
                    <img src={item.img} alt="" className="" />
                  </div>

                  <div className="text-base leading-[1.30rem]">
                    <p className="text-[#232360] font-bold">{item.name}</p>
                    <p className="font-medium text-[#768396]">{`${item.text.slice(
                      0,
                      27
                    )}${item.text.length > 27 ? "..." : ""}`}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-[#232360] text-xl leading-[26px] font-sans font-bold mb-5">
            New Task
          </h2>
          <p className="text-[#768396] font-medium text-sm leading-[18px]">
            Task Title
          </p>
          <input
            type="text"
            placeholder="Create new"
            className="bg-[#E8EDF1] text-[#232360] rounded-[7px] p-3 w-full my-4 text-[13px] leading-4 font-medium caret-[#5051F9] placeholder:text-[#232360]"
          />
          <div className="flex justify-between items-center mt-[5px] pb-[20px] border-b-[#E8EDF1] border-b-[1px] ">
            <button className="">
              <img src="/images/left_arrow.svg" alt="" className="" />
            </button>
            <img src="/images/emojis.svg" alt="" className="" />
            <button className="">
              <img src="/images/right_arrow.svg" alt="" className="" />
            </button>
          </div>

          <div className="font-medium text-sm leading-[18px]">
            <p className="text-[#768396]  mt-5  mb-2">Add collaborators</p>
            <div className="flex items-center gap-5">
              <div className="rounded-[20px] bg-[#E0E0FA] flex gap-1 items-center w-auto py-[0.25rem] px-[0.4rem]">
                <img src="/images/man4.svg" alt="" className="w-[24px] " />
                <p className="text-[#5051F9]">Angela</p>
                <button className="">
                  <img src="/images/remove.svg" alt="" className="" />
                </button>
              </div>
              <div className="rounded-[20px] bg-[#CCF4FE] flex gap-1 items-center w-auto py-[0.25rem] px-[0.4rem]">
                <img src="/images/man3.svg" alt="" className="w-[24px] " />
                <p className="text-[#1EA7FF]">Chris</p>
                <button className="">
                  <img src="/images/remove2.svg" alt="" className="" />
                </button>
              </div>

              <button className="bg-[#E8EDF1] w-[35px] h-[35px] rounded-full flex items-center justify-center">
                <img src="/images/plus.svg" alt="" className="" />
              </button>

              <div className="bg-[#074237] w-[35px] h-[35px] rounded-full flex items-center justify-center">
                <img src="/images/right_arrow2.svg" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
