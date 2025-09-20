"use client";
import { useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  altBefore: string;
  altAfter: string;
  aspect?: string; // e.g. "aspect-[16/9]" | "aspect-[4/3]" | "aspect-square"
};

export default function BeforeAfterSlider({
  beforeSrc, afterSrc, altBefore, altAfter, aspect = "aspect-[16/9]",
}: Props) {
  const [val, setVal] = useState(50);
  
  return (
    <div className={`relative w-full overflow-hidden rounded-xl bg-neutral-200 ${aspect}`}>
      <img 
        src={afterSrc} 
        alt={altAfter} 
        className="absolute inset-0 h-full w-full object-cover" 
        loading="lazy" 
        decoding="async" 
      />
      <div 
        aria-hidden="true" 
        className="absolute inset-0 h-full w-full overflow-hidden" 
        style={{ clipPath: `inset(0 ${100 - val}% 0 0)` }}
      >
        <img 
          src={beforeSrc} 
          alt="" 
          className="h-full w-full object-cover" 
          loading="lazy" 
          decoding="async" 
        />
      </div>
      <div 
        className="pointer-events-none absolute top-0 bottom-0 w-[2px] bg-white/80 shadow [mix-blend:overlay]" 
        style={{ left: `${val}%` }} 
      />
      <input 
        type="range" 
        min={0} 
        max={100} 
        value={val} 
        onChange={(e) => setVal(parseInt(e.target.value))} 
        aria-label="Drag to compare before and after"
        className="absolute inset-x-0 bottom-3 mx-auto w-[80%] appearance-none bg-transparent" 
        style={{ WebkitAppearance: "none" }} 
      />
      <div className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
        Before
      </div>
      <div className="absolute right-3 top-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white">
        After
      </div>
    </div>
  );
}