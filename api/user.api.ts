import { httpsCallable } from "firebase/functions";
import { functions } from "../fireBaseConfig";
import { User } from "../types";

export const userInfo = async (id: string) => {
  return (
    await httpsCallable(
      functions,
      "userInfo"
    )({
      id,
    })
  ).data as User;
};
