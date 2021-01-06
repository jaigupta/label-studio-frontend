import React, { Fragment } from "react";
import { Button } from "antd";
import { observer } from "mobx-react";
import { DoubleLeftOutlined, LeftOutlined, RightOutlined, DoubleRightOutlined } from "@ant-design/icons";

import Hint from "../../../components/Hint/Hint";

const VideoControls = ({ item, store }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1em" }}>
      <span style={{ flex: 1 }} />
      <Button
        type="primary"
        onClick={ev => {
          item.slideInTime(-1.0);
        }}
      >
        <Fragment>
          <DoubleLeftOutlined />
          {store.settings.enableTooltips && store.settings.enableHotkeys && item.hotkey && <Hint>[{item.hotkey}]</Hint>}
        </Fragment>
      </Button>
      <Button
        type="primary"
        onClick={ev => {
          item.slideInTime(-0.1);
        }}
      >
        <Fragment>
          <LeftOutlined />
          {store.settings.enableTooltips && store.settings.enableHotkeys && item.hotkey && <Hint>[{item.hotkey}]</Hint>}
        </Fragment>
      </Button>
      <Button
        type="primary"
        onClick={ev => {
          item.slideInTime(0.1);
        }}
      >
        <Fragment>
          <RightOutlined />
          {store.settings.enableTooltips && store.settings.enableHotkeys && item.hotkey && <Hint>[{item.hotkey}]</Hint>}
        </Fragment>
      </Button>
      <Button
        type="primary"
        onClick={ev => {
          item.slideInTime(1.0);
        }}
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
