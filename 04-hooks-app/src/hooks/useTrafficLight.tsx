import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
  blue: "bg-blue-500 animate-pulse",
};

// ? menos avanzado
// type TrafficLightColor = 'red' | 'yellow' | 'green'

// ! mas avanzado :D
type TrafficLightColor = keyof typeof colors;

export const useTrafficsLights = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  const effectCountdown = // ? effect para el countdown
    useEffect(() => {
      if (countdown === 0) return;
      const intervalId = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => {
        console.log("cleanup effect");
        clearInterval(intervalId);
      };
    }, [countdown]);

  const effectLight = //? change light color effect
    useEffect(() => {
      if (countdown > 0) return;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCountdown(5);
      if (light === "red") {
        setLight("green");
        return;
      }

      if (light === "yellow") {
        setLight("red");
        return;
      }

      if (light === "green") {
        setLight("yellow");
        return;
      }
    }, [countdown, light]);
  return {
    // ? effects / efectos
    effectCountdown,
    effectLight,
    // ? properties
    colors,
    light,
    countdown,
    // ? computed - calculos: properties que se pueden calcular aqui
    percentage: (countdown / 5) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
   
    
  };
};
