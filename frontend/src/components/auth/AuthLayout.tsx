import MarketingPanel from './MarketingPanel';
// import LoginForm from "./LoginForm";
import type { ReactNode } from 'react';
// import AuthFooter from "./AuthFooter";

interface AuthLayoutProps{
    children: ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <main className="min-h-screen bg-slate-50">

      <div className="flex min-h-screen">

        {/* Left Side */}

        <MarketingPanel />

        {/* Right Side */}

        <section className="flex flex-1 items-center justify-center mx-20">

          <div className="w-full ">

            {children}

            {/* <AuthFooter /> */}

          </div>

        </section>

      </div>

    </main>
  );
};

export default AuthLayout;