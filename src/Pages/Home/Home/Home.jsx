import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';
import ArrivingClasses from '../ArrivingClasses/ArrivingClasses';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <Helmet>
                <title>MindFulness || Home</title>
            </Helmet>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <ArrivingClasses />
        </div>
    );
};

export default Home;