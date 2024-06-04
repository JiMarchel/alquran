import React from "react";

const SehariHariIdPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://doa-doa-api-ahmadramadhan.fly.dev/api/${params.id}`,
  );
  const data = await res.json();
  return (
    <div>
      {data.map((v) => (
        <div>{v.ayat}</div>
      ))}
    </div>
  );
};

export default SehariHariIdPage;
