import { useState, useEffect } from 'react';

// Custom hook to set and get cookies
function useCookies() {
  const [cookies, setCookies] = useState({});

  // Function to set a cookie
  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expirationDate.toUTCString()}; path=/`;
    setCookies({ ...cookies, [name]: value });
  };

  // Function to get a cookie
  const getCookie = (name) => {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let cookie of cookieArray) {
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  };

    // Function to remove a cookie
    const removeCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        const { [name]: removedCookie, ...remainingCookies } = cookies;
        setCookies(remainingCookies);
      };
    

  // Load cookies on component mount
  useEffect(() => {
    const cookieObject = {};
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let cookie of cookieArray) {
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      const [name, value] = cookie.split('=');
      cookieObject[name] = value;
    }
    setCookies(cookieObject);
  }, []);

  return { cookies, setCookie, getCookie , removeCookie };
}

export default useCookies;
