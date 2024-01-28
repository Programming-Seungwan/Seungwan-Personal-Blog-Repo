import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  profileContainer,
  profileImage,
  lifeCareer,
  lifeTitle,
  schoolCareer,
  schoolCareerItem,
  logo,
} from './index.module.css';

export default function Profile() {
  return (
    <div className={profileContainer}>
      <div>
        <StaticImage src='./seungwan.jpg' alt='seungwan photo' className={profileImage} />
      </div>

      <div className={lifeCareer}>
        <div className={lifeTitle}>Seungwan, Kim</div>
        <div className={schoolCareer}>
          <div className={schoolCareerItem}>
            <div>
              <p>Whimoon High School 109th</p>
              <h4>from 2014 ~ 2016</h4>
            </div>
            <StaticImage src='./whimoon.webp' alt='whimoon logo' className={logo} />
          </div>
          <div className={schoolCareerItem}>
            <div>
              <p>Hongik Business Administration</p>
              <h4>from 2018 ~ </h4>
            </div>
            <StaticImage src='./hongik.jpg' alt='hongik logo' className={logo} />
          </div>
          <div className={schoolCareerItem}>
            <div>
              <p>Military Army</p>
              <h4>from 2019.03 ~ 2020. 10</h4>
            </div>
            <StaticImage src='./junjin.JPG' alt='junjin logo' className={logo} />
          </div>
          <div className={schoolCareerItem}>
            <div>
              <p>Hongik Computer Engineering</p>
              <h4>from 2022 ~</h4>
            </div>
            <StaticImage src='./hongik.jpg' alt='hongik logo' className={logo} />
          </div>
        </div>
      </div>
    </div>
  );
}
