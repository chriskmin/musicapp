"use client";
import {LuLibrary} from 'react-icons/lu'
import {AiOutlinePlus} from 'react-icons/ai'

const Library = () => {
    const onClick = () =>{
        //Upload
    };
    return (
        <div className="flex flex-col">
            <div className="
                flex
                items-center
                justify-between
                px-5
                pt-4
            ">
                <div className="
                    inline-flex
                    items-center 
                    gap-x-2
                ">
                    <LuLibrary className="text-neutral-400"size={26}/>
                    <p
                    className='
                    text-neutral-400
                    font-medium
                    text-md
                    '>
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus 
                    onClick={onClick}
                    size={22}
                    className='text-neutral-400 cursor-pointer hover:text-white transition'/>
            </div>
            <div className='
            flex
            flex-col
            gap-y-2
            mt-4
            px-3
            '>
                Songs
            </div>
        </div>
    );
};

export default Library