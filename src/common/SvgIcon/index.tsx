import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, alt, loading }: SvgIconProps) => (
  <img
    src={`${process.env.PUBLIC_URL}/img/svg/${src}`}
    alt={alt || src.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}
    width={width}
    height={height}
    loading={loading || "lazy"}
  />
);
