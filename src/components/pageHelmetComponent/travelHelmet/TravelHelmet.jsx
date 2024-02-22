import CommonMetaComponent from '../commonMetaComponent/CommonMetaComponent';
export default function TravelHelmet() {
  return (
    <CommonMetaComponent
      description={'여행, 삶의 원동력'}
      ogLocale={'ko_KR'}
      ogType={'website'}
      ogTitle={'여행'}
      ogDescription={'여행, 삶의 원동력'}
      ogImage={'/images/travelThumbnail.png'}
      ogUrl={'travel'}
      twitterCard={'summary_large_image'}
      twitterTitle={'여행'}
      twitterDescription={'여행, 삶의 원동력'}
      twitterImage={'/images/travelThumbnail.png'}
    />
  );
}
