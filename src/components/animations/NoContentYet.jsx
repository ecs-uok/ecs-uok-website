// import { FaPlus } from "react-icons/fa6";

import { useLottie } from "lottie-react";
import nocontentAnimation from "../animations/nocontent.json";

export default function NoContentYet() {
  const style = {
    height: 500,
  };

  const options = {
    animationData: nocontentAnimation,
    loop: true,
  };

  const { View } = useLottie(options, style);

  return View;
}
// export default function NoContentYet() {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mt-20">
//       <div className="flex flex-col items-center justify-center">
//         <FaPlus size={40} color="gray" />
//         <p className="text-gray-600 text-xl mt-4">No content yet.</p>
//       </div>
//     </div>
//   );
// }
