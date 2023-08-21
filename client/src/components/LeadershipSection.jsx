import MemberCard from "./MemberCard";
import MemberImage from "../assets/member_image.png";
import PresidentImage from "../assets/members/president.jpeg";
import SecretaryImage from "../assets/members/secretary.jpeg";
import JRTreasurerImage from "../assets/members/jr_treasurer.jpg";
import EditorialOneImage from "../assets/members/editorial_1.jpg";
import EditorialTwoImage from "../assets/members/editorial_2.jpeg";
import WebMasterImage from "../assets/members/webmaster.jpg";

export default function LeadershipSection() {
  return (
    <div className="bg-gray-100 p-12 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold font-sans my-4">
        Executive Committee of ECSC 2023/24
      </h1>
      <div className=" flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 gap-4 mt-8">
          <MemberCard
            member_photo={PresidentImage}
            member_role="President"
            member_name="Chamith Dilshan"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <MemberCard
            member_photo={MemberImage}
            member_role="Vice President"
            member_name="John Doe"
          />
          <MemberCard
            member_photo={SecretaryImage}
            member_role="Secretary"
            member_name="Movindu Gamage"
          />
          <MemberCard
            member_photo={JRTreasurerImage}
            member_role="Junior Treasurer"
            member_name="Kasun Buddhika"
          />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          <MemberCard
            member_photo={MemberImage}
            member_role="Assistant Secretary"
            member_name="Shiva Yakshi"
          />
          <MemberCard
            member_photo={EditorialOneImage}
            member_role="Editorial Co-Lead"
            member_name="Lakindu Banneheka"
          />
          <MemberCard
            member_photo={EditorialTwoImage}
            member_role="Editorial Co-Lead"
            member_name="Basuru Jagadakshi"
          />
          <MemberCard
            member_photo={WebMasterImage}
            member_role="Web Master"
            member_name="Mindula Madhuhansa"
          />
        </div>
        <div className="grid grid-cols-5 gap-4 mt-8">
          <MemberCard
            member_photo={MemberImage}
            member_role="Committee Member"
            member_name="John Doe"
          />
          <MemberCard
            member_photo={MemberImage}
            member_role="Committee Member"
            member_name="John Doe"
          />
          <MemberCard
            member_photo={MemberImage}
            member_role="Committee Member"
            member_name="John Doe"
          />
          <MemberCard
            member_photo={MemberImage}
            member_role="Committee Member"
            member_name="John Doe"
          />
          <MemberCard
            member_photo={MemberImage}
            member_role="Committee Member"
            member_name="John Doe"
          />
        </div>
        <div className="grid grid-cols-5 gap-4 mt-8">
          <MemberCard
            member_photo={MemberImage}
            member_role="Committee Member"
            member_name="John Doe"
          />
          <MemberCard
            member_photo={MemberImage}
            member_role="Committee Member"
            member_name="John Doe"
          />
          <MemberCard
            member_photo={MemberImage}
            member_role="Committee Member"
            member_name="John Doe"
          />
          <MemberCard
            member_photo={MemberImage}
            member_role="Committee Member"
            member_name="John Doe"
          />
          <MemberCard
            member_photo={MemberImage}
            member_role="Committee Member"
            member_name="John Doe"
          />
        </div>
      </div>
    </div>
  );
}
