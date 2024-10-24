import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <meta
            name="google-site-verification"
            content="d8BOjIuImgXJ5HHfD2u9Ct1Q52xyN0qT6URgP9x7pO8"
            key="google-site-verification"
        />,
        <link
            key="google-fonts"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
            rel="stylesheet">
        </link>,
    ]);
};