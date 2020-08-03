import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";

const PersonalProjects = () => (
    <Layout>
        <SEO title={"Personal Projects"} />
        <div className="page">
            <h1 className="page-title">Personal Projects</h1>
            <p>
                These are the best books that I discovered since graduating from
                university. I try to keep this list meaning and manageable, so
                here you'll only find books that had an impact on my life or at
                least changed how I work.
            </p>
        </div>
    </Layout>
);

export default PersonalProjects;
