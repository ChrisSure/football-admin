import AdminLayoutHeader from "./components/header/AdminLayoutHeader.tsx";
import AdminMenu from "./components/menu/AdminMenu.tsx";
import Spinner from "@ui/spinner/Spinner.tsx";

interface AdminLayoutProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const AdminLayout = ({ children, isLoading }: AdminLayoutProps) => {
  return (
    <>
      <AdminLayoutHeader />
      <AdminMenu />
      <div className="mx-auto w-full max-w-[1280px] mt-10 px-6">
        {isLoading ? (
          <div className="flex w-full items-center justify-center py-12">
            <Spinner size="lg" />
          </div>
        ) : (
          children
        )}
      </div>
    </>
  );
};

export default AdminLayout;
