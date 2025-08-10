import React from 'react';
import Banner from '../Components/banner';
import { useLoaderData } from 'react-router';
import Service from '../Components/Service';
import Gardeners from '../pages/Gardeners';
import TopTips from '../pages/TopTips';
import OurJourney from '../pages/OurJourney';
import UpcomingWorkShop from '../pages/UpcomingWorkShop';

const HomeLayouts = () => {

    const services=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Service services={services}></Service>
            <Gardeners></Gardeners>
            <UpcomingWorkShop></UpcomingWorkShop>
            
            <TopTips></TopTips>
            <OurJourney></OurJourney>
        </div>
    );
};

export default HomeLayouts;