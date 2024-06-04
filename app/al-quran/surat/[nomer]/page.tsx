import { ListAyat } from "@/components/list-ayat";
import React from "react";

const SuratNomerPage = async ({ params }: { params: { nomer: string } }) => {
  const res = await fetch(
    `https://api.npoint.io/99c279bb173a6e28359c/surat/${params.nomer}`,
  );
  const data = await res.json();

  return (
    <div>
      <ListAyat data={data} />
    </div>
  );
};

export default SuratNomerPage;
