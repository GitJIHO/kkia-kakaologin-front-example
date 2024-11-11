// Home.jsx
import React from 'react';

function Home() {
  const handleKakaoLogin = () => {
    window.location.href = 'http://kkia.backapi.site/api/auth/oauth/kakao';
  };

  return (
    <div>
      <h1>홈페이지</h1>
      <button onClick={handleKakaoLogin}>카카오 로그인</button>
    </div>
  );
}

export default Home;
