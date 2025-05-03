import { Popover, Transition, PopoverButton, PopoverPanel } from "@headlessui/react";
import React, { Fragment } from "react";
import { getInitials } from "../utils";
import WeeklyLoginCalendar from "./WeeklyLoginCalendar";

const UserInfo = ({ user }) => {
  return (
    <div className='px-4'>
      <Popover className='relative'>
        {({ open }) => (
        <>
          <PopoverButton
            className={`
              group inline-flex items-center justify-center outline-none
              w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500
              text-white text-2xl font-bold shadow-md transition-transform
              hover:scale-105 hover:shadow-lg
            `}
            aria-label="Open user menu"
          >
            {getInitials(user?.name)}
          </PopoverButton>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-3 w-96 max-w-md -translate-x-1/2 transform px-4 sm:px-0'>
              <div className='flex items-center gap-6 rounded-2xl shadow-2xl bg-white p-8 border border-gray-100'>
                <div className='w-20 h-20 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full text-white flex items-center justify-center text-3xl font-extrabold shadow-lg border-4 border-white'>
                  <span className='text-center font-serif tracking-wide'>
                    {getInitials(user?.name)}
                  </span>
                </div>
                <div className='flex flex-col gap-y-2 flex-1'>
                  <p className='text-black text-2xl font-extrabold leading-tight'>{user?.name}</p>
                  <span className='text-base text-gray-400 font-medium'>{user?.title}</span>
                  <span className='text-sm text-gray-500 font-semibold'>Team: {user?.team}</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {user?.domain?.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`mailto:${user?.email ?? "email@example.com"}`}
                    className='text-blue-600 hover:underline text-base font-semibold mt-1'
                  >
                    {user?.email ?? "email@example.com"}
                  </a>
                  {/* Calendar */}
                  <WeeklyLoginCalendar loginHistory={user?.loginHistory} />
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
        )}
      </Popover>
    </div>
  );
};

export default UserInfo;