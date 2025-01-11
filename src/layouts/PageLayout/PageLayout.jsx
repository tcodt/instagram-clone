import { useLocation } from "react-router";
import Sidebar from "../../components/Sidebar/Sidebar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <section className="flex">
      {/* Sidebar on the left */}
      {pathname !== "/auth" ? (
        <div className="w-16 md:w-60">
          <Sidebar />
        </div>
      ) : null}

      {/* Page content on the right */}
      <div className="w-full">{children}</div>
    </section>
  );
};

export default PageLayout;
