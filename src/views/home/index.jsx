import { fetchHomeDataAction } from "@/store/modules/home";
import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HomeBanner from "./homeCpns/homeBanner";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="home-content"></div>
    </HomeWrapper>
  );
});

export default Home;
