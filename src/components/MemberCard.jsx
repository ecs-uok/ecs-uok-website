import PropTypes from "prop-types";
import { FaEnvelope, FaUser, FaRankingStar } from "react-icons/fa6";

export default function MemberCard({
  member_photo,
  member_role,
  member_name,
  member_linkedinUrl,
  member_email,
}) {
  return (
    <div className="flex flex-col sm:flex-row rounded-2xl drop-shadow-md bg-white sm:gap-2 hover:shadow-lg transition-shadow duration-300 h-auto sm:h-[180px] pr-2">
      <div className="w-full sm:w-[160px] aspect-[4/3]">
        <img
          src={member_photo}
          alt={`${member_role} image`}
          className="h-full w-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none"
        />
      </div>
      <div className="flex flex-col gap-1 mx-auto sm:mx-0 sm:justify-center my-2 sm:my-0 text-secondary text-xs sm:text-sm md:text-base font-medium sm:font-semibold px-2 sm:px-0 overflow-hidden">
        <div className="flex gap-2 sm:gap-3 items-center">
          <FaUser className="w-4 h-4 sm:w-5 sm:h-5" color="#0065AD" />
          <a
            href={member_linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:underline break-words"
          >
            {member_name}
          </a>
        </div>
        <div className="flex gap-2 sm:gap-3 items-center">
          <FaRankingStar className="w-4 h-4 sm:w-5 sm:h-5" color="#0065AD" />
          <p className="break-words">{member_role}</p>
        </div>
        {/* 
        <div className="flex gap-2 sm:gap-3 items-center">
          <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" color="#0065AD" />
          <p className="break-words truncate">{member_email}</p>
        </div>
        */}
      </div>
    </div>
  );
}

MemberCard.propTypes = {
  member_role: PropTypes.string.isRequired,
  member_name: PropTypes.string.isRequired,
  member_photo: PropTypes.string.isRequired,
  member_linkedinUrl: PropTypes.string,
  member_email: PropTypes.string.isRequired,
};
