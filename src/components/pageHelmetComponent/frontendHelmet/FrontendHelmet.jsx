import CommonMetaComponent from '../commonMetaComponent/CommonMetaComponent';

export default function FrontendHelmet() {
  return (
    <CommonMetaComponent
      description={'프론트엔드 개발 이야기'}
      ogLocale={'ko_KR'}
      ogType={'website'}
      ogTitle={'프론트엔드'}
      ogDescription={'프론트엔드 개발 이야기'}
      ogImage={'/images/frontendThumbnail.png'}
      ogUrl={'frontend'}
      twitterCard={'summary_large_image'}
      twitterTitle={'프론트엔드'}
      twitterDescription={'프론트엔드 개발 이야기'}
      twitterImage={'/images/frontendThumbnail.png'}
    />
  );
}
