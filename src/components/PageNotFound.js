import React from 'react';
import notFoundImg from '../not-found.png';

const styleImg = {
    maxWidth: "350px",
    display: "block",
    margin: "auto",
    marginTop: "50px",
    borderRadius: "10px",
}

const PageNotFound = () => (
    <div>
        <h2 color="#fff" className="text-center">Page not found</h2>
        <img style={styleImg} src={notFoundImg} />
    </div>
)

export default PageNotFound;