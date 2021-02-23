import React, { useState } from "react";
import styled from "styled-components";

export function DrawDot() {
  const [circles, setCircles] = useState([]);
  const [lines, setLines] = useState([]);

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

    let newCircle = <circle key={x * 100000 + y} cx={x} cy={y} r="4" />;
    let allCircles = [...circles, newCircle];

    let newLine = <line></line>;
    if (circles.length > 0) {
      newLine = (
        <line
          key={x * 100000 + y}
          x1={circles[circles.length - 1].props.cx}
          y1={circles[circles.length - 1].props.cy}
          x2={x}
          y2={y}
          stroke="black"
        />
      );
    }
    let allLines = [...lines, newLine];

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
      setCircles(allCircles);
      console.log("Array was empty, first element added");
    } else if (
      circles.every(
        (circles) =>
          calcDistance(circles.props.cx, circles.props.cy, x, y) > minDist
      ) === true
    ) {
      setCircles(allCircles);
      // if (circles.length > 2) {
      //   allLines.push(
      //     <line
      //       key={x * 100000 + y}
      //       x1={x}
      //       y1={y}
      //       x2={circles[0].props.cx}
      //       y2={circles[0].props.cy}
      //       stroke="black"
      //     />
      //   );
      // }
      setLines(allLines);
      console.log("New circle added");
    } else {
      let clickedElement = circles.findIndex(
        (circles) =>
          calcDistance(circles.props.cx, circles.props.cy, x, y) < minDist
      );
      console.log("No room");
      console.log(clickedElement);

      allCircles.pop();
      allCircles.splice(clickedElement, 1);

      allLines.pop();
      allLines.splice(
        clickedElement - 1,
        2,
        <line
          key={x * 100000 + y}
          x1={circles[clickedElement - 1].props.cx}
          y1={circles[clickedElement - 1].props.cy}
          x2={circles[clickedElement + 1].props.cx}
          y2={circles[clickedElement + 1].props.cy}
          stroke="black"
        />
      );

      setCircles(allCircles);
      setLines(allLines);
    }
  };

  console.log(circles);

  return (
    <Container>
      <p>Click to draw dots</p>
      <ClickableSVG onMouseDown={addCircle}>
        {circles}
        {lines}
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
