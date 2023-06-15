import React from 'react';

function Navbar() {
    const stileNav = {
        textAlign: "center",
        display: "inline-block",

        // backgroundColor: '#333',
        display: "inline-block",
        color: '#fff',
        padding: '10px'
    };

    return (
        <nav style={{ textAlign: 'center' }}>
            <ul >
                <li style={{ display: "inline-block", marginRight: "10px" }}> <a href="#">Home</a></li>
                <li style={{ display: "inline-block", marginRight: "10px" }}><a href="#">News</a></li>
                <li style={{ display: "inline-block", marginRight: "30px" }}><a href="#">Contact</a></li>

            </ul>
        </nav >
    );
}

export default Navbar;