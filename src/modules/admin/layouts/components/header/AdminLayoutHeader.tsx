import { Link } from "react-router-dom";
import UserAvatar from "./components/user-avatar/UserAvatar.tsx";

const AdminLayoutHeader = () => {
  return (
    <header className="bg-primary py-4 px-6 relative z-50">
      <div className="mx-auto w-full max-w-[1280px] flex items-center justify-between">
        <Link to="/admin" className="text-white text-2xl font-bold">Admin</Link>
        <UserAvatar />
      </div>
    </header>
  );
};

export default AdminLayoutHeader;
