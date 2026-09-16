export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="Sinthos home"
      className={`brand-lockup inline-flex items-center gap-3.5 whitespace-nowrap font-semibold tracking-[.1em] ${compact ? "text-xl" : "text-[22px] min-[641px]:text-[26px]"}`}
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className={compact ? "size-[26px]" : "size-[29px] min-[641px]:size-9"}
      >
        <path
          d="M50 3 91 26.5V49L50 25.5 35 34V55L9 40V26.5Z M9 51 50 74.5 65 66V45L91 60V73.5L50 97 9 73.5Z"
          fill="currentColor"
        />
      </svg>
      <span>SINTHOS</span>
    </a>
  );
}
