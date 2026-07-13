import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcum from '../../components/TermsConditions/Breadcum';
import TermsSection from '../../components/TermsConditions/TermsSection';

const TermsConditions = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Terms and Conditions - Operating Media</title>
        
        <meta 
          name="description" 
          content="Read the terms and conditions of Operating Media digital marketing training institute. Details on refund policy, security, and job placement assistance." 
        />
        
        <meta 
          name="keywords" 
          content="operating media terms, refund policy operating media, placement assistance rules" 
        />

        <link 
          rel="canonical" 
          href="https://www.operatingmedia.com/terms-and-conditions/" 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Terms & Conditions - Operating Media" />
        <meta property="og:description" content="Read our policies, refund terms, and job assistance guidelines." />
        <meta property="og:url" content="https://www.operatingmedia.com/terms-and-conditions/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions - Operating Media" />
        <meta name="twitter:description" content="Read our policies, refund terms, and job assistance guidelines." />
      </Helmet>

      {/* Page Breadcrumb/Header */}
      <Breadcum />

      {/* Main Section Content */}
      <TermsSection />
    </main>
  );
};

export default TermsConditions;
