import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">iStocks</Link>
      <Link to="/about">About</Link>
      <Link to="/stock">Stocks</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
