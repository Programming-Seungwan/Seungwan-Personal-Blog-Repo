import CommonMetaComponent from '../commonMetaComponent/CommonMetaComponent';

export default function SportsHelmet() {
  return (
    <CommonMetaComponent
      description={'스포츠, 나의 행복'}
      ogLocale={'ko_KR'}
      ogType={'website'}
      ogTitle={'스포츠'}
      ogDescription={'스포츠, 나의 행복'}
      ogImage={'/images/sportsThumbnail.png'}
      ogUrl={'sports'}
      twitterCard={'summary_large_image'}
      twitterTitle={'스포츠'}
      twitterDescription={'스포츠, 나의 행복'}
      twitterImage={'/images/sportsThumbnail.png'}
    />
  );
}
