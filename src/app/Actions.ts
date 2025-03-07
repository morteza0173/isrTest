"use server";

import { revalidateTag } from "next/cache";

export interface data {
  title: string;
  id: string;
}

export async function getData(): Promise<data[]> {
  const response = await fetch(
    "https://66c9e8f159f4350f064dd830.mockapi.io/posts",
    {
      method: "GET",
      headers: { "content-type": "application/json" },
      next: { tags: ["getData"], revalidate: 3600 },
    }
  );

  const data: Promise<data[]> = await response.json();
  return data;
}

export async function revalidateData() {
  revalidateTag("getData");
}

export async function addDataWithoutRevalidate(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  await fetch("https://66c9e8f159f4350f064dd830.mockapi.io/posts", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function addData(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  await fetch("https://66c9e8f159f4350f064dd830.mockapi.io/posts", {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  revalidateTag("getData");
}

export async function deleteData(id: string) {
  await fetch(`https://66c9e8f159f4350f064dd830.mockapi.io/posts/${id}`, {
    method: "DELETE",
  });
  revalidateTag("getData");
}
