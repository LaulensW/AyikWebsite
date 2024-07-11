import React from "react";
import Layout from '../Components/Layout';
import Hero from "../Components/Hero";
import PopuItems from "../Components/Popu-items";
import Reviews from "../Components/reviews";
import Footer from "../Components/footer";
import ClosedPopup from "../Components/modal";

const Home = () => {
    const today = new Date();
    const start = new Date('2024-07-22');
    const end = new Date('2024-08-14');
    const showPopup = today >= start && today <= end;

    return (
        <>
            <Layout>
                {showPopup && <ClosedPopup/>}
                <Hero />
                <PopuItems />
            </Layout>
            <Reviews />
            <Footer/>
        </>
    );
};   
export default Home;