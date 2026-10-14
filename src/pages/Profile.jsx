
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome to your profile!</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
}
export default Profile;
