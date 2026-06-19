import React from "react";
import { Helmet } from "react-helmet-async";

import Breadcum from "../../components/Faq/Breadcum.jsx";
import Faqsection from "../../components/Faq/Faqsection.jsx";
import HiringPartners from "../../components/HiringPartners/HiringPartners";

const FaqPage = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Operating Media</title>

        <meta
          name="description"
          content="Find answers to frequently asked questions about our digital marketing courses, fees, placements, and training at Operating Media."
        />

        <meta
          name="keywords"
          content="digital marketing course FAQs, operating media questions, course fees, placement queries"
        />

        {/* ✅ Canonical */}
        <link
          rel="canonical"
          href="https://www.operatingmedia.com/faq/"
        />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="FAQs - Operating Media" />
        <meta property="og:description" content="Get answers to common questions about digital marketing courses and placements." />
        <meta property="og:url" content="https://www.operatingmedia.com/faq/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQs - Operating Media" />
        <meta name="twitter:description" content="All your digital marketing course questions answered." />

        {/* ✅ Updated FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is digital marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Digital marketing promotes products or services through digital channels — search engines, social media, email, and websites. It includes SEO, content marketing, PPC, and social media strategy."
                }
              },
              {
                "@type": "Question",
                "name": "Who can enroll in your digital marketing courses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our courses are designed for students, marketing professionals, business owners, and anyone looking to enhance their digital marketing skills — no background required."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need any prior experience to join?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No prior experience is required. We offer beginner to advanced levels so everyone can find the right starting point for your career."
                }
              },
              {
                "@type": "Question",
                "name": "I don't know which course suits me. How do I decide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide personalized career counseling. Book a one-to-one session with our experts to discuss your goals and find the perfect specialization."
                }
              },
              {
                "@type": "Question",
                "name": "What courses do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer MBA-Level PG Programs, Online AI Programs, 4–6 Month Certifications, Free Masterclasses, and Short Term Courses across all major digital disciplines."
                }
              },
              {
                "@type": "Question",
                "name": "How long do the courses take to complete?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Foundational courses take 2–3 months. MBA-level and Advanced Diploma programs range from 7 to 11 months depending on your pace."
                }
              },
              {
                "@type": "Question",
                "name": "Are the courses available online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — all courses are available online with live interactive sessions, giving full flexibility to working professionals and outstation students."
                }
              },
              {
                "@type": "Question",
                "name": "What is the format of the courses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Agency-style learning: live lectures, real case studies, hands-on assignments, and live projects with actual ad budgets from day one."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer job placement assistance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — 100% placement assistance through resume building, mock interviews, and direct connections to our 250+ hiring partner network."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer any discounts or scholarships?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — merit-based scholarships, early-bird discounts, and No-Cost EMI options are available to make elite training accessible to all."
                }
              },
              {
                "@type": "Question",
                "name": "Will I receive a certificate upon completion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You will receive an industry-recognised Operating Media certification plus Google and Meta certifications upon successful completion."
                }
              },
              {
                "@type": "Question",
                "name": "Where are your campuses located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We have state-of-the-art training centres in Andheri West (Mumbai) and Borivali West. You can also join our live online batches."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <main>
        <Breadcum />
        <Faqsection />
        <HiringPartners />
      </main>
    </>
  );
};

export default FaqPage;