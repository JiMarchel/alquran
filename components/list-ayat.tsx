import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { convertToArabicNumber } from "@/lib/convert-number-arabic";

interface ListAyat {
  data: [
    {
      ar: string;
      id: string;
      tr: string;
      nomor: string;
    },
  ];
}

export const ListAyat = ({ data }: ListAyat) => {
  return (
    <div className="space-y-2 mx-1 overflow-hidden">
      <div className="my-8">
        <h1 className="text-center text-3xl font-bold">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </h1>
      </div>
      {data.map((e) => (
        <Card
          className="hover:border-primary hover:bg-primary/10 bg-gradient-to-t from-primary/20"
          key={e.nomor}
        >
          <CardHeader className="flex flex-row items-start justify-between">
            <CardTitle className="text-start pr-5">
              {convertToArabicNumber(parseInt(e.nomor))}
            </CardTitle>
            <CardTitle className="leading-relaxed text-end">{e.ar}</CardTitle>
          </CardHeader>

          <CardContent className="grid gap-4">
            <p
              className="font-bold"
              dangerouslySetInnerHTML={{ __html: e.tr }}
            ></p>
            <p>{e.id}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
