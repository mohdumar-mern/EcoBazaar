import { Button } from "@/components/ui/Button";
import Link from "next/link";
import PropTypes from "prop-types";

const NavButton = ({ icon: Icon, label, href, variant = "ghost", className = "" }) => {
  const content = Icon ? <Icon className="w-5 h-5" /> : <span>{label}</span>;

  return (
    <Button
      variant={variant}
      size="default"
      aria-label={label}
      title={label}
      className={`rounded-full transition-colors hover:text-green-600 ${className}`}
      asChild={!!href}
    >
      {href ? <Link href={href}>{content}</Link> : content}
    </Button>
  );
};

NavButton.propTypes = {
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default NavButton;
