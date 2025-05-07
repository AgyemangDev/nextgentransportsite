const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00205B] text-white mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
  
  export default FeatureCard;
  