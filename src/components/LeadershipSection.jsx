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

const boardMembers = [
  {
    id: 1,
    photo: President,
    role: "President",
    name: "Chamith Dilshan",
    url: "https://www.linkedin.com/in/chamith-dilshan-5aa04424a/",
    email: "dilshankmc91@gmail.com",
  },
  {
    id: 2,
    photo: Secretary,
    role: "Secretary",
    name: "Movindu Gamage",
    url: "https://www.linkedin.com/in/movindu-gamage/",
    email: "movindugamage1@gmail.com",
  },
  {
    id: 3,
    photo: JRTreasurer,
    role: "Junior Treasurer",
    name: "Kasun Buddhika",
    url: "https://www.linkedin.com/in/kasun-buddhika-38239a213/",
    email: "mkasunbuddhika@gmail.com",
  },
  {
    id: 4,
    photo: VicePresident,
    role: "Vice President",
    name: "Waruna Hashan",
    url: "https://www.linkedin.com/",
    email: "hashanrashmika2001@gmail.com",
  },
  {
    id: 5,
    photo: ViceSecretary,
    role: "Vice Secretary",
    name: "Shiva Yakshi",
    url: "https://www.linkedin.com/in/yakshika-sivaperumal-760018231/",
    email: "sivayakshika17@gmail.com",
  },
  {
    id: 6,
    photo: CoEditorOne,
    role: "Co Editor",
    name: "Lakindu Banneheka",
    url: "https://www.linkedin.com/in/lakindu-banneheka/",
    email: "lakindubannaheka@gmail.com",
  },
  {
    id: 7,
    photo: CoEditorTwo,
    role: "Co Editor",
    name: "Basuru Jagadakshi",
    url: "https://www.linkedin.com/in/basuru-jagadakshi-15056b276/",
    email: "jagadakshibasuru@gmail.com",
  },
  {
    id: 8,
    photo: WebMaster,
    role: "Web Master",
    name: "Mindula Madhuhansa",
    url: "https://www.linkedin.com/in/mindula-madhuhansa/",
    email: "mimmindula@gmail.com",
  },
  {
    id: 9,
    photo: IndustryRelationLead,
    role: "Industry Relation Lead",
    name: "Thulani Magedara",
    url: "https://www.linkedin.com/in/thulani-magedara-99868724b/",
    email: "thulanimagedara@gmail.com",
  },
  {
    id: 10,
    photo: PublicVisibilityLead,
    role: "Public Visibility Lead",
    name: "Rusiru Erandaka",
    url: "https://www.linkedin.com/in/rusiru-erandaka/",
    email: "erandakarusiru214@gmail.com",
  },
  {
    id: 11,
    photo: MembershipDevelopmentLead,
    role: "Membership Development Lead",
    name: "Chamodya Rajapaksha",
    url: "https://www.linkedin.com/",
    email: "chamodyarajapaksha1@gmail.com",
  },
  {
    id: 12,
    photo: FinanceLead,
    role: "Finance Lead",
    name: "Janada Jayathilaka",
    url: "https://www.linkedin.com/in/janada-jayathilaka-58b47228a/",
    email: "lakvindujayathilaka@gmail.com",
  },
  {
    id: 13,
    photo: EditorialLead,
    role: "Editorial Lead",
    name: "Vichaksha Viduranga",
    url: "https://www.linkedin.com/in/vichaksha-viduranga-a3b293227/",
    email: "vichakshaviduranga@gmail.com",
  },
  {
    id: 14,
    photo: EventAndLogisticsLead,
    role: "Event and Logistics Lead",
    name: "Vidhushan Viswarajah",
    url: "https://www.linkedin.com/",
    email: "Vidhushan1017@gmail.com",
  },
  {
    id: 15,
    photo: AcademicCoLeadOne,
    role: "Academic Co Lead",
    name: "Ruchira Sandeepa",
    url: "https://www.linkedin.com/",
    email: "rrsandeepa@gmail.com",
  },
  {
    id: 16,
    photo: AcademicCoLeadTwo,
    role: "Academic Co Lead",
    name: "Roman Figurado",
    url: "https://www.linkedin.com/in/roman-anojan-figurado-2528b2213/",
    email: "romananojan21@gmail.com",
  },
  {
    id: 17,
    photo: TechCoLeadOne,
    role: "Tech Co Lead",
    name: "Thisara Yashodha",
    url: "https://www.linkedin.com/in/thisara-yashodha-217187246/",
    email: "thisarayashodha4@gmail.com",
  },
  {
    id: 18,
    photo: TechCoLeadTwo,
    role: "Tech Co Lead",
    name: "Himal Geethanjana",
    url: "https://www.linkedin.com/in/himal-geethanjana-1166011b2/",
    email: "himalgeethanjana18@gmail.com",
  },
];

export default function LeadershipSection() {
  return (
    <div className="bg-gray-100 px-2 py-4 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold font-sans mt-[80px]">
        Executive Committee of ECSC 2023/24
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto my-8">
        {boardMembers.map((memeber) => {
          return (
            <MemberCard
              key={memeber.id}
              member_photo={memeber.photo}
              member_role={memeber.role}
              member_name={memeber.name}
              member_linkedinUrl={memeber.url}
              member_email={memeber.email}
            />
          );
        })}
      </div>
    </div>
  );
}
