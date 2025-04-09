import React from "react";

interface StarIconProps {
  className?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M14.8743 3.8025L16.781 7.61583C17.041 8.14667 17.7343 8.65583 18.3193 8.75333L21.7751 9.3275C23.9851 9.69583 24.5051 11.2992 22.9126 12.8808L20.226 15.5675C19.771 16.0225 19.5218 16.9 19.6626 17.5283L20.4318 20.8542C21.0385 23.4867 19.641 24.505 17.3118 23.1292L14.0726 21.2117C13.4876 20.865 12.5235 20.865 11.9276 21.2117L8.68848 23.1292C6.37015 24.505 4.96181 23.4758 5.56848 20.8542L6.33765 17.5283C6.47848 16.9 6.22931 16.0225 5.77431 15.5675L3.08765 12.8808C1.50598 11.2992 2.01515 9.69583 4.22515 9.3275L7.68098 8.75333C8.25515 8.65583 8.94848 8.14667 9.20848 7.61583L11.1151 3.8025C12.1551 1.73333 13.8451 1.73333 14.8743 3.8025Z"
          stroke="#04060F"
          stroke-width="1.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>{" "}
    </svg>
  );
};

export default StarIcon;
