import { useAuth } from "@core/auth/hooks/useAuth.ts";
import { useNavigate } from "react-router-dom";
import SimpleMenu from "@ui/menu/SimpleMenu.tsx";
import type { MenuItem } from "@ui/menu/types/menu.types.ts";

const UserAvatar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  const firstLetter = user.username.charAt(0).toUpperCase();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleProfile = () => {
    console.log("Navigate to profile");
  };

  const handleSettings = () => {
    console.log("Navigate to settings");
  };

  const items: MenuItem[] = [
    { label: "Profile", onClick: handleProfile },
    { label: "Settings", onClick: handleSettings },
    { type: "separator" },
    { label: "Log Out", onClick: handleLogout },
  ];

  return (
    <SimpleMenu
      trigger={
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg hover:bg-secondary/90 transition-colors">
          {firstLetter}
        </div>
      }
      items={items}
    />
  );
};

export default UserAvatar;
