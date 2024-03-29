import React from "react";
import Layout from '../Components/Layout';
import Hero from "../Components/Hero";
import PopuItems from "../Components/Popu-items";
import Reviews from "../Components/reviews";

const Home = () => {
    return (
        <>
            <Layout>
                {/* <h1>Home</h1> */}
            </Layout>
            <Hero />
            <PopuItems />
            <Reviews />
        </>
    );
};   
export default Home;