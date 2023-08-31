import { useState, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { User } from "../types";
import { userInfo } from "../api/api";

/**
 * Custom React hook that returns the user data.
 */
export const useUser = () => {
  const asyncStorageUser = useAsyncStorage("user");
  type State = {
    user: User;
    loading: boolean;
    error: string;
  };

  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchUser = async () => {
    setLoading(true);
    setError("");
    const userData = await asyncStorageUser.getItem();
    try {
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        const user = await userInfo(parsedUserData.id);

        console.log("User Info =>", user);
        // await asyncStorageUser.setItem(user as any);
        setUser(user);
      } else {
        setUser(null);
        await asyncStorageUser.removeItem();
      }
    } catch (err) {
      console.error(err);
      console.error("Could not fetch user");
      setError(err.message);
      setUser(null);
      await asyncStorageUser.removeItem();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, error } as State;
};
