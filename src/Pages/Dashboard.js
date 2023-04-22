import data from "../data";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {data.map((link) => {
        return (
          <Link className="h" to={`/stock/${link.symbol}`}>
            <h2>{link.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
