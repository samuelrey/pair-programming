import React from "react";

const Bill = ({ date, title, amount }) => {
    return (
        <section className="bill-container">
            <div>{date}</div>
            <div>{title}</div>
            <div>${amount.toFixed(2)}</div>
        </section>
    );
};

export default Bill;
