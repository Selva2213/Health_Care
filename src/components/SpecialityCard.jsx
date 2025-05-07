const SpecialityCard = ({ spec }) => {
  return (
    <div className="capitalize border shadow shadow-blue-200 rounded-lg px-3 py-5 h-full">
      <div className="flex flex-col items-center justify-between">
        <div>
          <img
            src={spec.image}
            alt={spec.name}
            className="object-cover rounded-lg h-40"
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-cyan-700 text-center">
            {spec.name}
          </h2>
          <p className="text-gray-700 text-sm text-pretty text-justify">
            {spec.description}
          </p>
          <div className="flex flex-col justify-between gap-3">
            <label className="text-cyan-700 font-semibold mt-3">Possible Symptoms:</label>
            <div className="flex items-center gap-2 flex-wrap">
              {spec?.possibleSymptoms?.map((symp, i) => (
                <p
                  key={i}
                  className="capitalize px-2 py-1 rounded-full bg-cyan-700 text-white text-xs"
                >
                  {symp}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialityCard;
