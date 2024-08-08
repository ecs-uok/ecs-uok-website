import MemberCard from "./MemberCard";
import useFetch from "../hooks/useFetch";
import { FaUserGroup } from "react-icons/fa6";
import Loading from "./animations/Loading";
import Error from "./animations/Error";

export default function LeadershipSection() {
  let { loading, error, data } = useFetch(
    "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/board-members?populate=*"
  );

  const cachedData = !loading && !error && data;

  return (
    <div className="flex flex-col items-center justify-center pt-20 bg-gray-100">
      <div className="w-full px-10 py-6 transition-all duration-1000 bg-primary md:py-12 md:px-48">
        <div className="flex items-center gap-2 text-white md:gap-4">
          <FaUserGroup className="w-8 h-10 md:w-10 md:h-12" />
          <span className="text-3xl text-white md:text-4xl">Leadership</span>
        </div>
        <div className="pt-2 text-base text-white md:text-lg">
          Get to Know the Dedicated and Visionary Leadership Team of the ECS
          Club
        </div>
      </div>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-4 m-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 md:m-8">
  {cachedData &&
    cachedData.data
      .sort((a, b) => a.attributes.memberId - b.attributes.memberId) // Sort by memberId
      .map((member) => (
        <MemberCard
          key={member.attributes.memberId}
          member_photo={member.attributes.memberPhoto.data.attributes.url}
          member_name={member.attributes.memberName}
          member_linkedinUrl={member.attributes.memberLinkedinUrl}
          member_role={member.attributes.memberRole}
          member_email={member.attributes.memberEmail}
        />
      ))}
</div>
      )}
    </div>
  );
}
