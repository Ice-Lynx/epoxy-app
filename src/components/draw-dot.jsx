import React, { useState } from "react";
import styled from "styled-components";

export function DrawDot() {
  const [circles, setCircles] = useState([]);

  const getClickCoords = (event) => {
    // from: https://stackoverflow.com/a/29296049/14198287
    var e = event.target;
    var dim = e.getBoundingClientRect();
    var x = event.clientX - dim.left;
    var y = event.clientY - dim.top;
    return [x, y];
  };

  const addCircle = (event) => {
    let [x, y] = getClickCoords(event);
    let newCircle = <circle key={circles.length + 1} cx={x} cy={y} r="4" />;
    let allCircles = [...circles, newCircle];

    // Point to point distance calculation
    function calcDistance(x1, y1, x2, y2) {
      var deltaX = x2 - x1;
      var deltaY = y2 - y1;
      let d = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      return d;
    }

    // If distance between previous and new circle is smaller than minDistance then user can not add a new circle
    let minDist = 10;

    // Logic that checks if there is free space to draw another circle
    if (circles.length < 1) {
      console.log("Array was empty, initial circle added");
      setCircles(allCircles);
    } else if (
      circles.every(
        (circles) =>
          calcDistance(circles.props.cx, circles.props.cy, x, y) > minDist
      ) === true
    ) {
      console.log(
        "New circle location has no conflicts. New circle added"
      );
      setCircles(allCircles);
    } else {
      console.log("There is no room to draw a new circle. Drawing request rejected");
    }
  };

  // console.log(circles);

  return (
    <Container>
      <p>Click to draw dots</p>
      <ClickableSVG onClick={addCircle}>
        {/* This loads your circles in the circles hook here */}
        {circles}
      </ClickableSVG>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  border: solid;
  border-width: 1px;
`;

const ClickableSVG = styled.svg`
  width: 100%;
  height: 500px;
  border: solid;
  border-width: 1px;
  border-radius: 1px;
  & * {
    pointer-events: none;
  }
`;
