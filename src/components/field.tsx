"use client";
import { useEffect, useRef } from "react";
export function Field({
  selectedStage,
  paused,
}: {
  selectedStage: number;
  paused: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stage = useRef(selectedStage);
  const pausedRef = useRef(paused);
  const redraw = useRef<(() => void) | null>(null);
  const sync = useRef<(() => void) | null>(null);
  useEffect(() => {
    stage.current = selectedStage;
    redraw.current?.();
  }, [selectedStage]);
  useEffect(() => {
    pausedRef.current = paused;
    sync.current?.();
  }, [paused]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx: CanvasRenderingContext2D = context;
    let width = 600,
      height = 440,
      time = 0,
      frame = 0,
      lastFrame = 0,
      visible = false;
    function field(x: number, z: number, t: number) {
      const distance = Math.hypot(x - 0.15, z + 0.1);
      const wave =
        Math.sin(distance * 15 - t * 1.6) * Math.exp(-distance * 1.8);
      const noise =
        (Math.sin(x * 17 + z * 11 + t * 0.45) +
          Math.cos(z * 21 - x * 8 - t * 0.3)) *
        0.06;
      return stage.current === 0
        ? wave * 0.19 + noise
        : stage.current === 1
          ? Math.abs(wave) * 0.27 + noise * 0.35
          : wave * 0.055 + noise * 0.12;
    }
    function point(x: number, z: number, y: number): [number, number] {
      return [
        width * 0.5 + (x - z * 0.45) * width * 0.37,
        height * 0.53 +
          (z * 0.38 + x * 0.08) * height * 0.48 -
          y * height * 0.48,
      ];
    }
    function drawField(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#141e18";
      ctx.fillRect(0, 0, width, height);
      for (let k = 0; k < 35; k++) {
        const z = -1.12 + k * 0.067;
        ctx.beginPath();
        for (let i = 0; i <= 55; i++) {
          const x = -1.2 + i * 0.044;
          const p = point(x, z, field(x, z, t));
          i ? ctx.lineTo(...p) : ctx.moveTo(...p);
        }
        ctx.strokeStyle =
          k % 5 === 0 ? "rgba(178,210,153,.38)" : "rgba(142,169,123,.17)";
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }
      for (let k = 0; k < 46; k++) {
        const x = -1.2 + k * 0.054;
        ctx.beginPath();
        for (let i = 0; i <= 40; i++) {
          const z = -1.12 + i * 0.058;
          const p = point(x, z, field(x, z, t));
          i ? ctx.lineTo(...p) : ctx.moveTo(...p);
        }
        ctx.strokeStyle = "rgba(135,161,116,.15)";
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
      const source = point(0.15, -0.1, field(0.15, -0.1, t));
      const pos = stage.current === 2 ? point(0.8, 0.66, 0) : source;
      ctx.strokeStyle = "rgba(209,229,165,.75)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pos[0] - 8, pos[1]);
      ctx.lineTo(pos[0] + 8, pos[1]);
      ctx.moveTo(pos[0], pos[1] - 8);
      ctx.lineTo(pos[0], pos[1] + 8);
      ctx.stroke();
      ctx.fillStyle = "#d1e5a5";
      ctx.beginPath();
      ctx.arc(pos[0], pos[1], 2, 0, Math.PI * 2);
      ctx.fill();
      if (stage.current === 2) {
        const n = point(-0.7, -0.45, 0);
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.moveTo(...source);
        ctx.lineTo(...n);
        ctx.lineTo(...pos);
        ctx.stroke();
        ctx.setLineDash([]);
        [source, n].forEach((p) => {
          ctx.strokeRect(p[0] - 4, p[1] - 4, 8, 8);
        });
      }
      const base = height - 80;
      ctx.strokeStyle = "rgba(192,214,170,.65)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < 100; i++) {
        const x = 24 + (i * (width - 48)) / 99;
        const y =
          base +
          Math.sin(i * 0.55 - t * 2) *
            Math.sin(i * 0.08) *
            Math.exp(-Math.pow((i - 50) / 32, 2)) *
            (stage.current === 0 ? 13 : 7);
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
    }

    function animate(timestamp: number) {
      frame = 0;
      if (pausedRef.current || !visible || document.hidden) return;
      if (timestamp - lastFrame >= 32) {
        time += Math.min((timestamp - lastFrame) / 1000, 0.05);
        lastFrame = timestamp;
        drawField(time);
      }
      frame = requestAnimationFrame(animate);
    }
    function syncMotion() {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      if (!pausedRef.current && visible && !document.hidden) {
        lastFrame = performance.now();
        frame = requestAnimationFrame(animate);
      }
    }
    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      drawField(time);
    }
    redraw.current = () => drawField(time);
    sync.current = syncMotion;
    const intersection = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        syncMotion();
      },
      { threshold: 0.05 },
    );
    const resizeObserver = new ResizeObserver(resize);
    intersection.observe(canvas);
    resizeObserver.observe(canvas);
    document.addEventListener("visibilitychange", syncMotion);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      intersection.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", syncMotion);
      redraw.current = null;
      sync.current = null;
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 size-full"
      role="img"
      aria-label="Illustrative acoustic signal field. Concept animation, not live detection data."
    />
  );
}
