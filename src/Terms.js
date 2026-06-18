import React from "react";
import "./Policy.css";

const Terms = () => {
  return (
    <div className="policy-page">
      <div className="policy-card">
        <h1>Terms & Conditions</h1>

        <section>
          <h2>Use of Website</h2>
          <p>
            By accessing this website, you agree to use it for lawful purposes
            only and comply with all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2>Products & Orders</h2>
          <p>
            All product descriptions and prices are subject to change without
            notice. We reserve the right to refuse or cancel any order.
          </p>
        </section>

        <section>
          <h2>Customization</h2>
          <p>
            Customers are responsible for verifying design, size, and spelling
            before approving customized orders.
          </p>
        </section>

        <section>
          <h2>Payments</h2>
          <p>
            Orders are processed only after successful payment confirmation.
          </p>
        </section>

        <section>
          <h2>Liability</h2>
          <p>
            We are not liable for indirect or consequential damages arising from
            product use or delivery delays.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            We may update these terms at any time without prior notice.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
