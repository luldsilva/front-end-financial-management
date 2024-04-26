import { ReactNode } from "react";

interface BackgroundProps {
    children: ReactNode;
  }

const Background = ({children}: BackgroundProps) => {
  return (
    <div className="flex h-screen">
      <div className="bg-white w-2/5">
        {children}
      </div>
      <div className="bg-light-blue w-3/5"></div>
    </div>
  );
};

export default Background;
