import AdminLayout from "../../layouts/AdminLayout.tsx";
import Button from "@ui/components/button/Button.tsx";
import { useAuth } from "@auth/contexts/AuthContext.tsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome to Admin Dashboard
        </h2>
        <p className="text-gray-600">
          This is a placeholder admin page. You can add your admin content here.
        </p>
        <div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
