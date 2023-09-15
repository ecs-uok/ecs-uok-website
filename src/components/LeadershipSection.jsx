import MemberCard from "./MemberCard";
import useFetch from "../hooks/useFetch";
import { FaUserGroup } from "react-icons/fa6";
import Loading from "./Loading";
import Error from "./Error";

// const boardMembers = [
//   {
//     id: 1,
//     photo: President,
//     role: "President",
//     name: "Chamith Dilshan",
//     url: "https://www.linkedin.com/in/chamith-dilshan-5aa04424a/",
//     email: "dilshankmc91@gmail.com",
//   },
//   {
//     id: 2,
//     photo: Secretary,
//     role: "Secretary",
//     name: "Movindu Gamage",
//     url: "https://www.linkedin.com/in/movindu-gamage/",
//     email: "movindugamage1@gmail.com",
//   },
//   {
//     id: 3,
//     photo: JRTreasurer,
//     role: "Junior Treasurer",
//     name: "Kasun Buddhika",
//     url: "https://www.linkedin.com/in/kasun-buddhika-38239a213/",
//     email: "mkasunbuddhika@gmail.com",
//   },
//   {
//     id: 4,
//     photo: VicePresident,
//     role: "Vice President",
//     name: "Waruna Hashan",
//     url: "https://www.linkedin.com/",
//     email: "hashanrashmika2001@gmail.com",
//   },
//   {
//     id: 5,
//     photo: ViceSecretary,
//     role: "Vice Secretary",
//     name: "Shiva Yakshi",
//     url: "https://www.linkedin.com/in/yakshika-sivaperumal-760018231/",
//     email: "sivayakshika17@gmail.com",
//   },
//   {
//     id: 6,
//     photo: CoEditorOne,
//     role: "Co Editor",
//     name: "Lakindu Banneheka",
//     url: "https://www.linkedin.com/in/lakindu-banneheka/",
//     email: "lakindubannaheka@gmail.com",
//   },
//   {
//     id: 7,
//     photo: CoEditorTwo,
//     role: "Co Editor",
//     name: "Basuru Jagadakshi",
//     url: "https://www.linkedin.com/in/basuru-jagadakshi-15056b276/",
//     email: "jagadakshibasuru@gmail.com",
//   },
//   {
//     id: 8,
//     photo: WebMaster,
//     role: "Web Master",
//     name: "Mindula Madhuhansa",
//     url: "https://www.linkedin.com/in/mindula-madhuhansa/",
//     email: "mimmindula@gmail.com",
//   },
//   {
//     id: 9,
//     photo: IndustryRelationLead,
//     role: "Industry Relation Lead",
//     name: "Thulani Magedara",
//     url: "https://www.linkedin.com/in/thulani-magedara-99868724b/",
//     email: "thulanimagedara@gmail.com",
//   },
//   {
//     id: 10,
//     photo: PublicVisibilityLead,
//     role: "Public Visibility Lead",
//     name: "Rusiru Erandaka",
//     url: "https://www.linkedin.com/in/rusiru-erandaka/",
//     email: "erandakarusiru214@gmail.com",
//   },
//   {
//     id: 11,
//     photo: MembershipDevelopmentLead,
//     role: "Membership Development Lead",
//     name: "Chamodya Rajapaksha",
//     url: "https://www.linkedin.com/",
//     email: "chamodyarajapaksha1@gmail.com",
//   },
//   {
//     id: 12,
//     photo: FinanceLead,
//     role: "Finance Lead",
//     name: "Janada Jayathilaka",
//     url: "https://www.linkedin.com/in/janada-jayathilaka-58b47228a/",
//     email: "lakvindujayathilaka@gmail.com",
//   },
//   {
//     id: 13,
//     photo: EditorialLead,
//     role: "Editorial Lead",
//     name: "Vichaksha Viduranga",
//     url: "https://www.linkedin.com/in/vichaksha-viduranga-a3b293227/",
//     email: "vichakshaviduranga@gmail.com",
//   },
//   {
//     id: 14,
//     photo: EventAndLogisticsLead,
//     role: "Event and Logistics Lead",
//     name: "Vidhushan Viswarajah",
//     url: "https://www.linkedin.com/",
//     email: "Vidhushan1017@gmail.com",
//   },
//   {
//     id: 15,
//     photo: AcademicCoLeadOne,
//     role: "Academic Co Lead",
//     name: "Ruchira Sandeepa",
//     url: "https://www.linkedin.com/",
//     email: "rrsandeepa@gmail.com",
//   },
//   {
//     id: 16,
//     photo: AcademicCoLeadTwo,
//     role: "Academic Co Lead",
//     name: "Roman Figurado",
//     url: "https://www.linkedin.com/in/roman-anojan-figurado-2528b2213/",
//     email: "romananojan21@gmail.com",
//   },
//   {
//     id: 17,
//     photo: TechCoLeadOne,
//     role: "Tech Co Lead",
//     name: "Thisara Yashodha",
//     url: "https://www.linkedin.com/in/thisara-yashodha-217187246/",
//     email: "thisarayashodha4@gmail.com",
//   },
//   {
//     id: 18,
//     photo: TechCoLeadTwo,
//     role: "Tech Co Lead",
//     name: "Himal Geethanjana",
//     url: "https://www.linkedin.com/in/himal-geethanjana-1166011b2/",
//     email: "himalgeethanjana18@gmail.com",
//   },
// ];

export default function LeadershipSection() {
  let { loading, error, data } = useFetch(
    "https://ecsc-website-strapi.onrender.com/api/board-members?populate=*"
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
          {/* {boardMembers.map((member) => {
          return (
            <MemberCard
              key={memeber.id}
              member_photo={member.photo}
              member_role={member.role}
              member_name={member.name}
              member_linkedinUrl={member.url}
              member_email={member.email}
            />
          );
        })} */}

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
