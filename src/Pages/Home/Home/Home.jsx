import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';
import ArrivingClasses from '../ArrivingClasses/ArrivingClasses';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
            <ArrivingClasses/>
        </div>
    );
};

export default Home;