import React from "react";
import Layout from "../Components/Layout";
import ContactPage from "../Components/ContactPage";
import FAQ from "../Components/faq";
import Footer from "../Components/footer";

const Contact = () => {
    return (
        <div>
            <Layout> 
                <ContactPage />
            </Layout>
            <FAQ/>
            <Footer/>
        </div>
    );
}

export default Contact;