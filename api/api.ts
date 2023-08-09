import { httpsCallable } from "firebase/functions";
import { functions } from "../fireBaseConfig";
import { User } from "../types";
import { user } from "../utils/Mocks/Mock_1";

// Funkcja pomocnicza do wywoływania zdalnych funkcji
async function callRemoteFunction<T>(
  functionName: string,
  data: any
): Promise<T> {
  return (await httpsCallable(functions, functionName)(data)).data as T;
}

export const userInfo = async (id: string): Promise<User> => {
  return callRemoteFunction<User>("users-info", { id });
};

export const userList = async (): Promise<User[]> => {
  return callRemoteFunction<User[]>("users-list", {});
};

export const matchesCheck = async (
  targetId: string
): Promise<{ matched: boolean }> => {
  return callRemoteFunction<{ matched: boolean }>("matches-check", {
    targetId,
  });
};

export const matchesCreate = async (
  targetId: string
): Promise<{ id: string }> => {
  return callRemoteFunction<{ id: string }>("matches-create", { targetId });
};

export const userUpdate = async (
  id: string,
  name: string,
  description: string,
  avatar_url: string
): Promise<{ id: string }> =>
  callRemoteFunction<{
    id: string;
  }>("users-update", {
    id,
    name,
    description,
    avatar_url,
  });
