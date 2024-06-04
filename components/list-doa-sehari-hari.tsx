"use client";
import Link from "next/link";
import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface ListDoaSehariHari {
  data: [
    {
      id: string;
      doa: string;
      ayat: string;
      latin: string;
      artinya: string;
    },
  ];
}

export const ListDoaSehariHari = ({ data }: ListDoaSehariHari) => {
  return (
    <div className="max-w-[400px] mx-auto grid gap-2">
      {data.map((v) => (
        <Link href={`/sehari-hari/${v.id}`}>
          <Card className="">
            <CardHeader>
              <CardTitle>{v.doa}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};
