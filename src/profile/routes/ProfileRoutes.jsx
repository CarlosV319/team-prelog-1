// import { useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { EditProfilePage } from "../pages/EditProfilePage";
import { ProfilePage } from "../pages/ProfilePage";

export const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<ProfilePage />} />

      <Route exact path="/profile/:id" element={<EditProfilePage />}></Route>
    </Routes>
  );
};
