import React, { useState, useEffect } from "react";
import axios from "axios";
import { BannerWrapper, BannerContent } from "./styles";

const Banner = () => {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const response = await axios.get("http://localhost:8080/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.status === 200) {
            setUserName(response.data.username);
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Failed to fetch user data:", error);
          setUserName("");
          setIsLoading(false);
          localStorage.removeItem("token");
        }
      } else {
        setUserName("");
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <BannerWrapper>
      <BannerContent>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>{userName ? `${userName}님 환영합니다` : "환영합니다"}</h1>
        )}
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;
