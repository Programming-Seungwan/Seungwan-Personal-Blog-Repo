import { Helmet } from 'react-helmet';

export default function CommonMetaComponent({
  description,
  ogLocale,
  ogType,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) {
  return (
    <Helmet>
      <meta name='description' content={description} />
      <meta property='og:locale' content={ogLocale} />
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={ogTitle} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:url' content={`https://seungwan-blog.netlify.app/${ogUrl}`} />
      <meta property='twitter:card' content={twitterCard} />
      <meta property='twitter:title' content={twitterTitle} />
      <meta property='twitter:description' content={twitterDescription} />
      <meta property='twitter:image' content={twitterImage} />
    </Helmet>
  );
}
