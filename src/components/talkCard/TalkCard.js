import React from "react";
import "./TalkCard.css";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div class="container">
        <div class="rectangle">
          <div class="diagonal-fill"></div>
          <div class="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
