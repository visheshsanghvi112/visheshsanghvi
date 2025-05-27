
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Vishesh Sanghvi - Full Stack Developer & BDA Student',
  description = 'Portfolio of Vishesh Sanghvi - Full Stack Developer specializing in web development, database management, and data analytics.',
  keywords = 'Vishesh Sanghvi, Web Developer, Full Stack Developer, Database Management, Big Data Analytics, Mumbai Developer',
  image = '/lovable-uploads/a9d5c5fd-da0c-44b1-8abb-8f97d994e746.png',
  url = 'https://www.visheshsanghvi.me/',
  type = 'website'
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://www.visheshsanghvi.me${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://www.visheshsanghvi.me${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Vishesh Sanghvi" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Vishesh Sanghvi Portfolio" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@visheshsanghvi" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Vishesh Sanghvi",
          "jobTitle": "Full Stack Developer",
          "description": "Full Stack Developer specializing in web development and Big Data Analytics",
          "url": "https://www.visheshsanghvi.me",
          "sameAs": [
            "https://github.com/visheshsanghvi",
            "https://www.linkedin.com/in/vishesh-sanghvi/",
            "https://leetcode.com/u/visheshsanghvi112/"
          ],
          "image": fullImageUrl,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressCountry": "India"
          },
          "email": "visheshsanghvi112@gmail.com",
          "telephone": "+917977282697"
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
