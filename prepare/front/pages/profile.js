import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Router from "next/router";

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!(me && me.id)) {
      window.alert("로그인이 필요합니다.");
      Router.push("/");
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm></NicknameEditForm>
        <FollowList header="팔로잉" data={me.Followings}></FollowList>
        <FollowList header="팔로워" data={me.Followers}></FollowList>
      </AppLayout>
    </>
  );
};

export default Profile;
