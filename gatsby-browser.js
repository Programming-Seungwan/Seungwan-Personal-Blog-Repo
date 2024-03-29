import './src/global.css';

// Recoil 상태관리 라이브러리를 사용하기 위한 설정에 해당한다
import React from 'react';
import { RecoilRoot } from 'recoil';

export const wrapRootElement = ({ element }) => <RecoilRoot>{element}</RecoilRoot>;
