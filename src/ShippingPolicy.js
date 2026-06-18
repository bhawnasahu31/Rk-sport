import React from "react";
import "./Policy.css";

const ShippingPolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-card">

        <h1>Shipping Policy</h1>
        <p className="policy-updated">
          Last Updated: {new Date().getFullYear()}
        </p>

        <section>
          <h2>1. Order Processing</h2>
          <p>
            All orders are processed after successful payment confirmation.
            Standard products are processed within <strong>2–3 business days</strong>.
            Customized or made-to-order sportswear items may require
            <strong> 5–10 business days</strong> for production before dispatch.
          </p>
        </section>

        <section>
          <h2>2. Shipping Coverage</h2>
          <p>
            We currently ship across India through trusted courier and logistics
            partners. International shipping may be available on special request.
          </p>
        </section>

        <section>
          <h2>3. Estimated Delivery Time</h2>
          <p>
            Delivery timelines depend on the destination and courier partner.
          </p>
          <ul>
            <li>Metro Cities: 3–5 business days</li>
            <li>Other Cities & Towns: 5–8 business days</li>
            <li>Remote Areas: 7–12 business days</li>
          </ul>
          <p>
            Delivery times are estimates and may vary due to external factors.
          </p>
        </section>

        <section>
          <h2>4. Shipping Charges</h2>
          <p>
            Shipping charges are calculated at checkout based on order weight,
            size, and delivery location. Promotional free shipping offers may be
            available from time to time.
          </p>
        </section>

        <section>
          <h2>5. Order Tracking</h2>
          <p>
            Once your order is shipped, a tracking ID will be shared via
            email/SMS. Customers can track their shipment using the courier
            partner’s tracking system.
          </p>
        </section>

        <section>
          <h2>6. Delivery Attempts</h2>
          <p>
            Courier partners will attempt delivery multiple times. If delivery
            fails due to incorrect address or unavailability of the recipient,
            the package may be returned to us. Re-shipping charges may apply.
          </p>
        </section>

        <section>
          <h2>7. Delays</h2>
          <p>
            Shipping delays may occur due to weather conditions, strikes,
            high-volume periods, or other unforeseen logistical issues. We are
            not liable for delays caused by third-party courier services.
          </p>
        </section>

        <section>
          <h2>8. Damaged or Lost Packages</h2>
          <p>
            If your package arrives damaged or is lost in transit, please
            contact our support team within <strong>48 hours</strong> of delivery
            status update with order details and photos (if applicable).
          </p>
        </section>

        <section>
          <h2>9. Contact Information</h2>
          <p>
            For shipping related queries, contact:
            <br />
            <strong>Email:</strong> support@yourdomain.com
            <br />
            <strong>Phone:</strong> +91-XXXXXXXXXX
          </p>
        </section>

      </div>
    </div>
  );
};

export default ShippingPolicy;
