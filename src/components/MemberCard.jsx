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
    <div className="max-h-[160px] max-w-[450px] bg-white rounded-2xl drop-shadow-lg flex">
      <img
        src={member_photo}
        alt={`${member_role} photo`}
        className="h-full w-[1/4] object-contain rounded-s-2xl"
      />
      <div className="text-primary p-4 my-auto">
        <div className="flex gap-2 items-center">
          <FaUser color={"primary"} />
          <a
            className="text-lg md:text-xl font-bold"
            href={member_linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            {member_name}
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <FaRankingStar color={"primary"} />
          <h3 className="text-base md:text-lg">{member_role}</h3>
        </div>
        <div className="flex gap-2 items-center">
          <FaEnvelope color={"primary"} />
          <p className="text-sm md:text-lg">{member_email}</p>
        </div>
      </div>
    </div>
  );
}

MemberCard.propTypes = {
  member_role: PropTypes.string.isRequired,
  member_name: PropTypes.string.isRequired,
  member_photo: PropTypes.string.isRequired,
  member_linkedinUrl: PropTypes.string.isRequired,
  member_email: PropTypes.string.isRequired,
};
