import LoginLayout from "../layouts/LoginLayout.tsx";
import Input from "../../ui/components/input/Input.tsx";
import Button from "../../ui/components/button/Button.tsx";
import Label from "../../ui/components/label/Label.tsx";

const Login = () => {
  return (
    <LoginLayout>
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-gray">Login</h1>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <Button variant={"outline"}>Submit</Button>
      </div>
    </LoginLayout>
  );
};

export default Login;
