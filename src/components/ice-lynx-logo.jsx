import "../styles/ice-lynx-logo.css";
import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function IceLynxLogo() {
  const checkVariants = {
    checked: {
      pathLength: 0,
      stroke: "rgb(145,205,255)",
      transition: { duration: 3, ease: "easeOut" },
    },
    unchecked: {
      pathLength: 1,
      stroke: "rgb(145,205,255)",
      transition: { duration: 0 },
    },
  };

  const [isChecked, setIsChecked] = React.useState(true);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      class="logo"
      style={{
        width: 100,
        height: 115,
        borderRadius: 5,
        padding: 0,
        backgroundColor: "rgba(0,100,255,0)",
      }}
      onHoverStart={() => setIsChecked(!isChecked)}
      onHoverEnd={() => setIsChecked(!isChecked)}
    >
      <svg width="90" height="115">
        <path d="M 25 60 l 5 0 l 10 10 l -5 0 l -10 -5" fill="#91cdff" />
        <path d="M 65 60 l -5 0 l -10 10 l 5 0 l 10 -5" fill="#91cdff" />
        <path d="M 45 80 l 5 5 l -2.5 5 l -5 0 l -2.5 -5" fill="#91cdff" />
        <path
          d="M 45 40 l -15 -5 l -15 -15 l -5 -15 l -5 -5 l 5 15 l -5 15 l 10 15 l -10 15 l -5 20 l 10 -5 l 10 40 l 5 -25 l 5 -5 l 10 10 l 10 0 l 10 -10 l 5 5 l 5 25 l 10 -40 l 10 5 l -5 -20 l -10 -15 l 10 -15 l -5 -15 l 5 -15 l -5 5 l -5 15 l -15 15 l -15 5"
          fill="rgba(255,255,255,0.1)"
        />
        <svg width="90" height="115" scale="1">
          <motion.path
            d="m 5 0 l 5 5 l 5 15 l 15 15 l 15 5"
            fill="transparent"
            strokeWidth="1"
            stroke="rgb(145,205,255)"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
            animate={isChecked ? "checked" : "unchecked"}
          />
          <motion.path
            d="m 85 0 l -5 5 l -5 15 l -15 15 l -15 5"
            fill="transparent"
            strokeWidth="1"
            stroke="rgb(145,205,255)"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
          <motion.path
            d="m 5 0 l 5 15 l -5 15 l 10 15 l -10 15 l -5 20 l 10 -5 l 10 40 l 5 -25 l 5 -5"
            fill="transparent"
            strokeWidth="1"
            stroke="rgb(145,205,255)"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
          <motion.path
            d="m 85 0 l -5 15 l 5 15 l -10 15 l 10 15 l 5 20 l -10 -5 l -10 40 l -5 -25 l -5 -5"
            fill="transparent"
            strokeWidth="1"
            stroke="rgb(145,205,255)"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
          <motion.path
            d="m 30 85 l 10 10 l 5 0"
            fill="transparent"
            strokeWidth="1"
            stroke="rgb(145,205,255)"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
          <motion.path
            d="m 60 85 l -10 10 l -5 0"
            fill="transparent"
            strokeWidth="1"
            stroke="rgb(145,205,255)"
            strokeLinecap="round"
            variants={checkVariants}
            style={{ pathLength: pathLength, opacity: opacity }}
          />
        </svg>
      </svg>
    </motion.div>
  );
}
