// Loader.js
import React from 'react';
import './App.css';
import { Dna } from 'react-loader-spinner'
const Loader = ({ loading }) => {
    return (
        <div className={`loader-overlay ${loading ? 'loading' : 'loaded'}`}>
            <div className="loader">
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
                {/* <p>Loading..</p> */}
            </div>
        </div>
    );
};

export default Loader;
