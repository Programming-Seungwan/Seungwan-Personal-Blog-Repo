import CommonMetaComponent from '../commonMetaComponent/CommonMetaComponent';

export default function TechHelmet() {
  return (
    <CommonMetaComponent
      description={'기타 개발 이야기'}
      ogLocale={'ko_KR'}
      ogType={'website'}
      ogTitle={'CE & CS'}
      ogDescription={'기타 개발 이야기'}
      ogImage={'/images/techThumbnail.png'}
      ogUrl={'tech'}
      twitterCard={'summary_large_image'}
      twitterTitle={'CE & CS'}
      twitterDescription={'기타 개발 이야기'}
      twitterImage={'/images/techThumbnail.png'}
    />
  );
}
