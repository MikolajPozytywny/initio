import { httpsCallable } from "firebase/functions";
import { functions } from "../fireBaseConfig";
import { User } from "../types";

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

export const userList = async (
  pageSize: number,
  pageToken?: string
): Promise<User[]> => {
  const data = { pageSize, pageToken };
  return callRemoteFunction<User[]>("users-list", data);
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
  avatar_url: string,
  filters: string[],
  PeopleSeen: string[]
): Promise<{ id: string }> =>
  callRemoteFunction<{
    id: string;
  }>("users-update", {
    id,
    name,
    filters,
    description,
    avatar_url,
    PeopleSeen,
  });
