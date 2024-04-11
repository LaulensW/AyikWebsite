import React from "react";
import Layout from "../Components/Layout";
import Privacy from "../Components/PrivacyPage";
import Footer from "../Components/footer";

const PrivacyPage = () => {
    return (
        <div>
            <Layout>
                <Privacy />
            </Layout>
            <Footer/>
        </div>
    );
}

export default PrivacyPage;