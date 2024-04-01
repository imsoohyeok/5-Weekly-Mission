import { Footer } from "../footer";
import { NavBar } from "../navbar";
import { useGetUser } from "../data/useGetUser";

export const Layout = ({ children }) => {
  const { data } = useGetUser();
  const { email, profileImage } = data || {};
  const profile = data ? { email, profileImage } : null;

  return (
    <div>
      <NavBar profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
