import React from "react";

const Bill = ({ date, title, amount }) => {
    return (
        <section className="bill-container">
            <div className="date">{date}</div>
            <div className="title">{title}</div>
            <div className="amount">${amount.toFixed(2)}</div>
        </section>
    );
};

export default Bill;
