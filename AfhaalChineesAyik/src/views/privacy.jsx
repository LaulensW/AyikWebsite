import React from "react";
import Layout from "../Components/Layout";
import PrivacyPage from "../Components/PrivacyPage";
import Footer from "../Components/footer";

const Privacy = () => {
    return (
        <div>
            <Layout>
                <PrivacyPage />
            </Layout>
            <Footer/>
        </div>
    );
}

export default Privacy;