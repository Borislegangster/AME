import React from 'react';
import { Helmet } from 'react-helmet';
interface SEOProps {
    title: string;
    description: string;
    image?: string;
    article?: boolean;
}
export function SEO({
    title,
    description,
    image,
    article
}: SEOProps) {
    const siteTitle = 'AME Construction';
    const fullTitle = `${title} | ${siteTitle}`;
    const defaultImage = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1'; // Image par défaut
    const siteUrl = 'https://www.ame-construction.fr'; // URL de l'application
    const currentUrl = `${siteUrl}${window.location.pathname}`;
    return (
        <Helmet>
            {/* Balises meta de base */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#ffffff" />
            {/* OpenGraph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content={siteTitle} />
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image || defaultImage} />
            {/* Localisation */}
            <meta name="geo.region" content="FR" />
            <meta name="geo.placename" content="France" />
            <meta name="geo.position" content="48.856614;2.352222" />
            <meta name="ICBM" content="48.856614, 2.352222" />
            {/* Balises additionnelles */}
            <meta name="language" content="fr" />
            <link rel="canonical" href={currentUrl} />
            <meta name="author" content="AME Construction" />
            <meta name="keywords" content="AME Construction, construction, bâtiment, travaux publics, services de construction" />
        </Helmet>
    );
}