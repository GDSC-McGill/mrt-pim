"use server";
import { User } from "@prisma/client";
import { findUserByEmail, findUserById, findAllUsers, deleteUserById} from "@/services/userService";

export async function getUserByEmail(email: string): Promise<User | null> {
  const user = await findUserByEmail(email);
  return user;
}

export async function getUserById(id: string): Promise<User | null> {
  const user = await findUserById(id);
  return user;
}

export async function getAllUsers(): Promise<User[] | null> {
  const users = await findAllUsers();
  return users;
}

export async function removeUserById(id: string): Promise<User | null> {
  const deletedUser = deleteUserById(id);
  return deletedUser;
}
