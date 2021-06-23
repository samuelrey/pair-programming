import PropTypes from "prop-types";
import React, { useState } from "react";
import data from "./data";

const HelloWorld = (props) => {
    const [bills, setBills] = useState(data);

    return (
        <div>
            <h2>Bills this paycheck</h2>
        </div>
    );
};

HelloWorld.propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
