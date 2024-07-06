

// shared
import { IconProps } from "shared";

const PhoneIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={`${fillColor} ${className}`}
    >
      <g id="Phone">
        <path
          id="Vector"
          d="M5.62285 2.72429C5.54686 2.55988 5.4323 2.41625 5.28891 2.3056C5.14552 2.19496 4.97753 2.12057 4.79922 2.08876C4.62092 2.05695 4.43757 2.06866 4.26477 2.1229C4.09196 2.17714 3.9348 2.2723 3.80665 2.40029L3.16045 3.04559C1.89145 4.31459 1.69885 6.25679 2.74915 7.63559C3.70045 8.88479 4.91725 10.3617 6.26815 11.7126C7.61815 13.0626 9.09415 14.2794 10.3442 15.2307C11.7231 16.281 13.6652 16.0884 14.9342 14.8194L15.5795 14.1732C15.7075 14.045 15.8027 13.8879 15.8569 13.7151C15.9112 13.5423 15.9229 13.3589 15.8911 13.1806C15.8593 13.0023 15.7849 12.8343 15.6742 12.6909C15.5636 12.5475 15.42 12.433 15.2555 12.357L12.6726 11.1636C12.6418 11.1495 12.6083 11.1425 12.5745 11.1431C12.5407 11.1437 12.5074 11.1519 12.4773 11.1672L11.1722 11.8251C10.7072 12.0598 10.1799 12.1418 9.66559 12.0593C9.15124 11.9769 8.67599 11.7343 8.30755 11.3661L6.61465 9.67139C6.24621 9.30287 6.00349 8.82747 5.92107 8.31292C5.83865 7.79838 5.92074 7.27094 6.15565 6.80579L6.81355 5.50169C6.82879 5.4715 6.83703 5.43826 6.83765 5.40445C6.83827 5.37064 6.83126 5.33712 6.81715 5.30639L5.62285 2.72429ZM2.85265 1.44539C3.13457 1.16354 3.4804 0.95396 3.86072 0.834481C4.24104 0.715002 4.64459 0.689158 5.03704 0.759147C5.42949 0.829136 5.79923 0.992888 6.1148 1.23647C6.43038 1.48005 6.68244 1.79626 6.84955 2.15819L8.04295 4.74119C8.14232 4.9566 8.19175 5.19168 8.18754 5.42887C8.18333 5.66606 8.1256 5.89923 8.01865 6.11099L7.36075 7.41509C7.25405 7.62651 7.21679 7.86621 7.25429 8.10005C7.29178 8.33388 7.4021 8.54992 7.56955 8.71739L9.26335 10.4112C9.43082 10.5786 9.64686 10.689 9.88069 10.7265C10.1145 10.7639 10.3542 10.7267 10.5656 10.62L11.8698 9.96209C12.0815 9.85514 12.3147 9.7974 12.5519 9.7932C12.7891 9.78899 13.0241 9.83842 13.2395 9.93779L15.8225 11.1312C16.1843 11.2983 16.5004 11.5504 16.7438 11.8659C16.9873 12.1814 17.151 12.551 17.221 12.9433C17.2909 13.3356 17.2651 13.7391 17.1458 14.1193C17.0264 14.4995 16.817 14.8453 16.5353 15.1272L15.8891 15.7734C14.1863 17.4762 11.4926 17.8011 9.52615 16.3044C8.24815 15.3315 6.72085 14.0742 5.31415 12.6666C3.90655 11.259 2.65015 9.73259 1.67635 8.45369C0.17965 6.48809 0.50455 3.79349 2.20735 2.09069L2.85265 1.44539Z"
        />
      </g>
    </svg>
  );
};
export { PhoneIcon };
