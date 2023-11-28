// GoogleLogin.js 파일
import React from 'react';
import { Button } from '@mui/material';

// 구글 클라이언트 ID를 환경 변수에서 가져오기
const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;

// 구글 인증 페이지로 이동하는 URL 생성
const GoogleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=881116309214-d2h90s8g5r04k16a3brmedalkkcrtco2.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:3000/account&scope=https://www.googleapis.com/auth/userinfo.email`;

const GoogleLogin = () => {
  // 인증 페이지로 이동하는 핸들러
  const oAuthHandler = () => {
    window.location.assign(GoogleURL);
  };

  return (
    <Button
      color="primary"
      fullWidth
      size="large"
      variant="contained"
      onClick={oAuthHandler}
    >
      <img src="../assets/logos/logo-google.png" alt="Google" width="20" height="20"/>&#160;
      Google
    </Button>

  );
};

export default GoogleLogin;

