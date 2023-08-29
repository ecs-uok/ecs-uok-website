import MemberCard from "./MemberCard";
// import President from "../assets/members/chamith.jpg";
// import VicePresident from "../assets/members/waruna.jpg";
// import Secretary from "../assets/members/movindu.jpg";
// import JRTreasurer from "../assets/members/kasun.jpg";
// import ViceSecretary from "../assets/members/yakshi.jpg";
// import CoEditorOne from "../assets/members/lakindu.jpg";
// import CoEditorTwo from "../assets/members/basuru.jpg";
// import WebMaster from "../assets/members/mindula.jpg";
// import IndustryRelationLead from "../assets/members/thulani.jpg";
// import PublicVisibilityLead from "../assets/members/erandaka.jpg";
// import MembershipDevelopmentLead from "../assets/members/chamodya.jpg";
// import FinanceLead from "../assets/members/janada.jpg";
// import EditorialLead from "../assets/members/vichaksha.jpg";
// import EventAndLogisticsLead from "../assets/members/vidhushan.jpg";import TechCoLeadOne from "../assets/members/thisara.jpg";
// import TechCoLeadTwo from "../assets/members/himal.jpg";
// import AcademicCoLeadOne from "../assets/members/ruchira.jpg";
// import AcademicCoLeadTwo from "../assets/members/roaman.jpg";
import PropTypes from "prop-types";

export default function LeadershipSection({ members }) {
  return (
    <div className="bg-gray-100 px-2 py-4 flex flex-col">
      <h1 className="text-5xl font-bold font-sans text-center mt-[80px]">
        Executive Committee of ECSC 2023/24
      </h1>

      <div className="grid grid-cols-12 xl:gap-8 lg:gap-4 sm:gap-2 mt-8 mx-auto mb-4">
        {members.data.map((member) => (
          <div
            key={member.id}
            className="col-span-12 xl:col-span-3 lg:col-span-4 sm:col-span-6"
          >
            <MemberCard
              member_photo={`https://localhost:1337${member.attributes.memberImage.data.attributes.url}`}
              member_role={member.attributes.memberRole}
              member_name={member.attributes.memberName}
            />
          </div>
        ))}
        {/* {members.data.map((member, index) => {
          let colSpanClass;

          if (
            index === 0 ||
            index === 1 ||
            index === 2 ||
            index === 1 ||
            index === 15 ||
            index === 16 ||
            index === 17
          ) {
            colSpanClass = "col-span-4 mx-auto";
          } else {
            colSpanClass = "col-span-3";
          }

          return (
            <div
              key={member.id}
              className={`xl:${colSpanClass} md:${colSpanClass} sm:col-span-6`}
            >
              <MemberCard
                member_photo={`http://localhost:1337${member.attributes.memberImage.data.attributes.url}`}
                member_role={member.attributes.memberRole}
                member_name={member.attributes.memberName}
              />
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

LeadershipSection.propTypes = {
  members: PropTypes.object.isRequired,
};
