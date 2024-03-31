import { Header } from "../components/Header";

export const MyPage = () => {
    return (
      <div className="my-page">
        <Header/>
        <UserInfo />
        <MyRecipes />
        <Footer />
      </div>
    );
};