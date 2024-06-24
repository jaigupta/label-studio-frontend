import React, { Fragment } from "react";
import { Button } from "antd";
import { observer } from "mobx-react";
import { DoubleLeftOutlined, LeftOutlined, RightOutlined, DoubleRightOutlined } from "@ant-design/icons";

import Hint from "../../../components/Hint/Hint";

const VideoControls = ({ item, store }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ flex: 1 }} />
      <Button
        type="text"
        onClick={ev => {
          item.slideInTime(-1.0);
        }}
        shape="circle"
      >
        <Fragment>
          <DoubleLeftOutlined />
          {store.settings.enableTooltips && store.settings.enableHotkeys && item.hotkey && <Hint>[{item.hotkey}]</Hint>}
        </Fragment>
      </Button>
      <Button
        type="text"
        onClick={ev => {
          item.slideInTime(-0.1);
        }}
        shape="circle"
      >
        <Fragment>
          <LeftOutlined />
          {store.settings.enableTooltips && store.settings.enableHotkeys && item.hotkey && <Hint>[{item.hotkey}]</Hint>}
        </Fragment>
      </Button>
      <Button
        type="text"
        onClick={ev => {
          item.slideInTime(0.1);
        }}
        shape="circle"
      >
        <Fragment>
          <RightOutlined />
          {store.settings.enableTooltips && store.settings.enableHotkeys && item.hotkey && <Hint>[{item.hotkey}]</Hint>}
        </Fragment>
      </Button>
      <Button
        type="text"
        onClick={ev => {
          item.slideInTime(1.0);
        }}
        shape="circle"
      >
        <Fragment>
          <DoubleRightOutlined />
          {store.settings.enableTooltips && store.settings.enableHotkeys && item.hotkey && <Hint>[{item.hotkey}]</Hint>}
        </Fragment>
      </Button>
    </div>
  );
};

export default observer(VideoControls);
