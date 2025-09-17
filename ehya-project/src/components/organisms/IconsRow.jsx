import { FiActivity, FiCommand, FiTrendingUp, FiSend } from "react-icons/fi";
import IconBox from "../atoms/IconBox";

export default function IconsRow() {
  return (
    <div className="flex justify-center gap-12 py-12">
      <IconBox gradient="bg-gradient-to-br from-red-400 to-pink-500">
        <FiActivity />
      </IconBox>

      <IconBox gradient="bg-gradient-to-br from-blue-400 to-indigo-500">
        <FiCommand />
      </IconBox>

      <IconBox gradient="bg-gradient-to-br from-yellow-400 to-orange-500">
        <FiTrendingUp />
      </IconBox>

      <IconBox gradient="bg-gradient-to-br from-teal-400 to-cyan-500">
        <FiSend />
      </IconBox>
    </div>
  );
}
