import UserAvatar from "./components/user-avatar/UserAvatar.tsx";

const AdminLayoutHeader = () => {
  return (
    <header className="bg-primary py-4 px-6 relative z-50">
      <div className="mx-auto w-full max-w-[1280px] flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Admin Header</div>
        <UserAvatar />
      </div>
    </header>
  );
};

export default AdminLayoutHeader;
