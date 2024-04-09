import React from "react";
import Layout from "../Components/Layout";
import About from "../Components/AboutPage";
import Footer from "../Components/footer";

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <About />
            </Layout>
            <Footer/>
        </div>
    );
}

export default AboutPage;