import { useState, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { User } from "../types";

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
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, error } as State;
};
