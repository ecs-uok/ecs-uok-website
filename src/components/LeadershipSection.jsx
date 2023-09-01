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
      <h1 className="text-5xl font-bold font-sans mt-[80px]">
        Executive Committee of ECSC 2023/24
      </h1>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <MemberCard
            member_photo={President}
            member_role="President"
            member_name="Chamith Dilshan"
            member_linkedinUrl="https://www.linkedin.com/in/chamith-dilshan-5aa04424a/"
            member_email="dilshankmc91@gmail.com"
          />
          <MemberCard
            member_photo={Secretary}
            member_role="Secretary"
            member_name="Movindu Gamage"
            member_linkedinUrl="https://www.linkedin.com/in/movindu-gamage/"
            member_email="movindugamage1@gmail.com"
          />
          <MemberCard
            member_photo={JRTreasurer}
            member_role="Junior Treasurer"
            member_name="Kasun Buddhika"
            member_linkedinUrl="https://www.linkedin.com/in/kasun-buddhika-38239a213/"
            member_email="mkasunbuddhika@gmail.com"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <MemberCard
            member_photo={VicePresident}
            member_role="Vice President"
            member_name="Waruna Hashan"
            member_linkedinUrl="https://www.linkedin.com/"
            member_email="hashanrashmika2001@gmail.com"
          />
          <MemberCard
            member_photo={ViceSecretary}
            member_role="Vice Secretary"
            member_name="Shiva Yakshi"
            member_linkedinUrl="https://www.linkedin.com/in/yakshika-sivaperumal-760018231/"
            member_email="sivayakshika17@gmail.com"
          />
          <MemberCard
            member_photo={CoEditorOne}
            member_role="Co Editor"
            member_name="Lakindu Banneheka"
            member_linkedinUrl="https://www.linkedin.com/in/lakindu-banneheka/"
            member_email="lakindubannaheka@gmail.com"
          />
          <MemberCard
            member_photo={CoEditorTwo}
            member_role="Co Editor"
            member_name="Basuru Jagadakshi"
            member_linkedinUrl="https://www.linkedin.com/in/basuru-jagadakshi-15056b276/"
            member_email="jagadakshibasuru@gmail.com"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <MemberCard
            member_photo={WebMaster}
            member_role="Web Master"
            member_name="Mindula Madhuhansa"
            member_linkedinUrl="https://www.linkedin.com/in/mindula-madhuhansa/"
            member_email="mimmindula@gmail.com"
          />
          <MemberCard
            member_photo={IndustryRelationLead}
            member_role="Industry Relation Lead"
            member_name="Thulani Magedara"
            member_linkedinUrl="https://www.linkedin.com/in/thulani-magedara-99868724b/"
            member_email="thulanimagedara@gmail.com"
          />
          <MemberCard
            member_photo={PublicVisibilityLead}
            member_role="Public Visibility Lead"
            member_name="Rusiru Erandaka"
            member_linkedinUrl="https://www.linkedin.com/in/rusiru-erandaka/"
            member_email="erandakarusiru214@gmail.com"
          />
          <MemberCard
            member_photo={MembershipDevelopmentLead}
            member_role="Membership Development Lead"
            member_name="Chamodya Rajapaksha"
            member_linkedinUrl="https://www.linkedin.com/"
            member_email="chamodyarajapaksha1@gmail.com"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <MemberCard
            member_photo={FinanceLead}
            member_role="Finance Lead"
            member_name="Janada Jayathilaka"
            member_linkedinUrl="https://www.linkedin.com/in/janada-jayathilaka-58b47228a/"
            member_email="lakvindujayathilaka@gmail.com"
          />
          <MemberCard
            member_photo={EditorialLead}
            member_role="Editorial Lead"
            member_name="Vichaksha Viduranga"
            member_linkedinUrl="https://www.linkedin.com/in/vichaksha-viduranga-a3b293227/"
            member_email="vichakshaviduranga@gmail.com"
          />
          <MemberCard
            member_photo={EventAndLogisticsLead}
            member_role="Event and Logistics Lead"
            member_name="Vidhushan Viswarajah"
            member_linkedinUrl="https://www.linkedin.com/"
            member_email="Vidhushan1017@gmail.com"
          />
          <MemberCard
            member_photo={AcademicCoLeadOne}
            member_role="Academic Co Lead"
            member_name="Ruchira Sandeepa"
            member_linkedinUrl="https://www.linkedin.com/"
            member_email="rrsandeepa@gmail.com"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          <MemberCard
            member_photo={AcademicCoLeadTwo}
            member_role="Academic Co Lead"
            member_name="Roman Figurado"
            member_linkedinUrl="https://www.linkedin.com/in/roman-anojan-figurado-2528b2213/"
            member_email="romananojan21@gmail.com"
          />
          <MemberCard
            member_photo={TechCoLeadOne}
            member_role="Tech Co Lead"
            member_name="Thisara Yashodha"
            member_linkedinUrl="https://www.linkedin.com/in/thisara-yashodha-217187246/"
            member_email="thisarayashodha4@gmail.com"
          />
          <MemberCard
            member_photo={TechCoLeadTwo}
            member_role="Tech Co Lead"
            member_name="Himal Geethanjana"
            member_linkedinUrl="https://www.linkedin.com/in/himal-geethanjana-1166011b2/"
            member_email="himalgeethanjana18@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}
