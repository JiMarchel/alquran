"use client";
import Link from "next/link";
import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { InputSearch } from "./input-search";
import { useSearchParams } from "next/navigation";

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
  const searchParam = useSearchParams();
  const param = searchParam.get("search");
  const decodedKeyword = decodeURI(param ?? "");

  const filteredData = data.filter(
    (e) => e.doa.toLowerCase().includes(decodedKeyword)
  );
  const datas = filteredData.length > 0 ? filteredData : data;

  return (
    <div className="max-w-[400px] mx-auto grid gap-2 px-2 sm:max-w-[800px]">
      <InputSearch placeholder="sebelum tidur, bangun tidur, masuk kamar mandi, dll" />
      {param !== null && filteredData.length === 0 ? (
        <div className={`flex flex-col items-center justify-center h-screen`}>
          <h1 className="font-bold text-3xl">Not Found</h1>
          <Link href="/sehari-hari" className="text-muted-foreground underline">
            Back
          </Link>
        </div>
      ) : (
        datas.map((v) => (
          <Link href={`/sehari-hari/${v.id}`} key={v.id}>
            <Card className="hover:border-primary hover:bg-primary/10 cursor-pointer">
              <CardHeader>
                <CardTitle>
                  {v.id} - {v.doa}
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))
      )}
    </div>
  );
};
