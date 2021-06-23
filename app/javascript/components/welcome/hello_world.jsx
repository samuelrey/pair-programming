import PropTypes from "prop-types";
import React, { useState } from "react";
import data from "./data";

const HelloWorld = (props) => {
    const [bills, setBills] = useState(data);

    return (
        <div>
            <h2>Bills this paycheck</h2>
            {bills.map((bill) => {
                const { date, title, amount } = bill;
                return (
                    <section className="bill-container">
                        <div>{date}</div>
                        <div>{title}</div>
                        <div>{amount}</div>
                    </section>
                );
            })}
        </div>
    );
};

HelloWorld.propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
