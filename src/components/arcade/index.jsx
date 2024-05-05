import React from "react";

export default function Arcade({id}) {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "calc(55.43981481481482% + 41px)",
        height: 0,
        width: "100%"
      }}
    >
      <iframe
        src={`https://demo.arcade.software/${id}?embed&show_copy_link=true`}
        title="PO Requests - Cashflowy POR"
        frameBorder={0}
        loading="lazy"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen="true"
        allow="clipboard-write"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          colorScheme: "light"
        }}
      />
    </div>
  );
}