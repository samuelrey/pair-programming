import PropTypes from "prop-types";
import moment from "moment";
import React, { useState } from "react";
import data from "./data";

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
