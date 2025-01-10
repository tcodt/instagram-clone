import { Alert, Box, Button, Divider } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      toast.error("Please fill all the fields!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    navigate("/");
  };

  return (
    <>
      <div className="border border-gray-600 rounded p-4 w-[300px]">
        <div className="flex items-center justify-center flex-col gap-4">
          <img src="/logo.png" className="h-16" alt="Instagram logo" />
          <input
            placeholder="Email"
            type="email"
            className="w-full h-10 bg-transparent py-2 px-4 text-white text-sm border border-gray-600 rounded focus:border-white outline-none"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <input
            placeholder="Password"
            type="password"
            className="w-full h-10 bg-transparent py-2 px-4 text-white text-sm border border-gray-600 rounded focus:border-white outline-none"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

          {!isLogin ? (
            <input
              placeholder="Confirm Password"
              type="password"
              className="w-full h-10 bg-transparent py-2 px-4 text-white text-sm border border-gray-600 rounded focus:border-white outline-none"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}
          <Button variant="contained" className="w-full" onClick={handleAuth}>
            {isLogin ? "Log in" : "Sign up"}
          </Button>

          {/* ---------- OR ---------- */}
          <Box className="w-full mt-4">
            <Divider className="text-white after:bg-white before:bg-white">
              OR
            </Divider>
          </Box>

          <a href="#" className="flex items-center gap-2 mt-4">
            <img src="/google.png" className="h-5" alt="Google" />
            <p className="text-sm text-blue-500">Log in with Google</p>
          </a>
        </div>
      </div>
      <div className="p-4 border border-gray-600 rounded mt-4">
        <div className="text-sm text-white text-center">
          {isLogin ? "Don`t have an account?" : "Already have an account?"}
          <span
            className="cursor-pointer text-blue-500"
            onClick={() => setIsLogin(!isLogin)}
          >
            {" "}
            {isLogin ? "Sign up" : "Log in"}
          </span>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
