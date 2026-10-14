
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Welcome to your dashboard!</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
}
export default Dashboard;
