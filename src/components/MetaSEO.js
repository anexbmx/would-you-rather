import React from "react";
import MetaTags from "react-meta-tags";

export default class MetaSEO extends React.Component {
    render() {
        return (
            <MetaTags>
            <title>Would you rather?</title>
                <meta
                    name="description"
                    content="Would You Rather is a fully responsive  polling game that presents the user with a series of questions."
                />
           
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@boumediene_anas" />
                <meta
                    name="twitter:url"
                    content="https://would-u-rather.vercel.app"
                />
                <meta name="twitter:title" content="Would you rather ?" />
                <meta
                    name="twitter:description"
                    content="Would You Rather is a fully responsive  polling game that presents the user with a series of questions."
                />
                <meta
                    name="twitter:image"
                    content="https://would-u-rather.vercel.app/cover.png"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Would you rather ?" />
                <meta
                    property="og:description"
                    content="Would You Rather is a fully responsive  polling game that presents the user with a series of questions."
                />
                <meta property="og:site_name" content="My App" />
                <meta
                    property="og:url"
                    content="https://would-u-rather.vercel.app"
                />
                <meta
                    property="og:image"
                    content="https://would-u-rather.vercel.app/cover.png"
                />
            </MetaTags>
        );
    }
}
