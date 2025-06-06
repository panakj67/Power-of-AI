import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/userSlice";
// import { logout } from "../store/actions";

const DropDown = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="absolute py-2 px-1 max-h-120 invisible group-hover:visible right-0 mt-2 w-84 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-auto z-50 transition-all ease duration-200">
      <div className="p-4">
        <div className="flex items-center gap-4">
          <img
            onClick={() => navigate('/profile')}
            src={user?.avatar || "https://static.vecteezy.com/system/resources/previews/035/624/082/non_2x/user-profile-person-icon-in-flat-isolated-in-suitable-for-social-media-man-profiles-screensavers-depicting-male-face-silhouettes-for-apps-website-vector.jpg"}
            alt="Profile"
            className="w-15 h-15 cursor-pointer rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">{user?.name || "Pankaj Soni"}</h2>
            <p className="text-xs text-yellow-600">Access all features with our Premium subscription!</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 p-2 text-xs text-gray-700">
        <Link to="/my-lists" className="flex text-center flex-col bg-gray-100 p-2 rounded-xl items-center hover:text-blue-600">
          <img className="h-14" src="https://leetcode.com/static/webpack_bundles/images/list.be52ffc55.png" alt="" />
          <span>My Interviews</span>
        </Link>
        <Link to="/notebook" className="flex flex-col items-center bg-gray-100 p-2 rounded-xl py-3 hover:text-blue-600">
          <img className="h-14" src="https://leetcode.com/static/webpack_bundles/images/notebook.44bf4230c.png" alt="" />
          <span>Notes</span>
        </Link>
        <Link to="/submissions" className="flex flex-col items-center bg-gray-100 p-2 rounded-xl py-3 hover:text-blue-600">
          <img className="h-14" src="https://cdn-icons-png.flaticon.com/512/10782/10782428.png" alt="" />
          <span>My Answers</span>
        </Link>
        <Link to="/progress" className="flex flex-col bg-gray-100 p-2 rounded-xl py-3 items-center hover:text-blue-600">
          <img className="h-14" src="https://cdn-icons-png.flaticon.com/512/10334/10334148.png" alt="" />
          <span>Analytics</span>
        </Link>
        <Link to="/points" className="flex flex-col bg-gray-100 p-2 rounded-xl py-3 items-center hover:text-blue-600">
          <img className="h-14" src="/coin.png" alt="" />
          <span>Points</span>
        </Link>
      </div>

      <div className="borde text-sm mt-2 text-gray-700">
        <p
          className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          📊 Dashboard
        </p>
        <p
          className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate("/orders")}
        >
          📦 Orders
        </p>
        <p
          className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate("/playground")}
        >
          🧪 My Playground
        </p>
        <p
          className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate("/settings")}
        >
          ⚙️ Settings
        </p>
        <p
          onClick={() => dispatch(setUser(false))}
          className="px-4 py-3 text-red-500 hover:bg-gray-100 cursor-pointer"
         
        >
          🚪 Logout
        </p>
      </div>
    </div>
  );
};

export default DropDown;
