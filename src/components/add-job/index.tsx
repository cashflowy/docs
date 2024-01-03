import React from "react";
import { AddJobProps } from "./types";

export default function AddJob({ template }: AddJobProps) {

  var url = `https://console.cashflowy.io/job/${template}/create`;
  
  return (
    <>
      <a style={{fontSize: '20px'}}  target = '_blank' href={url}>Add this job</a>
    </>
  );
}