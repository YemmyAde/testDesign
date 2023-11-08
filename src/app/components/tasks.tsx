import React from "react";
import { tasks } from "../../utils/tasks";
const Tasks = () => {
  return (
    <div className="">
      <h2 className="text-[#232360] text-[24px] font-sans font-bold ">Task</h2>
      <div className="flex gap-[2px] flex-col pb-8">
        {tasks.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-[#fff]   mt-[20px] rounded-[10px] overflow-auto"
            >
              <div className="min-w-[768px] flex w-full  justify-between items-start">
                <div className="flex-center items-start gap-3 bg-[#FBFAFF] py-[20px] px-[24px] rounded-tl-[10px] rounded-bl-[10px]">
                  <div className="bg-[#16C6A4] rounded-full w-[35px] h-[35px] flex justify-center items-center">
                    <img src="/images/play.svg" alt="" className=" " />
                  </div>

                  <div className="flex-center flex-col gap-2 ">
                    <p className="text-sm text-[#000] font-medium">
                      Start from
                    </p>
                    <div className="text-[#778399] text-[0.8125rem] leading-[1rem] flex-center gap-2">
                      <img src="/images/clocl.svg" alt="" className="" />
                      <span className="">{item.startTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-center flex-col gap-2 justify-start py-[20px]">
                  <p className="text-[1rem] leading-5 text-[#23235F] font-medium">
                    Search Inspiration for project
                  </p>
                  <div className="text-[#074237] text-[0.8125rem] font-semibold leading-[1rem] flex-center gap-2 ">
                    <img src="/images/link.svg" alt="" className="" />
                    <a href={item.link} target="_blank" className="pr-4">
                      {item.link}
                    </a>
                    <img
                      src="/images/comment.svg"
                      alt=""
                      className="border-l-[#E8EDF3] border-l-[1px] pl-3"
                    />
                    <p className=" text-[#778399] ">
                      {`${item.comments} comments`}
                    </p>
                  </div>
                </div>

                <div className="flex-center flex-col gap-4 py-[20px]">
                  <p className="text-[1rem] leading-5 text-[#23235F] font-medium">
                    {`${item.completion} complete`}
                  </p>
                  <div className="bg-[#E3E8EE] w-[100px] lg:w-[150px] h-[5px] rounded-[6px] relative">
                    <div
                      className="bg-[#16C6A4]  h-[5px] rounded-[6px] absolute"
                      style={{
                        width: item.completion,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="py-[20px] pr-[24px]">
                  <div className="bg-[#E4FCF6] rounded-[9px] flex-center gap-3 py-[10px] px-4">
                    <img src="/images/alarm.svg" alt="" className="" />
                    <p className="text-[#16C6A4] text-[0.8125rem] font-medium">
                      Reminder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
