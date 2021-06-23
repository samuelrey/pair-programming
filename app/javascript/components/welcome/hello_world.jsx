import PropTypes from "prop-types";
import moment from "moment";
import React, { useState } from "react";
import data from "./data";
import Bill from "./bill";

const today = moment("09/02", "MM/DD");

const HelloWorld = () => {
    const [bills, setBills] = useState(data);
    const pastBills = bills.filter((bill) =>
        moment(bill.date, "MM/DD").isBefore(today)
    );
    const upcomingBills = bills.filter(
        (bill) => !moment(bill.date, "MM/DD").isBefore(today)
    );

    return (
        <div>
            <h2>Bills this paycheck</h2>
            <section className="past-bill-container">
                {pastBills.map((bill) => {
                    return <Bill {...bill} />;
                })}
            </section>
            <hr />
            <section className="upcoming-bill-container">
                {upcomingBills.map((bill) => {
                    return <Bill {...bill} />;
                })}
            </section>
        </div>
    );
};

HelloWorld.propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
