import React from "react";
import { Card } from "antd";
import "./StoryList.scss";

const StoryList = ({ style }) => {
  return (
    <div style={style}>
      <Card title="Stories" size="small">
        Storeis from people you follow will show up here.
      </Card>
    </div>
  );
};

export default StoryList;
