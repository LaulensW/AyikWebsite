import React from "react";
import Layout from '../Components/Layout';
import Hero from "../Components/Hero";
import PopuItems from "../Components/Popu-items";
import Reviews from "../Components/reviews";
import Footer from "../Components/footer";
import FAQ from "../Components/faq";

const Home = () => {
    return (
        <>
            <Layout>
                <Hero />
                <PopuItems />
            </Layout>
            <div className="splitser">
                <FAQ />
                <FAQ />
            </div>
            
            <Reviews />
            <Footer/>
        </>
    );
};   
export default Home;