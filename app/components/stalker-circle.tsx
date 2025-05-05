'use client';
import { useEffect, useRef } from 'react';
import { MdOutlineLocationSearching } from 'react-icons/md';
export default function StalkerCircle() {
  const pointerRef = useRef(null);

  const mouseMove = (e) => {
    pointerRef.current.style.top = e.clientY - 14 + 'px';
    pointerRef.current.style.left = e.clientX - 14 + 'px';
  };
  useEffect(() => {
    if (pointerRef) {
      document.addEventListener('mousemove', mouseMove);
    }
    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  });

  return (
    <div ref={pointerRef} className="absolute w-8 h-8 items-center bg-red">
      <MdOutlineLocationSearching size={32} className="text-red-600" />
    </div>
  );
}
