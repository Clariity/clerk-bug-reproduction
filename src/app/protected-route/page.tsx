"use server";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

export default async function Page() {
  const { userId } = auth();

  if (!userId) {
    redirect("/test");
  }

  redirect("/protected-route/1");
}
