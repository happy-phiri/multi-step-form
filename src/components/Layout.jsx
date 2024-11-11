import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <main className="bg-magnolia min-h-[100vh]">
      <div className="w-full min-h-[100vh] grid lg:place-content-center">
        <div className="grid lg:grid-cols-form-cols lg:p-3 rounded-lg w-full">
          <aside className="lg:col-span-2  max-lg:h-[200px]">
            <Header />
          </aside>
          <section className="lg:col-span-6 min-h-[510px] max-lg:mx-auto">
            <Outlet />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Layout;
