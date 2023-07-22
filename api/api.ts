import { httpsCallable } from "firebase/functions";
import { functions } from "../fireBaseConfig";
import { User } from "../types";

export const userInfo = async (id: string) => {
  return (
    await httpsCallable(
      functions,
      "users-info"
    )({
      id,
    })
  ).data as User;
};

export const userList = async () => {
  return (await httpsCallable(functions, "users-list")({})).data as User[];
};

export const matchesCheck = async (targetId: string) => {
  return (
    await httpsCallable(
      functions,
      "matches-check"
    )({
      targetId,
    })
  ).data as { matched: boolean };
};

export const matchesCreate = async (targetId: string) => {
  return (
    await httpsCallable(
      functions,
      "matches-create"
    )({
      targetId,
    })
  ).data as { id: string };
};
