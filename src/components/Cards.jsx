import React from 'react';
import Icons from '../common/icons';

import {cardsData} from '../common/Helper'


const Cards = () => {
  return (
    <section>
      {cardsData.map((data , index) => (
        <div key={index} className="bg-light-gray max-w-[987px] mt-[30px] border border-fade-blue rounded-[16px] pt-6 pb-[30px] ps-[25px] pe-5">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div className="flex gap-[19px] items-center">
              <img src={data.employerLogo} alt="EmployerLogo" className="max-w-[52px] w-full" />
              <div className="flex flex-col">
                <h4 className="text-lg leading-[26px] font-bold font-Plus-Jakarta text-blue">{data.employerName}</h4>
                <p className="flex items-center gap-[3px] text-xs leading-[18px] text-gray font-Plus-Jakarta font-medium">
                  <Icons icon="LocationMark" />
                  {data.location}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              {data.skills.map((skill, index) => (
                <div key={index} className="px-[10px] py-[3px] bg-light-gray2 rounded-[5px]">
                  <p className="text-xs leading-[18px] font-Plus-Jakarta font-medium text-gray2">{skill}</p>
                </div>
              ))}
              <Icons icon="SystemIcon" />
            </div>
          </div>
          <h3 className="text-2xl font-Plus-Jakarta font-bold leading-[30.2px] text-blue pt-[28px] pb-2">{data.jobTitle}</h3>
          <div className="flex gap-[19px] items-center">
            <div className="flex gap-[7px] items-center">
              <Icons icon="BriefCase" />
              <p className="text-xs leading-[18px] font-Plus-Jakarta font-medium text-gray">{data.jobType}</p>
            </div>
            <div className="flex gap-[7px] items-center">
              <Icons icon="Clock" />
              <p className="text-xs leading-[18px] font-Plus-Jakarta font-medium text-gray">{data.time}</p>
            </div>
          </div>
          <p className="text-sm leading-[22px] font-medium font-Plus-Jakarta text-gray2 pt-[14px]">{data.description}</p>
          <div className="flex items-end justify-between pt-[17px]">
            <p className="text-base leading-[26px] font-bold text-green font-Plus-Jakarta">{data.salary}</p>
            <button className="px-3 py-2 min-h-[30px] flex items-center justify-center text-white text-xs leading-[12px] font-Plus-Jakarta font-medium bg-green rounded-[4px]">Apply Now</button>
          </div>
        </div>
      ))}
    </section>

  );
};

export default Cards;