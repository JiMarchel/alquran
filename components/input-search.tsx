"use client";
import { Search } from "lucide-react";
import React, { FormEvent, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const InputSearch = ({ placeholder }: { placeholder: string }) => {
  const ref = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const param = searchParams.get("search");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let value = ref.current!.value;
    if (!value) return;
    router.push(`${pathname}?search=${value}`);
  };

  return (
    <form onSubmit={onSubmit} className="w-full relative">
      <input
        defaultValue={param ?? undefined}
        className="px-2 py-3 w-full rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring "
        type="text"
        ref={ref}
        placeholder={placeholder}
      />
      <button className="absolute right-2 top-3" type="submit">
        <Search />
      </button>
    </form>
  );
};
