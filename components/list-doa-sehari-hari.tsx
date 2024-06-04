"use client";
import Link from "next/link";
import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export interface InterfaceDoaSehariHari {
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

export const ListDoaSehariHari = ({ data }: InterfaceDoaSehariHari) => {
  return (
    <div className="max-w-[400px] mx-auto grid gap-2">
      {data.map((v) => (
        <Link href={`/sehari-hari/${v.id}`}>
          <Card className="hover:border-primary hover:bg-primary/10 cursor-pointer">
            <CardHeader>
              <CardTitle>
                {v.id} - {v.doa}
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};
