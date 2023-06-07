import React from 'react';
import { ImSpinner10 } from "react-icons/im";

const Loader = () => {
    return (
        <div className="flex justify-center items-center my-5">
            <ImSpinner10 className='w-10 h-10 animate-spin' />
        </div>
    );
};

export default Loader;