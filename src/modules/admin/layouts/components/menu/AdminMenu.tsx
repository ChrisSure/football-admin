import { useAuth } from "@core/auth/hooks/useAuth.ts";
import { useNavigate } from "react-router-dom";
import { ADMIN_MENU_ITEMS } from "./constants/admin-menu.constants.ts";

const AdminMenu = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user?.role !== "admin") {
    return null;
  }

  const handleMenuItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3 px-6">
      <div className="mx-auto w-full max-w-[1280px] flex gap-6 items-center">
        {ADMIN_MENU_ITEMS.map((item) => (
          <button
            key={item.path}
            onClick={() => handleMenuItemClick(item.path)}
            className="px-4 py-2 rounded-md text-gray hover:bg-gray-100 transition-colors cursor-pointer font-medium"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default AdminMenu;
