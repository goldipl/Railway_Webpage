export default function TrainIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="3" width="14" height="13" rx="3.5" />
      <path d="M5 10h14" />
      <path d="M9 3.5V10M15 3.5V10" />
      <circle cx="9" cy="13" r="0.6" fill="currentColor" />
      <circle cx="15" cy="13" r="0.6" fill="currentColor" />
      <path d="m8 16-2.5 4.5M16 16l2.5 4.5M7 19h10" />
    </svg>
  );
}
