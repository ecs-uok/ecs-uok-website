import PropTypes from "prop-types";

export default function MemberCard({
  member_photo,
  member_role,
  member_name,
  fontsize,
  // member_email,
}) {
  return (
    <div className="w-[240px] h-[280px] 2xl:shadow-lg 2xl:shadow-gray-500 shadow-md rounded-3xl relative cursor-pointer">
      <img
        className="w-full h-full object-cover rounded-3xl"
        src={member_photo}
        alt={`${member_name} photo`}
      />
      <div className="absolute bottom-0 w-full rounded-b-3xl bg-primary">
        <div className={`text-white text-center p-2 text-${fontsize || "sm"}`}>
          <p className="font-bold">{member_role}</p>
          <p>{member_name}</p>
        </div>

        {/* <div className="flex gap-3 justify-center items-center rounded-b-3xl p-4 w-full h-full bottom-0 absolute bg-primary opacity-0 hover:opacity-100 transition-opacity duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="w-7 h-6 fill-white"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>
          <a
            href={`mailto:${member_email}`}
            className="text-white text-lg font-semibold"
          >
            {member_email}
          </a>
        </div> */}
      </div>
    </div>
  );
}

MemberCard.propTypes = {
  member_role: PropTypes.string.isRequired,
  member_name: PropTypes.string.isRequired,
  // member_email: PropTypes.string.isRequired,
  member_photo: PropTypes.string.isRequired,
  fontsize: PropTypes.string.isRequired,
};
