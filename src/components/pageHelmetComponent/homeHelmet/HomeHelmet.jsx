import CommonMetaComponent from '../commonMetaComponent/CommonMetaComponent';

export default function HomeHelmet() {
  return (
    <CommonMetaComponent
      description={'개발, 운동, 여행의 3박자를 기록합니다'}
      ogLocale={'ko_KR'}
      ogType={'website'}
      ogTitle={'김승완 블로그'}
      ogDescription={'개발, 운동, 여행의 3박자를 기록합니다'}
      ogImage={'/images/blog-favicon.png'}
      ogUrl={''}
      twitterCard={'summary_large_image'}
      twitterTitle={'김승완 블로그'}
      twitterDescription={'개발, 운동, 여행의 3박자를 기록합니다'}
      twitterImage={'/images/blog-favicon.png'}
    />
  );
}
