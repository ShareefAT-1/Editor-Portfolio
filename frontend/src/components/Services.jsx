import { useState } from "react";

function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Video Editing",
      description:
        "Professional editing with clean cuts, pacing, transitions, sound design, and storytelling.",
    },
    {
      title: "Short Form Content",
      description:
        "Fast-paced Reels, Shorts, and TikTok edits designed to grab attention and keep viewers watching.",
    },
    {
      title: "Color Grading",
      description:
        "Cinematic color correction and grading to give every project a polished and consistent visual style.",
    },
    {
      title: "Motion Graphics",
      description:
        "Titles, animated text, transitions, and visual elements that add energy and personality to your content.",
    },
  ];

  const bubbleSets = [
    // =====================================================
    // CARD 1
    // Wide cinematic horizontal current
    // =====================================================
    [
      {
        width: 14,
        height: 14,
        top: "12%",
        left: "-4%",
        route: "routeHorizontal",
        duration: 13,
        delay: -3,
      },
      {
        width: 54,
        height: 54,
        top: "64%",
        left: "10%",
        route: "routeDiagonalUp",
        duration: 19,
        delay: -11,
      },
      {
        width: 27,
        height: 38,
        top: "30%",
        left: "67%",
        route: "routeOrbit",
        duration: 16,
        delay: -7,
      },
      {
        width: 10,
        height: 10,
        top: "84%",
        left: "82%",
        route: "routeVertical",
        duration: 9,
        delay: -5,
      },
      {
        width: 72,
        height: 48,
        top: "4%",
        left: "74%",
        route: "routeDriftLeft",
        duration: 24,
        delay: -17,
      },
      {
        width: 20,
        height: 20,
        top: "48%",
        left: "38%",
        route: "routeDiagonalDown",
        duration: 12,
        delay: -9,
      },
      {
        width: 36,
        height: 42,
        top: "76%",
        left: "48%",
        route: "routeRiseRight",
        duration: 17,
        delay: -13,
      },
      {
        width: 8,
        height: 8,
        top: "23%",
        left: "25%",
        route: "routeHorizontal",
        duration: 10,
        delay: -6,
      },
    ],

    // =====================================================
    // CARD 2
    // Rising current from bottom-left
    // =====================================================
    [
      {
        width: 68,
        height: 54,
        top: "73%",
        left: "-8%",
        route: "routeRiseRight",
        duration: 21,
        delay: -14,
      },
      {
        width: 13,
        height: 13,
        top: "9%",
        left: "42%",
        route: "routeOrbitReverse",
        duration: 11,
        delay: -4,
      },
      {
        width: 38,
        height: 48,
        top: "38%",
        left: "76%",
        route: "routeDriftLeft",
        duration: 17,
        delay: -10,
      },
      {
        width: 17,
        height: 29,
        top: "78%",
        left: "62%",
        route: "routeVertical",
        duration: 13,
        delay: -7,
      },
      {
        width: 9,
        height: 9,
        top: "31%",
        left: "14%",
        route: "routeDiagonalDown",
        duration: 8,
        delay: -3,
      },
      {
        width: 46,
        height: 46,
        top: "4%",
        left: "70%",
        route: "routeOrbit",
        duration: 23,
        delay: -16,
      },
      {
        width: 24,
        height: 18,
        top: "56%",
        left: "34%",
        route: "routeRiseLeft",
        duration: 14,
        delay: -8,
      },
      {
        width: 12,
        height: 20,
        top: "86%",
        left: "88%",
        route: "routeDiagonalUp",
        duration: 11,
        delay: -6,
      },
    ],

    // =====================================================
    // CARD 3
    // Chaotic scattered constellation
    // =====================================================
    [
      {
        width: 21,
        height: 21,
        top: "5%",
        left: "7%",
        route: "routeDiagonalDown",
        duration: 13,
        delay: -8,
      },
      {
        width: 74,
        height: 56,
        top: "18%",
        left: "34%",
        route: "routeOrbit",
        duration: 26,
        delay: -19,
      },
      {
        width: 16,
        height: 29,
        top: "66%",
        left: "84%",
        route: "routeRiseLeft",
        duration: 15,
        delay: -5,
      },
      {
        width: 8,
        height: 8,
        top: "49%",
        left: "3%",
        route: "routeHorizontal",
        duration: 9,
        delay: -4,
      },
      {
        width: 39,
        height: 39,
        top: "76%",
        left: "39%",
        route: "routeVertical",
        duration: 18,
        delay: -12,
      },
      {
        width: 26,
        height: 17,
        top: "42%",
        left: "56%",
        route: "routeOrbitReverse",
        duration: 14,
        delay: -9,
      },
      {
        width: 12,
        height: 12,
        top: "87%",
        left: "12%",
        route: "routeDiagonalUp",
        duration: 10,
        delay: -7,
      },
      {
        width: 52,
        height: 67,
        top: "48%",
        left: "69%",
        route: "routeDriftLeft",
        duration: 24,
        delay: -15,
      },
    ],

    // =====================================================
    // CARD 4
    // Calm orbital drift with occasional crossings
    // =====================================================
    [
      {
        width: 57,
        height: 68,
        top: "-7%",
        left: "4%",
        route: "routeDiagonalDown",
        duration: 24,
        delay: -16,
      },
      {
        width: 22,
        height: 15,
        top: "42%",
        left: "39%",
        route: "routeHorizontal",
        duration: 14,
        delay: -7,
      },
      {
        width: 48,
        height: 48,
        top: "69%",
        left: "69%",
        route: "routeRiseLeft",
        duration: 21,
        delay: -13,
      },
      {
        width: 11,
        height: 11,
        top: "21%",
        left: "84%",
        route: "routeOrbitReverse",
        duration: 12,
        delay: -5,
      },
      {
        width: 31,
        height: 42,
        top: "55%",
        left: "7%",
        route: "routeVertical",
        duration: 17,
        delay: -11,
      },
      {
        width: 8,
        height: 8,
        top: "82%",
        left: "43%",
        route: "routeDiagonalUp",
        duration: 10,
        delay: -3,
      },
      {
        width: 67,
        height: 43,
        top: "28%",
        left: "58%",
        route: "routeOrbit",
        duration: 27,
        delay: -21,
      },
      {
        width: 18,
        height: 26,
        top: "10%",
        left: "31%",
        route: "routeDiagonalDown",
        duration: 15,
        delay: -9,
      },
    ],
  ];

  return (
    <>
      <style>
        {`
          @keyframes routeHorizontal {
            0% {
              transform: translate(-15px, 0) scale(0.95);
            }

            25% {
              transform: translate(35px, -8px) scale(1.04);
            }

            50% {
              transform: translate(75px, 8px) scale(1);
            }

            75% {
              transform: translate(30px, 15px) scale(1.07);
            }

            100% {
              transform: translate(-15px, 0) scale(0.95);
            }
          }


          @keyframes routeDriftLeft {
            0% {
              transform: translate(20px, -5px) scale(1);
            }

            33% {
              transform: translate(-30px, 12px) scale(1.06);
            }

            66% {
              transform: translate(-65px, -14px) scale(0.96);
            }

            100% {
              transform: translate(20px, -5px) scale(1);
            }
          }


          @keyframes routeDiagonalUp {
            0% {
              transform: translate(-15px, 35px) rotate(0deg) scale(0.94);
            }

            30% {
              transform: translate(15px, 5px) rotate(8deg) scale(1.03);
            }

            65% {
              transform: translate(55px, -45px) rotate(16deg) scale(1.08);
            }

            100% {
              transform: translate(-15px, 35px) rotate(0deg) scale(0.94);
            }
          }


          @keyframes routeDiagonalDown {
            0% {
              transform: translate(-20px, -30px) rotate(-6deg);
            }

            35% {
              transform: translate(15px, 0px) rotate(4deg);
            }

            70% {
              transform: translate(55px, 45px) rotate(12deg);
            }

            100% {
              transform: translate(-20px, -30px) rotate(-6deg);
            }
          }


          @keyframes routeRiseRight {
            0% {
              transform: translate(-25px, 40px) scale(0.92);
            }

            30% {
              transform: translate(5px, 10px) scale(1);
            }

            65% {
              transform: translate(55px, -45px) scale(1.09);
            }

            100% {
              transform: translate(-25px, 40px) scale(0.92);
            }
          }


          @keyframes routeRiseLeft {
            0% {
              transform: translate(25px, 35px) scale(1);
            }

            40% {
              transform: translate(-15px, 0px) scale(1.08);
            }

            75% {
              transform: translate(-55px, -45px) scale(0.96);
            }

            100% {
              transform: translate(25px, 35px) scale(1);
            }
          }


          @keyframes routeVertical {
            0% {
              transform: translate(4px, 30px) scale(0.95);
            }

            35% {
              transform: translate(-8px, 0px) scale(1.06);
            }

            70% {
              transform: translate(6px, -45px) scale(1);
            }

            100% {
              transform: translate(4px, 30px) scale(0.95);
            }
          }


          @keyframes routeOrbit {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }

            20% {
              transform: translate(22px, -12px) rotate(6deg);
            }

            45% {
              transform: translate(12px, -35px) rotate(12deg);
            }

            70% {
              transform: translate(-20px, -20px) rotate(4deg);
            }

            100% {
              transform: translate(0, 0) rotate(0deg);
            }
          }


          @keyframes routeOrbitReverse {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }

            25% {
              transform: translate(-25px, 10px) rotate(-8deg);
            }

            50% {
              transform: translate(-10px, 35px) rotate(-14deg);
            }

            75% {
              transform: translate(22px, 15px) rotate(-5deg);
            }

            100% {
              transform: translate(0, 0) rotate(0deg);
            }
          }


          @keyframes bubbleBreath {
            0% {
              opacity: 0.10;
            }

            45% {
              opacity: 0.19;
            }

            70% {
              opacity: 0.14;
            }

            100% {
              opacity: 0.10;
            }
          }
        `}
      </style>

      <section
        id="services"
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "#fff",
          padding: "100px 60px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "60px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Services
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#aaa",
              fontSize: "18px",
              marginBottom: "70px",
            }}
          >
            From raw footage to the final frame.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            {services.map((service, index) => {
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: isHovered ? "#151515" : "#111",
                    border: isHovered
                      ? "1px solid #555"
                      : "1px solid #292929",

                    borderRadius: "12px",
                    padding: "35px",
                    minHeight: "220px",

                    position: "relative",
                    overflow: "hidden",

                    transform: isHovered
                      ? "translateY(-10px) scale(1.018)"
                      : "translateY(0px) scale(1)",

                    boxShadow: isHovered
                      ? "0 18px 45px rgba(0,0,0,0.45)"
                      : "0 0 0 rgba(0,0,0,0)",

                    transition:
                      "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.45s ease, background 0.45s ease, box-shadow 0.5s ease",

                    cursor: "default",
                  }}
                >
                  {bubbleSets[index].map((bubble, bubbleIndex) => (
                    <span
                      key={bubbleIndex}
                      style={{
                        position: "absolute",

                        width: `${bubble.width}px`,
                        height: `${bubble.height}px`,

                        top: bubble.top,
                        left: bubble.left,

                        borderRadius:
                          bubble.width === bubble.height
                            ? "50%"
                            : "45% 55% 52% 48% / 55% 42% 58% 45%",

                        background: isHovered
                          ? `
          radial-gradient(
            circle at 30% 25%,
            rgba(255,255,255,0.30),
            rgba(255,255,255,0.08) 35%,
            rgba(255,255,255,0.015) 72%
          )
        `
                          : `
          radial-gradient(
            circle at 30% 25%,
            rgba(255,255,255,0.18),
            rgba(255,255,255,0.045) 35%,
            rgba(255,255,255,0.01) 72%
          )
        `,

                        border: isHovered
                          ? "1px solid rgba(255,255,255,0.16)"
                          : "1px solid rgba(255,255,255,0.07)",

                        boxShadow: isHovered
                          ? `
          inset 0 0 18px rgba(255,255,255,0.04),
          0 0 18px rgba(255,255,255,0.035)
        `
                          : `
          inset 0 0 12px rgba(255,255,255,0.025)
        `,

                        opacity: isHovered ? 0.72 : 0.34,

                        animation: `
        ${bubble.route}
        ${bubble.duration}s
        cubic-bezier(0.45, 0.05, 0.55, 0.95)
        ${bubble.delay}s
        infinite,

        bubbleBreath
        ${bubble.duration * 0.8}s
        ease-in-out
        ${bubble.delay}s
        infinite
      `,

                        transition:
                          "opacity 0.7s ease, border-color 0.7s ease, background 0.7s ease, box-shadow 0.7s ease",

                        pointerEvents: "none",
                        zIndex: 0,
                      }}
                    />
                  ))}

                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        color: isHovered ? "#aaa" : "#777",
                        fontSize: "14px",
                        transition: "color 0.4s ease",
                      }}
                    >
                      0{index + 1}
                    </span>

                    <h3
                      style={{
                        fontSize: "26px",
                        margin: "25px 0 15px",

                        transform: isHovered
                          ? "translateX(5px)"
                          : "translateX(0)",

                        transition:
                          "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        color: isHovered ? "#ccc" : "#aaa",
                        lineHeight: "1.7",
                        margin: 0,
                        transition: "color 0.4s ease",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;