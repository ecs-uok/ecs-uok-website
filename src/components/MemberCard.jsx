import PropTypes from "prop-types";
import { FaEnvelope, FaStar, FaUser } from "react-icons/fa6";

export default function MemberCard({
  member_photo,
  member_role,
  member_name,
  member_linkedinUrl,
  member_email,
}) {
  return (
    <div className="h-[160px] w-[450px] bg-white rounded-2xl drop-shadow-lg flex">
      <img
        src={member_photo}
        alt={`${member_role} photo`}
        className="h-auto w-[120px] object-cover overflow-hidden rounded-s-2xl"
      />
      <div className="text-primary p-4 flex flex-col justify-center gap-2">
        <div className="flex gap-2 items-center">
          <FaUser />
          <a
            className="text-xl font-bold"
            href={member_linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            {member_name}
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <FaStar />
          <h3 className="text-lg">{member_role}</h3>
        </div>
        <div className="flex gap-2 items-center">
          <FaEnvelope color={"primary"} />
          <p className="text-lg">{member_email}</p>
        </div> */}
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
