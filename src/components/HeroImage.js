import React from "react";

const HeroImage = ({ hero }) => {
    if (!hero || !hero.resize || !hero.resize.src) return null;

    return (
        <div class="post-hero">
            <img src={hero.resize.src} alt="hero" />
            <small>{hero.description}</small>
        </div>
    );
};

export default HeroImage;
