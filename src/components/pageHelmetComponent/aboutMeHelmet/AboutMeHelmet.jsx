import CommonMetaComponent from '../commonMetaComponent/CommonMetaComponent';

export default function AboutMeHelmet() {
  return (
    <CommonMetaComponent
      description={'나, 김승완'}
      ogLocale={'ko_KR'}
      ogType={'website'}
      ogTitle={'자기 소개'}
      ogDescription={'나, 김승완'}
      ogImage={'/images/seungwan.png'}
      ogUrl={'about'}
      twitterCard={'summary_large_image'}
      twitterTitle={'자기 소개'}
      twitterDescription={'나, 김승완'}
      twitterImage={'/images/seungwan.png'}
    />
  );
}
