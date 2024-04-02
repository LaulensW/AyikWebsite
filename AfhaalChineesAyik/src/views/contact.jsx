import React from "react";
import Layout from "../Components/Layout";
import ContactPage from "../Components/ContactPage";
import Footer from "../Components/footer";

const Contact = () => {
    return (
        <div>
            <Layout> 
                <ContactPage />
            </Layout>
            <Footer/>
        </div>
    );
}

export default Contact;