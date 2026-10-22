
// "use client";

// import { useEffect, useRef } from "react";
// import {
//   Coins,
//   Calculator,
//   ChartNoAxesCombined,
//   FileText,
//   TrendingUp,
//   CircleDollarSign,
//   Landmark,
//   Receipt,
//   Wallet,
//   ArrowUpRight,
//   PieChart,
//   BadgeIndianRupee,
// } from "lucide-react";

// import "./Background3D.css";

// const financeIcons = [
//   { Icon: Coins, className: "coin-card", depth: 1.4 },
//   { Icon: Calculator, className: "calculator-card", depth: 0.8 },
//   { Icon: ChartNoAxesCombined, className: "chart-card", depth: 1.2 },
//   { Icon: FileText, className: "document-card", depth: 0.6 },
//   // { Icon: TrendingUp, className: "growth-card", depth: 1.5 },
//   // { Icon: CircleDollarSign, className: "dollar-card", depth: 1.1 },
//   { Icon: Landmark, className: "bank-card", depth: 0.7 },
//   // { Icon: Receipt, className: "receipt-card", depth: 1.3 },
//   { Icon: Wallet, className: "wallet-card", depth: 0.9 },
//   { Icon: PieChart, className: "pie-card", depth: 1.4 },
//   { Icon: BadgeIndianRupee, className: "rupee-card", depth: 1.1 },
//   { Icon: ArrowUpRight, className: "arrow-card", depth: 1.6 },
// ];

// export default function Background3D() {
//   const sceneRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scene = sceneRef.current;
//     if (!scene) return;

//     const handleMouseMove = (event: MouseEvent) => {
//       const x = (event.clientX / window.innerWidth - 0.5) * 2;
//       const y = (event.clientY / window.innerHeight - 0.5) * 2;

//       scene.style.setProperty("--mouse-x", `${x}`);
//       scene.style.setProperty("--mouse-y", `${y}`);
//     };

//     const handleMouseLeave = () => {
//       scene.style.setProperty("--mouse-x", "0");
//       scene.style.setProperty("--mouse-y", "0");
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div ref={sceneRef} className="avs3d-scene" aria-hidden="true">
//       {/* Deep navy background */}
//       <div className="avs3d-base" />

//       {/* Ambient lighting */}
//       {/* <div className="avs3d-glow avs3d-glow-blue" />
//       <div className="avs3d-glow avs3d-glow-green" />
//       <div className="avs3d-glow avs3d-glow-orange" /> */}

//       {/* Perspective floor and fine grid */}
//       <div className="avs3d-grid" />
//       <div className="avs3d-floor" />

//       {/* Decorative light trails */}
//       <div className="avs3d-orbit avs3d-orbit-one" />
//       <div className="avs3d-orbit avs3d-orbit-two" />

//       {/* Floating finance icons — no images */}
//       <div className="avs3d-icon-layer">
//         {financeIcons.map(({ Icon, className, depth }, index) => (
//           <div
//             key={className}
//             className={`avs3d-icon ${className}`}
//             style={{
//               "--depth": depth,
//               "--index": index,
//             } as React.CSSProperties}
//           >
//             <div className="avs3d-icon-face">
//               <Icon strokeWidth={1.5} />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Background decorative particles */}
//       {/* <div className="avs3d-particle particle-one" />
//       <div className="avs3d-particle particle-two" />
//       <div className="avs3d-particle particle-three" />
//       <div className="avs3d-particle particle-four" />
//       <div className="avs3d-particle particle-five" />
//       <div className="avs3d-particle particle-six" /> */}

//       {/* Subtle vignette */}
//       {/* <div className="avs3d-vignette" /> */}
//     </div>
//   );
// }




"use client";

import { useEffect, useRef } from "react";
import {
  Coins,
  Calculator,
  ChartNoAxesCombined,
  FileText,
  TrendingUp,
  CircleDollarSign,
  Landmark,
  Receipt,
  Wallet,
  PieChart,
  BadgeIndianRupee,
  ShoppingCart,
  ShieldCheck,
  CreditCard,
  PiggyBank,
  ArrowLeftRight,
} from "lucide-react";

import "./Background3D.css";

const financeIcons = [
  { Icon: ChartNoAxesCombined, x: 36, y: 25, color: "blue", delay: 0 },
  { Icon: Landmark, x: 63, y: 29, color: "blue", delay: 1.2 },
  { Icon: ShieldCheck, x: 24, y: 42, color: "blue", delay: 0.5 },
  { Icon: Wallet, x: 33, y: 46, color: "green", delay: 1.7 },
  { Icon: PiggyBank, x: 27, y: 53, color: "blue", delay: 2.2 },
  { Icon: PieChart, x: 40, y: 55, color: "blue", delay: 0.8 },
  { Icon: FileText, x: 30, y: 67, color: "blue", delay: 2.8 },
  { Icon: Receipt, x: 59, y: 64, color: "orange", delay: 1.5 },
  { Icon: CreditCard, x: 56, y: 58, color: "blue", delay: 0.3 },
  { Icon: ShoppingCart, x: 71, y: 59, color: "blue", delay: 2.5 },
  { Icon: CircleDollarSign, x: 76, y: 43, color: "orange", delay: 1.1 },
  { Icon: BadgeIndianRupee, x: 64, y: 51, color: "blue", delay: 2 },
  { Icon: Coins, x: 70, y: 34, color: "green", delay: 0.6 },
  { Icon: TrendingUp, x: 80, y: 58, color: "blue", delay: 1.9 },
  { Icon: Calculator, x: 43, y: 63, color: "green", delay: 2.4 },
  { Icon: ArrowLeftRight, x: 45, y: 47, color: "blue", delay: 1.4 },
];

const particles = Array.from({ length: 65 }, (_, i) => ({
  left: `${(i * 37 + 13) % 100}%`,
  top: `${58 + ((i * 17) % 40)}%`,
  delay: `${(i % 9) * -0.8}s`,
  size: i % 5 === 0 ? 5 : i % 3 === 0 ? 3.5 : 2.5,
  color: i % 7 === 0 ? "orange" : i % 4 === 0 ? "green" : "blue",
}));

export default function Background3D() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      scene.style.setProperty("--mouse-x", String(x));
      scene.style.setProperty("--mouse-y", String(y));
    };

    const resetMouse = () => {
      scene.style.setProperty("--mouse-x", "0");
      scene.style.setProperty("--mouse-y", "0");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", resetMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", resetMouse);
    };
  }, []);

  return (
    <div ref={sceneRef} className="avs3d-scene" aria-hidden="true">
      <div className="avs3d-base" />

      <div className="avs3d-light avs3d-light-blue" />
      <div className="avs3d-light avs3d-light-green" />
      <div className="avs3d-light avs3d-light-orange" />

      <div className="avs3d-grid" />
      <div className="avs3d-floor" />

      {/* Atmospheric orbital lines */}
      <div className="avs3d-orbit avs3d-orbit-one" />
      <div className="avs3d-orbit avs3d-orbit-two" />

      {/* Central holographic platform */}
      <div className="holo-platform">
        <div className="holo-ring holo-ring-outer" />
        <div className="holo-ring holo-ring-middle" />
        <div className="holo-ring holo-ring-inner" />
        <div className="holo-ring holo-ring-core" />
        <div className="holo-core-glow" />

        <div className="holo-ticks">
          {Array.from({ length: 72 }, (_, i) => (
            <span
              key={i}
              style={{ "--tick": i } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      {/* Vertical light beams and floating icons */}
      <div className="avs3d-icon-layer">
        {financeIcons.map(({ Icon, x, y, color, delay }, index) => (
          <div
            key={`${color}-${index}`}
            className={`finance-symbol symbol-${color}`}
            style={
              {
                "--x": `${x}%`,
                "--y": `${y}%`,
                "--delay": `${delay}s`,
                "--depth": 0.7 + (index % 4) * 0.25,
              } as React.CSSProperties
            }
          >
            <span className="symbol-beam" />
            <span className="symbol-light-point" />

            <span className="symbol-icon">
              <Icon strokeWidth={1.7} />
            </span>
          </div>
        ))}
      </div>

      {/* Floating blue, green and orange particles */}
      {/* <div className="avs3d-particles">
        {particles.map((particle, index) => (
          <span
            key={index}
            className={`scene-particle particle-${particle.color}`}
            style={
              {
                left: particle.left,
                top: particle.top,
                "--delay": particle.delay,
                "--size": `${particle.size}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div> */}

      <div className="avs3d-vignette" />
    </div>
  );
}
