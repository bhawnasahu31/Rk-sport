import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import EnquiryModal from "./EnquiryModal";

import Header from "./Header";
import Footer from "./Footer";
import Products from "./Product";
import HeroSection from "./HeroSection";
import WhyUs from "./WhyUs";
import ProcessFlow from "./ApparelCategories";
import ProcessSection from "./ProcessSection";
import ContactUs from "./Contact";
import AboutUs from "./AboutUs";
import Customize from "./Customize";
import JerseyBuilder from "./JerseyBuilder";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import OrderHistory from "./OrderHistory";
import SavedDesigns from "./SavedDesigns";
import ProfileEdit from "./ProfileEdit";
import DesignerGrid from "./DesignerGrid";
import SportDesignGallery from "./SportDesignGallery";
import ScrollToTop from "./ScrollToTop";
import ShippingPolicy from "./ShippingPolicy"
import ReturnPolicy from "./ReturnPolicy";
import Terms from "./Terms";
import PrivacyPolicy from "./PrivacyPolicy";
import { FloatingWhatsApp } from "react-floating-whatsapp";
// import Rewards  from  './reward.js'
// import Coupons from  './coupon.js'


function Layout() {
  const location = useLocation();
  const path = location.pathname;

  const hideHeader =
    path === "/builder" ||
    path === "/Design" ||
    path.startsWith("/designs/");
     

const [show, setShow] = useState(false);

useEffect(() => {
  setTimeout(() => setShow(true), 1200);
}, []);


  return (
    <>
    {show && <EnquiryModal onClose={() => setShow(false)} />}
      {!hideHeader && <Header />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<><HeroSection /><Products /><WhyUs /><ProcessFlow /></>} />
        <Route path="/products" element={<Products />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/process" element={<ProcessSection />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/builder" element={<JerseyBuilder />} />
        <Route path="/Design" element={<DesignerGrid />} />
        <Route path="/designs/:sport" element={<SportDesignGallery />} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/designs" element={<SavedDesigns />} />
        <Route path="/profile" element={<ProfileEdit />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
<Route path="/return-policy" element={<ReturnPolicy />} />
<Route path="/terms" element={<Terms />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
{/* <Route path="/rewards" element={<Rewards />} />
<Route path="/coupons" element={<Coupons />} /> */}


      </Routes>
    
      <FloatingWhatsApp
        phoneNumber="8319308575"
        accountName="RK Sportswear"
        chatMessage="Hello! How can we help you?"
        placeholder="Type a message..."
/>
      {!hideHeader && <Footer />}


    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
