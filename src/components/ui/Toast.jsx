import { useEffect, useState } from "react";

export default function Toast({ message, duration = 3000, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-18 left-1/2 transform -translate-x-1/2 bg-(--color-accent) text-black px-6 py-3 rounded-xl shadow-lg animate-slide-in z-50">
      {message}
    </div>
  );
}
