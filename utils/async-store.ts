import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Get a property from the device memory.
 *
 * @example
 * const isUserLoggedIn = async () => {
 *  const user = await getStoreItem("user");
 *  return user !== null;
 * }
 */
export const getStoreItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Set a property to the device memory.
 * @param key
 * @param value
 *
 * @example
 * const login = async (user: { email: string, password: string }) => {
 *   ...
 *   await setStoreItem("user", user);
 * }
 */
export const setStoreItem = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Remove a property from the device memory.
 * @param key
 *
 * @example
 * const logout = async () => {
 *  await removeStoreItem("user");
 * }
 */
export const removeStoreItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
