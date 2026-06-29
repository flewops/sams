import { motion } from "framer-motion";

export function ScribbleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      className={`w-full h-3 ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M2 8C40 2 80 10 120 6C160 2 180 8 198 4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </svg>
  );
}

export function ScribbleBlob({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90,-17.9,87.6,-3.1C85.2,11.7,77.8,25.7,68.1,37.3C58.4,48.9,46.4,58.1,33.3,65.3C20.2,72.5,6,77.7,-7.5,77.3C-21,76.9,-33.8,70.9,-45.6,62.3C-57.4,53.7,-68.2,42.5,-75.3,29.1C-82.4,15.7,-85.8,0.1,-82.6,-13.8C-79.4,-27.7,-69.6,-39.9,-58.1,-48.7C-46.6,-57.5,-33.4,-62.9,-20.1,-66.8C-6.8,-70.7,6.6,-73.1,20.3,-73.6"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function ScribbleStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.2L5.6 22L8 14.4L2 9.6H9.6L12 2Z" />
    </svg>
  );
}

export function ScribbleArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" fill="none" className={className} aria-hidden="true">
      <motion.path
        d="M2 30C25 5 60 5 95 20M85 10L95 20L85 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </svg>
  );
}
