    // /pages/reseller/active/[id].tsx
"use client";
import { useParams } from "next/navigation";

const ActiveResellerDetails = () => {
  const params = useParams();
  const { id } = params;

  //   console.log("reseller", reseller);
  return (
    <div>
      <h1>Active Reseller Details: {id}</h1>
      {/* Display active reseller details here */}
      {/* <p>Name: {reseller.full_name}</p>
      <p>Email: {reseller.user_email}</p>
      <p>Position: {reseller.position}</p>
      <p>Experience: {reseller.experience}</p>
      <p>Skills: {reseller.skills.join(", ")}</p>
      <p>Cover Letter: {reseller.cover_letter}</p> */}
    </div>
  );
};

export default ActiveResellerDetails;
