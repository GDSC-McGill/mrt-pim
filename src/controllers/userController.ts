import { findUserByEmail, findUserById, findAllUsers, deleteUserById } from "@/services/userService";

export async function findUserByEmail(email: string): Promise<User | null> {
  const user = await findUserByEmail(email);
  return user;
}

export async function findUserById(id: string): Promise<User | null> {
  const user await findUserById(id);
  return user;
}

export async function findAllUsers(): Promise<User[] | null> {
  const users = await findAllUsers();
  return users;
}

export async function deleteUserById(id: string): Promise<User | null> {
  const deletedUser = deleteUserById(id);
  return deletedUser;
}
