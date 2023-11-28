// KakaoLogin.js 파일
import React from 'react';
import { Button } from '@mui/material';


// 네이버 클라이언트 ID를 환경 변수에서 가져오기
//const NAVER_ID = process.env.REACT_APP_NAVER_ID;

// 네이버 인증 페이지로 이동하는 URL 생성
const KakaoURL = 'https://kauth.kakao.com/oauth/authorize?client_id=4d1c02cba70a29764933231bf09adb34&redirect_uri=http://localhost:3000/account&response_type=code';

const KakaoLogin = () => {
  // 인증 페이지로 이동하는 핸들러
  const oAuthHandler = () => {
    window.location.assign(KakaoURL);
  };

  return (
    <Button
      color="primary"
      fullWidth
      size="large"
      variant="contained"
      onClick={oAuthHandler}
    >
      <img src="../assets/logos/logo-kakao.png" alt="Kakao" width="20" height="20"/>&#160;
      Kakao
    </Button>
  );
};

export default KakaoLogin;

