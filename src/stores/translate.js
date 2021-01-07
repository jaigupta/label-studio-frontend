export function translate(start, end, frac) {
  return start + (end - start) * frac;
}

export function getSnapshotAtTimestamp(type, timeline, timestamp) {
  if (!timeline || timeline.length === 0) {
    return;
  }

  if (timestamp <= timeline[0].timestamp) {
    return [0, timeline[0].value];
  }
  if (timestamp >= timeline[timeline.length - 1].timestamp) {
    return [timeline.length, timeline[timeline.length - 1].value];
  }
  for (let i = 1; i < timeline.length; i++) {
    if (timestamp > timeline[i].timestamp) {
      continue;
    }
    const startArea = timeline[i - 1].value;
    const endArea = timeline[i].value;
    const frac = (timestamp - timeline[i - 1].timestamp) / (timeline[i].timestamp - timeline[i - 1].timestamp);

    let value;

    if (type === "rectangleregion") {
      value = {
        x: translate(startArea.x, endArea.x, frac),
        y: translate(startArea.y, endArea.y, frac),
        width: translate(startArea.width, endArea.width, frac),
        height: translate(startArea.height, endArea.height, frac),
        rotation: translate(startArea.rotation, endArea.rotation, frac),
      };
    } else if (type === "keypointregion") {
      value = {
        x: translate(startArea.x, endArea.x, frac),
        y: translate(startArea.y, endArea.y, frac),
      };
    }
    return [i, value];
  }
}
