import "./MyLabel.css";

interface MyLabelProps {
  /**
   * Label size
   */
  label: string;
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize all letters
   */
  allCaps?: boolean;
  /**
   * Label color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: MyLabelProps) => {
  return (
    <span className={`${size} ${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
