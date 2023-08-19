import MemberCard from "./MemberCard";
import MemberImage from "../assets/member_image.png";

export default function LeadershipSection() {
  return (
    <div className="bg-gray-100 p-12">
      <MemberCard
        member_photo={MemberImage}
        member_role="President"
        member_name="John Doe"
        member_email="johndoe@gmail.com"
      />
    </div>
  );
}
