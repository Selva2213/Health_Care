import UserImage from "../assets/user.png";

const StarRating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center">
      {stars.map((star) => (
        <button
          key={star}
          className={`text-2xl ${
            star <= rating ? "text-yellow-400" : "text-gray-400"
          } focus:outline-none`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

const ReviewCard = ({ user }) => {
  return (
    <div className="flex items-center gap-3 p-4 border border-gray-200 shadow-md rounded-lg">
      <div>
        <img
          src={user?.avatar || UserImage}
          alt={user?.fullname}
          height={70}
          width={70}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">{user?.fullname}</h3>
          {/* <p>⭐⭐⭐⭐⭐</p> */}
          <StarRating rating={2} />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          amet quia debitis iusto voluptatum quos?
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
