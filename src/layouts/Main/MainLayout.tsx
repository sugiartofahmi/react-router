import { ReactNode, FC, Fragment } from "react";
import Navbar from "../../components/Navbar";

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className="flex w-full h-screen items-center justify-center">
        {children}
      </main>
    </Fragment>
  );
};

export default MainLayout;
