// MainPage.jsx
import React, { useEffect, useState } from 'react';

function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 토큰 확인
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <h1>환영합니다! 메인 페이지입니다.</h1>
      ) : (
        <h1>로그인이 필요합니다. 로컬스토리지에 토큰이 없습니다.</h1>
      )}
    </div>
  );
}

export default MainPage;
