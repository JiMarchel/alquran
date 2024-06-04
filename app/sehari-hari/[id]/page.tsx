import { DoaSehariHari } from "@/components/doa-sehari-hari";
import React from "react";

const SehariHariIdPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://doa-doa-api-ahmadramadhan.fly.dev/api/${params.id}`,
  );
  const data = await res.json();
  return (
    <div>
      <DoaSehariHari data={data} />
    </div>
  );
};

export default SehariHariIdPage;
