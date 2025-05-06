import { MapPin, Calendar } from "lucide-react";

const TripDetailsStep = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-[#00205B] mb-4">
        Trip Details
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">From</label>
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <select
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
              required
            >
              <option value="">Select departure location</option>
              <option value="Accra">Accra</option>
              <option value="Kumasi">Kumasi</option>
              <option value="Takoradi">Takoradi</option>
              <option value="Tamale">Tamale</option>
              <option value="Cape Coast">Cape Coast</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">To</label>
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <select
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
              required
            >
              <option value="">Select destination</option>
              <option value="Accra">Accra</option>
              <option value="Kumasi">Kumasi</option>
              <option value="Takoradi">Takoradi</option>
              <option value="Tamale">Tamale</option>
              <option value="Cape Coast">Cape Coast</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#00205B] text-white py-2 px-4 rounded-md hover:bg-[#00307A] transition-colors"
        >
          Continue to Select Bus
        </button>
      </form>
    </div>
  );
};

export default TripDetailsStep;