import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/sidebar";

export default function BasePage() {
  return (
    <main>
      <Header />
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </main>
  )
}