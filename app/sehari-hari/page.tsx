import { ListDoaSehariHari } from "@/components/list-doa-sehari-hari";
import React from "react";

const SehariHariPage = async () => {
  const res = await fetch("https://doa-doa-api-ahmadramadhan.fly.dev/api");
  const data = await res.json();

  return (
    <div>
      <ListDoaSehariHari data={data} />
    </div>
  );
};

export default SehariHariPage;
