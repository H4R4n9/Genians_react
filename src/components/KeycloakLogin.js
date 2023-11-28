// KeycloakLogin.js 파일
import React from 'react';
import { Button } from '@mui/material';


// 키클록 클라이언트 ID와 렐름 이름을 환경 변수에서 가져오기
const KEYCLOAK_ID = process.env.REACT_APP_KEYCLOAK_ID;
const KEYCLOAK_REALM = process.env.REACT_APP_KEYCLOAK_REALM;

// 키클록 인증 페이지로 이동하는 URL 생성
const KeycloakURL = `http://localhost:30010/realms/test/protocol/openid-connect/auth?client_id=login-app&response_type=code&redirect_uri=http://localhost:3000/account&scope=openid,profile,email`;

const KeycloakLogin = () => {
  // 인증 페이지로 이동하는 핸들러
  const oAuthHandler = () => {
    window.location.assign(KeycloakURL);
  };

  return (
    <Button
      color="primary"
      fullWidth
      size="large"
      variant="contained"
      onClick={oAuthHandler}
    >
      <img src="../assets/logos/logo-keycloak.png" alt="keycloak" width="20" height="20" />&#160;
      Keycloak
    </Button>
  );
};

export default KeycloakLogin;

