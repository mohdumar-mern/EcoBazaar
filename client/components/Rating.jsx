"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import PropTypes from "prop-types";
import clsx from "clsx";

export default function Rating({ value = 0, max = 5, onChange, showValue = true, size = 20 }) {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex items-center gap-1">
      {/* Stars */}
      {Array.from({ length: max }).map((_, index) => {
        const ratingValue = index + 1;
        const isFilled = ratingValue <= (hover || value);

        return (
          <Star
            key={index}
            size={size}
           className={clsx(
  "cursor-pointer hover:scale-110 transition-transform duration-150",
  isFilled ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
)}

            onClick={() => onChange && onChange(ratingValue)}
            onMouseEnter={() => onChange && setHover(ratingValue)}
            onMouseLeave={() => onChange && setHover(null)}
          />
        );
      })}

      {/* Numeric Value */}
      {showValue && (
        <span className="ml-2 text-sm text-gray-600 font-medium">
          {value.toFixed(1)}/{max}
        </span>
      )}
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  showValue: PropTypes.bool,
  size: PropTypes.number,
};
