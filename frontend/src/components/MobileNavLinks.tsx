import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white font-bold items-center hover:text-orange-500 py-2"
      >
        User Profile
      </Link>
      <Link
        to="/settings"
        className="flex bg-white font-bold items-center hover:text-orange-500 py-2"
      >
        Settings
      </Link>
      <Button onClick={() => logout()} className="flex items-center hover:text-orange-500 py-2">
        Logout
      </Button>
    </>
  );
};

export default MobileNavLinks;
