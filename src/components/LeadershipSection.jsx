import MemberCard from "./MemberCard";
import President from "../assets/members/chamith.jpg";
import VicePresident from "../assets/members/waruna.jpg";
import Secretary from "../assets/members/movindu.jpg";
import JRTreasurer from "../assets/members/kasun.jpg";
import ViceSecretary from "../assets/members/yakshi.jpg";
import CoEditorOne from "../assets/members/lakindu.jpg";
import CoEditorTwo from "../assets/members/basuru.jpg";
import WebMaster from "../assets/members/mindula.jpg";
import IndustryRelationLead from "../assets/members/thulani.jpg";
import PublicVisibilityLead from "../assets/members/erandaka.jpg";
import MembershipDevelopmentLead from "../assets/members/chamodya.jpg";
import FinanceLead from "../assets/members/janada.jpg";
import EditorialLead from "../assets/members/vichaksha.jpg";
import EventAndLogisticsLead from "../assets/members/vidhushan.jpg";
import TechCoLeadOne from "../assets/members/thisara.jpg";
import TechCoLeadTwo from "../assets/members/himal.jpg";
import AcademicCoLeadOne from "../assets/members/ruchira.jpg";
import AcademicCoLeadTwo from "../assets/members/roaman.jpg";

export default function LeadershipSection() {
  return (
    <div className="bg-gray-100 px-2 py-4 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold font-sans">
        Executive Committee of ECSC 2023/24
      </h1>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <MemberCard
            member_photo={President}
            member_role="President"
            member_name="Chamith Dilshan"
            fontsize="lg"
          />
          <MemberCard
            member_photo={Secretary}
            member_role="Secretary"
            member_name="Movindu Gamage"
            fontsize="lg"
          />
          <MemberCard
            member_photo={JRTreasurer}
            member_role="Junior Treasurer"
            member_name="Kasun Buddhika"
            fontsize="lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <MemberCard
            member_photo={VicePresident}
            member_role="Vice President"
            member_name="Waruna"
            fontsize="lg"
          />
          <MemberCard
            member_photo={ViceSecretary}
            member_role="Vice Secretary"
            member_name="Shiva Yakshi"
            fontsize="lg"
          />
          <MemberCard
            member_photo={CoEditorOne}
            member_role="Co Editor"
            member_name="Lakindu Banneheka"
            fontsize="lg"
          />
          <MemberCard
            member_photo={CoEditorTwo}
            member_role="Co Editor"
            member_name="Basuru Jagadakshi"
            fontsize="lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <MemberCard
            member_photo={WebMaster}
            member_role="Web Master"
            member_name="Mindula Madhuhansa"
          />
          <MemberCard
            member_photo={IndustryRelationLead}
            member_role="Industry Relation Lead"
            member_name="Thulani Magedara"
          />
          <MemberCard
            member_photo={PublicVisibilityLead}
            member_role="Public Visibility Lead"
            member_name="Rusiru Erandaka"
          />
          <MemberCard
            member_photo={MembershipDevelopmentLead}
            member_role="Membership Development Lead"
            member_name="Chamodya Rajapaksha"
            fontsize="xs"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <MemberCard
            member_photo={FinanceLead}
            member_role="Finance Lead"
            member_name="Janada Jayathilake"
          />
          <MemberCard
            member_photo={EditorialLead}
            member_role="Editorial Lead"
            member_name="Vichaksha Viduranga"
          />
          <MemberCard
            member_photo={EventAndLogisticsLead}
            member_role="Event and Logistics Lead"
            member_name="Vidhushan Viswarajah"
          />
          <MemberCard
            member_photo={AcademicCoLeadOne}
            member_role="Academic Co Lead"
            member_name="Ruchira Sandeepa"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <MemberCard
            member_photo={AcademicCoLeadTwo}
            member_role="Academic Co Lead"
            member_name="Roman Figurado"
          />
          <MemberCard
            member_photo={TechCoLeadOne}
            member_role="Tech Co Lead"
            member_name="Thisara Yashodha"
          />
          <MemberCard
            member_photo={TechCoLeadTwo}
            member_role="Tech Co Lead"
            member_name="Himal Gunawardhana"
          />
        </div>
      </div>
    </div>
  );
}
