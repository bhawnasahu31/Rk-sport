import React from "react";
import "./Policy.css";

const ReturnPolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-card">
        <h1>Return, Cancellation & Refund Policy</h1>

        <section>
          <h2>Returns</h2>
          <p>
            We accept returns only for defective or incorrect items delivered.
            Requests must be raised within 48 hours of delivery with product
            photos and order details.
          </p>
        </section>

        <section>
          <h2>Non-Returnable Items</h2>
          <ul>
            <li>Customized jerseys and team uniforms</li>
            <li>Printed or personalized products</li>
            <li>Used or washed items</li>
          </ul>
        </section>

        <section>
          <h2>Order Cancellation</h2>
          <p>
            Orders can be cancelled within 12 hours of placing the order.
            Customized orders cannot be cancelled once production has started.
          </p>
        </section>

        <section>
          <h2>Refunds</h2>
          <p>
            Approved refunds are processed within 5–7 business days to the
            original payment method.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>support@customsportswear.in</p>
        </section>
      </div>
    </div>
  );
};

export default ReturnPolicy;
