import CommonMetaComponent from '../../commonMetaComponent/CommonMetaComponent';

export default function FrontendPostHelmet({ pageContext }) {
  const descriptionAndTitle = pageContext.title;
  const slug = pageContext.slug;
  const imageSrc = pageContext.thumbnailImage.gatsbyImageData.images.fallback.src;
  return (
    <CommonMetaComponent
      description={descriptionAndTitle}
      ogLocale={'ko_KR'}
      ogType={'website'}
      ogTitle={descriptionAndTitle}
      ogDescription={descriptionAndTitle}
      ogImage={imageSrc}
      ogUrl={slug}
      twitterCard={'summary_large_image'}
      twitterTitle={descriptionAndTitle}
      twitterDescription={descriptionAndTitle}
      twitterImage={imageSrc}
    />
  );
}
