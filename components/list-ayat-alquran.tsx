import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { convertToArabicNumber } from "@/lib/convert-number-arabic";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

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
    <div className="max-w-[400px] space-y-2 mx-auto overflow-hidden px-2 sm:max-w-[800px] ">
      <Link
        href="/al-quran"
        className=" font-medium text-xl text-primary flex items-end "
      >
        <ChevronLeft />
        Back
      </Link>
      <div className="my-8">
        <h1 className="text-center text-3xl font-bold my-16 ">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </h1>
      </div>
      {data.map((e) => (
        <Card
          className=""
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
