import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
    <Layout>
        <SEO title={"404"} />
        <div className="page">
            <h1 className="page-title">PAGE NOT FOUND</h1>
            <p>
                The page you are trying to visit doesn&#39;t exist... the
                sadness.
            </p>
        </div>
    </Layout>
);

export default NotFoundPage;
