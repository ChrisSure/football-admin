import LoginLayoutHeader from "./components/header/LoginLayoutHeader.tsx";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LoginLayoutHeader />
      <div className="mx-auto w-full max-w-[640px] mt-10">{children}</div>
    </>
  );
};

export default LoginLayout;
