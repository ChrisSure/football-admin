import AdminLayoutHeader from "./components/header/AdminLayoutHeader.tsx";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AdminLayoutHeader />
      <div className="mx-auto w-full max-w-[1280px] mt-10 px-6">{children}</div>
    </>
  );
};

export default AdminLayout;
