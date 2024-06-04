import React from "react";
import { ListSuratAlQuran } from "../../components/list-surat-alquran";

const AlQuranPage = async () => {
  const res = await fetch("https://api.npoint.io/99c279bb173a6e28359c/data");
  const data = await res.json();

  return (
    <div>
      <ListSuratAlQuran data={data} />
    </div>
  );
};

export default AlQuranPage;
