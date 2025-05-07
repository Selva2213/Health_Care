import { useEffect, useMemo, useState } from "react";
import useAuth from "../hooks/use-auth";
import UserImage from "../assets/user.png";
import { BsTrash } from "react-icons/bs";
import { useAxios } from "../hooks/use-axios";
import { toast } from "sonner";
import Loader from "../components/Loader";

const ProfilePage = () => {
  const { data: user, modifyData } = useAuth();

  const { mutateData, loading } = useAxios();

  const isAdmin = user?.role === "ADMIN";

  const [editedUser, setEditedUser] = useState({
    phone: user.phone,
    city: user.city,
    avatar: user.avatar,
  });

  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(user?.avatar || UserImage);
  }, [editedUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target?.files[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setEditedUser((prev) => ({
        ...prev,
        avatar: fileReader.result?.toString(),
      }));
    };
  };

  const removeImage = () => {
    if (confirm("Are you sure want to remove?")) {
      setEditedUser((prev) => ({ ...prev, avatar: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confirm("Are you sure about changes?")) return;
    const { obj, error } = await mutateData(
      `/users/update/${user._id}`,
      editedUser
    );
    if (error) {
      toast.error(error);
      return;
    } else {
      modifyData(obj?.data);
      toast.success(obj?.message);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4 text-center text-blue-700">
        User Profile
      </h1>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative w-full flex flex-col items-center gap-2 justify-center">
            <label htmlFor={!isAdmin ? "image" : ""} className="cursor-pointer">
              <img
                src={image || UserImage}
                alt={user?.fullname}
                height={150}
                width={150}
                className="rounded-full object-cover shadow-sm shadow-gray-400"
                onError={() => setImage(UserImage)}
              />
              <input
                type={"file"}
                id="image"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            {!isAdmin && (
              <>
                {editedUser.avatar ? (
                  <BsTrash
                    role="button"
                    onClick={removeImage}
                    color="white"
                    size={"1.2rem"}
                    className="absolute bottom-0 right-44 bg-red-500 p-1 rounded-full"
                  />
                ) : (
                  <p className="text-xs text-gray-600">
                    *Click on image to upload
                  </p>
                )}
              </>
            )}
          </div>
          <div>
            <label
              htmlFor="fullName"
              className="block text-cyan-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={user.role === "ADMIN" ? "Admin" : user?.fullname}
              className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 w-full disabled:cursor-not-allowed disabled:bg-gray-300 focus:outline-none"
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-cyan-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 w-full disabled:cursor-not-allowed disabled:bg-gray-300 focus:outline-none"
              disabled
            />
          </div>
          {!isAdmin && (
            <>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-cyan-700 font-semibold mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  title="Please enter a valid phone number"
                  id="phone"
                  name="phone"
                  value={editedUser.phone}
                  onChange={handleInputChange}
                  className="bg-white border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-cyan-700 font-semibold mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={editedUser.city}
                  onChange={handleInputChange}
                  className="bg-white border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none"
                />
              </div>
            </>
          )}
          <button
            disabled={isAdmin}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:cursor-not-allowed"
          >
            {loading ? <Loader clip={true} /> : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
