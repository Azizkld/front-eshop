
// shared
import { IconProps } from "shared";

const DataManagementIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 44"
      fill="fill-black-color-900"
      xmlns="http://www.w3.org/2000/svg"
      className={`mb-4 lg:w-[46px] lg:h-[44px] ${fillColor} ${className}`}
    >
      <path
        d="M9.54517 16.5V12.8333H13.3004V16.5H9.54517ZM17.0557 16.5H35.8319V12.8333H17.0557V16.5ZM9.54517 27.5V31.1667H13.3004V27.5H9.54517ZM35.8319 31.1667H17.0557V27.5H35.8319V31.1667Z"
        fill={`${fillColor ? `${fillColor}` : "#1D1D1B"}`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.03467 11C2.03467 9.54131 2.62813 8.14236 3.6845 7.11091C4.74087 6.07946 6.17361 5.5 7.66754 5.5H37.7095C39.2035 5.5 40.6362 6.07946 41.6926 7.11091C42.7489 8.14236 43.3424 9.54131 43.3424 11V33C43.3424 34.4587 42.7489 35.8576 41.6926 36.8891C40.6362 37.9205 39.2035 38.5 37.7095 38.5H7.66754C6.17361 38.5 4.74087 37.9205 3.6845 36.8891C2.62813 35.8576 2.03467 34.4587 2.03467 33V11ZM7.66754 9.16667H37.7095C38.2075 9.16667 38.6851 9.35982 39.0372 9.70364C39.3893 10.0475 39.5872 10.5138 39.5872 11V20.1667H5.78992V11C5.78992 10.5138 5.98774 10.0475 6.33986 9.70364C6.69198 9.35982 7.16956 9.16667 7.66754 9.16667ZM5.78992 23.8333V33C5.78992 33.4862 5.98774 33.9525 6.33986 34.2964C6.69198 34.6402 7.16956 34.8333 7.66754 34.8333H37.7095C38.2075 34.8333 38.6851 34.6402 39.0372 34.2964C39.3893 33.9525 39.5872 33.4862 39.5872 33V23.8333H5.78992Z"
        fill={`${fillColor ? `${fillColor}` : "#1D1D1B"}`}
      />
    </svg>
  );
};
export { DataManagementIcon };