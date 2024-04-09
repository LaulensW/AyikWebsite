import React from "react";
import Layout from "../Components/Layout";
import MenuKaart from "../Components/menu";
import Footer from "../Components/footer";

const menu = () => {
    return (
        <div>
            <Layout>
                <MenuKaart/>
            </Layout>
            <Footer/>
        </div>
    );
}

export default menu;