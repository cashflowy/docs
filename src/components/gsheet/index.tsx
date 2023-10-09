import React from "react";
import { GsheetProps } from "./types";

export default function Gsheet({ src, title }: GsheetProps) {

  var temp = src.split('/edit#');
  var embeded_src=temp[0]+'/pubhtml?'+temp[1]+'&single=true&widget=true&headers=false';
  
  return (
    <>
      <div className="embedContainer">
        <iframe
          src={embeded_src}
          // src={`https://docs.google.com/spreadsheets/d/${sheet_id}/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false`}
          title={title}
          allowFullScreen
        >
        </iframe>
      </div>
      <a style={{fontSize: '12px'}}  target = '_blank' href={src}>Open in new tab</a>
      {/*<div>
      <iframe 
        // sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"
        width="100%" 
        height="800px"
        frameborder="0"
        // title="embed"
        loading="lazy"
        src={embeded_src}
      ></iframe>

      </div>*/}
    </>
  );
}