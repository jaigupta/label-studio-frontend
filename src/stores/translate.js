export function translate(start, end, frac) {
  return start + (end - start) * frac;
}

export function getSnapshotAtTimestamp(type, timeline, timestamp) {
  if (!timeline || timeline.length === 0) {
    return [0, null];
  }

  if (timeline.length == 1 && timeline[0].value == null) {
    return [0, null];
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
        width: translate(startArea.width, endArea.width, frac),
      };
    } else if (type === "polygonregion") {
      const points = [];
      for (let i = 0; i < startArea.points.length; i++) {
        const startPoint = startArea.points[i];
        const endPoint = endArea.points[i];
        points.push([translate(startPoint[0], endPoint[0], frac), translate(startPoint[1], endPoint[1], frac)]);
      }
      value = { points };
    }
    return [i, value];
  }
}

function getPoints(type, v) {
  if (type === "rectangleregion") {
    return [v.x, v.y, v.width, v.height, v.rotation];
  } else if (type === "keypointregion") {
    return [v.x, v.y, v.width];
  } else if (type === "polygonregion") {
    const points = [];
    for (let i = 0; i < v.points.length; i++) {
      points.push(v.points[i][0]);
      points.push(v.points[i][1]);
    }
    return points;
  }
}

export function isClose(type, v1, v2) {
  const epsilon = 1e-3;
  let p1 = getPoints(type, v1),
    p2 = getPoints(type, v2);
  for (let i = 0; i < p1.length; i++) {
    if (Math.abs(p1[i] - p2[i]) > epsilon) {
      return false;
    }
  }
  return true;
}
