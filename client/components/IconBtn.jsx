"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PropTypes from "prop-types";

const IconBtn = ({
  icon: Icon,
  label,
  href,
  variant = "ghost",
  className = "",
}) => {
  // Icon + label layout
  const content = (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">{label}</span>
      {Icon && <Icon className="w-5 h-5" />}
    </div>
  );

  return (
    <Button
      variant={variant}
      size="default"
      aria-label={label}
      title={label}
      className={`rounded-md transition-colors hover:text-green-600 ${className}`}
      asChild={!!href}
    >
      {href ? <Link href={href}>{content}</Link> : content}
    </Button>
  );
};

IconBtn.propTypes = {
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default IconBtn;
