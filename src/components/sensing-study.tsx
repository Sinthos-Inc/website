"use client";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Field } from "./field";
const stages = [
  {
    name: "Listen",
    title: "ACOUSTIC FIELD",
    caption: "SOUND IS A PHYSICAL SIGNATURE.",
    description:
      "Capture the mechanical sound of flight. Investigate microphone arrays that listen without relying on a drone’s radio transmissions.",
    detail: "PASSIVE SENSING / SIGNAL ACQUISITION",
  },
  {
    name: "Interpret",
    title: "SIGNAL INTERPRETATION",
    caption: "FIND THE PATTERN WITHIN THE NOISE.",
    description:
      "Distinguish aircraft signatures from wind, engines, and other background noise. Evaluate compact models against recordings they have never encountered.",
    detail: "PATTERN RECOGNITION / MODEL EVALUATION",
  },
  {
    name: "Inform",
    title: "INTEGRATED AWARENESS",
    caption: "TURN PERCEPTION INTO USEFUL WARNING.",
    description:
      "Translate detections into clear alerts. Develop a path to cue optical sensors and contribute another layer to an existing awareness system.",
    detail: "ALERTING / FUTURE SENSOR INTEGRATION",
  },
];
export function SensingStudy() {
  const [selected, setSelected] = useState(0);
  // Start still until the system motion preference is known.
  const [paused, setPaused] = useState(true);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPaused(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = {
      ArrowRight: (index + 1) % 3,
      ArrowDown: (index + 1) % 3,
      ArrowLeft: (index + 2) % 3,
      ArrowUp: (index + 2) % 3,
      Home: 0,
      End: 2,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = keys[event.key];
    setSelected(next);
    tabs.current[next]?.focus();
  }
  const stage = stages[selected];
  return (
    <div className="reveal grid min-h-[440px] grid-cols-[1.5fr_1fr] border border-line max-[1100px]:grid-cols-[1.15fr_1fr] max-[760px]:grid-cols-1">
      <div className="relative min-h-[440px] overflow-hidden bg-[#141e18] max-[760px]:min-h-[350px] max-[500px]:min-h-[295px]">
        <div className="absolute inset-x-6 top-[22px] z-2 flex justify-between font-mono text-[10px] leading-[1.6] tracking-[.06em] text-[#a2b69b] max-[500px]:inset-x-[18px] max-[500px]:top-[18px] max-[500px]:text-[9px]">
          <span>{stage.title}</span>
          <span className="text-[#71836c]">CONCEPT STUDY</span>
        </div>
        <Field selectedStage={selected} paused={paused} />
        <div className="absolute inset-x-6 bottom-[22px] flex items-center justify-between gap-2.5 max-[500px]:inset-x-[18px] max-[500px]:bottom-3">
          <span className="font-mono text-[10px] tracking-[.06em] text-[#97a991] max-[500px]:max-w-[140px] max-[500px]:text-[8px]">
            {stage.caption}
          </span>
          <button
            type="button"
            className="motion-toggle font-mono"
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? "RESUME MOTION" : "PAUSE MOTION"}{" "}
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col border-l border-line px-[34px] pt-[26px] pb-8 max-[1100px]:p-[25px] max-[760px]:border-l-0 max-[760px]:border-t max-[760px]:p-[26px] max-[500px]:px-[18px] max-[500px]:py-[22px]">
        <div className="mb-[21px] font-mono text-[10px] tracking-[.06em] text-muted">
          THE APPROACH
        </div>
        <div
          className="border-t border-line max-[760px]:flex"
          role="tablist"
          aria-label="Sensing workflow"
        >
          {stages.map((item, index) => (
            <button
              key={item.name}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              id={`tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-controls="stage-panel"
              tabIndex={selected === index ? 0 : -1}
              className={`stage ${selected === index ? "active" : ""}`}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => onKey(event, index)}
            >
              <span className="font-mono text-[10px] tracking-normal max-[500px]:text-[9px]">
                0{index + 1}
              </span>
              <span>{item.name}</span>
              <span
                className="text-[22px] font-normal max-[760px]:hidden"
                aria-hidden="true"
              >
                {selected === index ? "−" : "+"}
              </span>
            </button>
          ))}
        </div>
        <div
          id="stage-panel"
          className="stage-panel pt-[23px]"
          role="tabpanel"
          aria-labelledby={`tab-${selected}`}
          tabIndex={0}
        >
          <p>{stage.description}</p>
          <span className="mono font-mono text-xs leading-[1.6] tracking-[.06em]">
            {stage.detail}
          </span>
        </div>
      </div>
    </div>
  );
}
