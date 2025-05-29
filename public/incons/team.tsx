import React from "react";

interface TeamIconProps {
  className?: string;
}

const TeamIcon: React.FC<TeamIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M13.4986 5.87C13.4536 5.8625 13.4011 5.8625 13.3561 5.87C12.3211 5.8325 11.4961 4.985 11.4961 3.935C11.4961 2.8625 12.3586 2 13.4311 2C14.5036 2 15.3661 2.87 15.3661 3.935C15.3586 4.985 14.5336 5.8325 13.4986 5.87Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7256 11.3301C13.7531 11.5026 14.8856 11.3226 15.6806 10.7901C16.7381 10.0851 16.7381 8.93012 15.6806 8.22512C14.8781 7.69262 13.7306 7.51262 12.7031 7.69262"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.47492 5.87C4.51992 5.8625 4.57242 5.8625 4.61742 5.87C5.65242 5.8325 6.47742 4.985 6.47742 3.935C6.47742 2.8625 5.61492 2 4.54242 2C3.46992 2 2.60742 2.87 2.60742 3.935C2.61492 4.985 3.43992 5.8325 4.47492 5.87Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.24812 11.3301C4.22062 11.5026 3.08812 11.3226 2.29313 10.7901C1.23563 10.0851 1.23563 8.93012 2.29313 8.22512C3.09563 7.69262 4.24312 7.51262 5.27062 7.69262"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99859 11.4716C8.95359 11.4641 8.90109 11.4641 8.85609 11.4716C7.82109 11.4341 6.99609 10.5866 6.99609 9.53656C6.99609 8.46406 7.85859 7.60156 8.93109 7.60156C10.0036 7.60156 10.8661 8.47156 10.8661 9.53656C10.8586 10.5866 10.0336 11.4416 8.99859 11.4716Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.81656 13.8336C5.75906 14.5386 5.75906 15.6936 6.81656 16.3986C8.01656 17.2011 9.98156 17.2011 11.1816 16.3986C12.2391 15.6936 12.2391 14.5386 11.1816 13.8336C9.98906 13.0386 8.01656 13.0386 6.81656 13.8336Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TeamIcon;
