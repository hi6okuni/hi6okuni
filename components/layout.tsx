import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="mask w-screen h-24 sticky top-0 backdrop-blur-xl backdrop-opacity-80"></div>
      <main>{children}</main>;
    </>
  );
};
