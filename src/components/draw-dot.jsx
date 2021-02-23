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
    let [x, y] = getClickCoords(event); //click coordinates
    let newCircle = <circle key={circles.length + 1} cx={x} cy={y} r="4" />;
    let allCircles = [...circles, newCircle];

    // Point to point distance calculation
    function calcDistance(x1, y1, x2, y2) {
      var deltaX = x2 - x1;
      var deltaY = y2 - y1;
      let d = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      return d;
    }

    if (circles.length < 1) {
      setCircles(allCircles);
    }

    let distance = calcDistance(1, 1, 5, 5);

    console.log(distance);

  };

  console.log(circles);

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
