import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "일워" },
    { nickname: "이워" },
    { nickname: "삼워" },
    { nickname: "사워" },
    { nickname: "오워" },
    { nickname: "육워" },
  ];
  const followingList = [
    { nickname: "일잉" },
    { nickname: "이잉" },
    { nickname: "삼잉" },
    { nickname: "사잉" },
    { nickname: "오잉" },
    { nickname: "육잉" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm></NicknameEditForm>
        <FollowList header="팔로잉 목록" data={followingList}></FollowList>
        <FollowList header="팔로워 목록" data={followerList}></FollowList>
      </AppLayout>
    </>
  );
};

export default Profile;
