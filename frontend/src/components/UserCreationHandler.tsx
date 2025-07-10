import { useAuth0 } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/MyUserApi";
import { useEffect } from "react";

const UserCreationHandler = () => {
  const { user, isAuthenticated } = useAuth0();
  const { createUser } = useCreateMyUser();

  useEffect(() => {
    const handleUserCreation = async () => {
      if (isAuthenticated && user?.sub && user?.email) {
        try {
          console.log("Creating user:", { auth0Id: user.sub, email: user.email });
          await createUser({
            auth0Id: user.sub,
            email: user.email,
          });
          console.log("User created successfully");
        } catch (error) {
          console.error("Failed to create user:", error);
        }
      }
    };

    handleUserCreation();
  }, [isAuthenticated, user, createUser]);

  return null; // This component doesn't render anything
};

export default UserCreationHandler;