import AdminLayoutHeader from "./components/header/AdminLayoutHeader.tsx";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AdminLayoutHeader />
      <div className="mx-auto w-full max-w-[640px] mt-10">{children}</div>
    </>
  );
};

export default AdminLayout;
