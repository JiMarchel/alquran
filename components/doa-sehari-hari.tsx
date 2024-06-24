import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { InterfaceDoaSehariHari } from "./list-doa-sehari-hari";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const DoaSehariHari = ({ data }: InterfaceDoaSehariHari) => {
  return (
    <div className="max-w-[400px] mx-auto mt-8 space-y-4 px-2 sm:max-w-[800px]">
      <Link
        href="/sehari-hari"
        className="font-medium mb-16 text-xl text-primary  flex items-end"
      >
        <ChevronLeft />
        Back
      </Link>
      {data.map((v) => (
        <Card
          key={v.id}
        >
          <CardHeader className="space-y-16">
            <CardTitle className="text-center">{v.doa}</CardTitle>
            <CardTitle className="text-end leading-relaxed">{v.ayat}</CardTitle>
          </CardHeader>

          <CardContent className="grid gap-4">
            <p className="font-bold">{v.latin}</p>
            <p>{v.artinya}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
