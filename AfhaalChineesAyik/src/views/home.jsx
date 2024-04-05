import React from "react";
import Layout from '../Components/Layout';
import Hero from "../Components/Hero";
import PopuItems from "../Components/Popu-items";
import Reviews from "../Components/reviews";
import Footer from "../Components/footer";

const Home = () => {
    return (
        <>
            <Layout>
                <Hero />
                <PopuItems />
            </Layout>
            <Reviews />
            <Footer/>
        </>
    );
};   
export default Home;