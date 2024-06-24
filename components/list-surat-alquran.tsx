"use client";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { convertToArabicNumber } from "@/lib/convert-number-arabic";
import Link from "next/link";
import { InputSearch } from "./input-search";
import { useSearchParams } from "next/navigation";

interface Surah {
  arti: string;
  asma: string;
  ayat: number;
  nama: string;
  type: string;
  urut: string;
  audio: string;
  nomor: string;
  rukuk: string;
  keterangan: string;
}

interface AlquranData {
  data: Surah[];
}


export const ListSuratAlQuran = ({ data }: AlquranData) => {
  const searchParam = useSearchParams();
  const param = searchParam.get("search");
  const decodedKeyword = decodeURI(param ?? "");

  const filteredData = data.filter(
    (e) => e.nama.toLowerCase().includes(decodedKeyword)
  );
  const datas = filteredData.length > 0 ? filteredData : data;

  return (
    <div className="max-w-[400px] mx-auto grid gap-2 px-2 sm:max-w-[800px]">
      <InputSearch placeholder="al kahfi, al kafirun, at tiin, nuh, asy syams, dll" />
      {param !== null && filteredData.length === 0 ? (
        <div className={`flex flex-col items-center justify-center h-screen`}>
          <h1 className="font-bold text-3xl">Not Found</h1>
          <Link href="/al-quran" className="text-muted-foreground underline">
            Back
          </Link>
        </div>
      ) : (
        datas.map((e) => (
          <div key={e.nomor} className="relative">
            <Link href={`/al-quran/surat/${e.nomor}`}>
              <Card className="grid grid-cols-12 hover:border-primary hover:bg-primary/10 cursor-pointer">
                <CardHeader className="col-span-1 flex items-start pl-4">
                  <CardTitle>
                    {convertToArabicNumber(parseInt(e.nomor))}
                  </CardTitle>
                </CardHeader>

                <CardHeader className="col-span-6 ml-3 pr-0">
                  <CardTitle>{e.nama}</CardTitle>
                  <CardDescription>
                    {e.type[0].toUpperCase() + e.type.slice(1)} | {e.ayat} Ayat
                  </CardDescription>
                </CardHeader>

                <CardHeader className="col-span-5 flex items-end">
                  <CardTitle >{e.asma}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};
