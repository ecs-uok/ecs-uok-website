import MemberCard from "./MemberCard";
import useFetch from "../hooks/useFetch";
import { FaUserGroup } from "react-icons/fa6";
import Loading from "./Loading";
import Error from "./Error";

export default function LeadershipSection() {
  let { loading, error, data } = useFetch(
    "https://ecsc-strapi-backend-8d83d27854c0.herokuapp.com/api/board-members?populate=*"
  );

  const cachedData = !loading && !error && data;

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center pt-20">
      <div className="bg-primary py-12 px-10 w-full md:px-48 transition-all duration-1000">
        <div className="flex items-center gap-4 text-white">
          <FaUserGroup size={40} />
          <span className="text-white text-4xl">Leadership</span>
        </div>
        <div className="text-lg text-white pt-2">
          Get to Know the Dedicated and Visionary Leadership Team of the ECS
          Club
        </div>
      </div>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 my-8">
          {cachedData &&
            cachedData.data.map((member) => (
              <MemberCard
                key={member.id}
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
