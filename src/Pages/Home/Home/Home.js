import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner';
import CategoryOptions from '../CategoryOptions/CategoryOptions';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryOptions></CategoryOptions>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;