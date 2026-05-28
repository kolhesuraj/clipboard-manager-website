export default function ClipIcon({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="7" fill="#6366f1" />
      <path d="M8 9h12M8 13h12M8 17h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
