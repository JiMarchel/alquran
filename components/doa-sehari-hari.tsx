import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { InterfaceDoaSehariHari } from "./list-doa-sehari-hari";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const DoaSehariHari = ({ data }: InterfaceDoaSehariHari) => {
  return (
    <div className="max-w-[400px] mx-auto mt-8 space-y-4">
      <Link
        href="/sehari-hari"
        className="font-medium text-xl text-primary underline flex items-center"
      >
        <ChevronLeft />
        Back
      </Link>
      {data.map((v) => (
        <Card
          key={v.id}
          className="hover:border-primary hover:bg-primary/10 bg-gradient-to-t from-primary/20"
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
