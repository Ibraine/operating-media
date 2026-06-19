import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcum from "../../components/CorporateTraining/Breadcum";
import Contentsection from "../../components/CorporateTraining/Contentsection";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";

const CorporateTrainingPage = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* SEO */}
      <Helmet>
        <title>Corporate Training - Operating Media</title>

        <meta
          name="description"
          content="Enhance your team's skills with Operating Media’s corporate training programs in digital marketing, AI tools, branding, and performance marketing."
        />

        <meta
          name="keywords"
          content="corporate training, digital marketing training for companies, employee skill development, AI marketing workshop, operating media training"
        />

        <link
          rel="canonical"
          href="https://www.operatingmedia.com/corporate-training/"
        />

        {/* ✅ Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://operatingmedia.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Corporate Training",
                "item": "https://operatingmedia.com/corporate-training/"
              }
            ]
          })}
        </script>
      </Helmet>

      <Breadcum />
      <Contentsection />
      <CounselorCTA />
    </main>
  );
};

export default CorporateTrainingPage;