import React from "react";
import { AddReportProps } from "./types";

export default function AddReport({ template }: AddReportProps) {

  var url = `https://prod.cashflowy.io/report/${template}/create`;
  
  return (
    <>
      <a style={{fontSize: '20px'}}  target = '_blank' href={url}>Create this report</a>
    </>
  );
}