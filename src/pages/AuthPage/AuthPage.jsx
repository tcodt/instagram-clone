import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Image side */}
      <div className="hidden md:block">
        <img src="/auth.png" className="h-[600px]" alt="Phone image" />
      </div>
      {/* Form side */}
      <div>
        <AuthForm />
        <div className="mt-4">
          <div className="text-center text-white text-sm">Get the app</div>
          <div className="flex items-center gap-4 p-4">
            <img src="/playstore.png" className="h-10" alt="Playstore logo" />
            <img src="/microsoft.png" className="h-10" alt="Microsoft logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
