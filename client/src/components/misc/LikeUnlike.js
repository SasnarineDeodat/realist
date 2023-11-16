import { useAuth } from "../../context/auth";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

export default function LikeUnlike({ ad }) {
  // context
  const [auth, setAuth] = useAuth();

  const handleLike = async () => {
    try {
      //
    } catch (err) {
      console.log(err);
    }
  };
  const handleUnlike = async () => {
    try {
      //
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {auth.user?.wishlist?.includes(ad?._id) ? (
        <span>
          <FcLike onClick={handleUnlike} className="h2 mt-3 pointer" />
        </span>
      ) : (
        <span>
          <FcLikePlaceholder onClick={handleLike} className="h2 mt-3 pointer" />
        </span>
      )}
    </>
  );
}
