import React from "react";

interface ProfileIconProps {
  className?: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M15.8111 6.93503V12.065C15.8111 12.905 15.3611 13.685 14.6336 14.1125L10.1786 16.685C9.45109 17.105 8.55109 17.105 7.81609 16.685L3.36109 14.1125C2.63359 13.6925 2.18359 12.9125 2.18359 12.065V6.93503C2.18359 6.09503 2.63359 5.31499 3.36109 4.88749L7.81609 2.315C8.54359 1.895 9.44359 1.895 10.1786 2.315L14.6336 4.88749C15.3611 5.31499 15.8111 6.08753 15.8111 6.93503Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99945 8.74986C9.96457 8.74986 10.747 7.96747 10.747 7.00235C10.747 6.03723 9.96457 5.25488 8.99945 5.25488C8.03434 5.25488 7.25195 6.03723 7.25195 7.00235C7.25195 7.96747 8.03434 8.74986 8.99945 8.74986Z"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.9948C12 11.6448 10.6575 10.5498 9 10.5498C7.3425 10.5498 6 11.6448 6 12.9948"
        stroke="#4A4C56"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileIcon;
