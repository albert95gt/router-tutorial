import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav  style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expences">Expences</Link>  
      </nav>
        <Outlet />
    </div>
  );
};
