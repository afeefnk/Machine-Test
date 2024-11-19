import h1 from "../assets/h1.svg";
import h2 from "../assets/h2.svg";
import h3 from "../assets/h3.svg";
import h4 from "../assets/h4.svg";


const StatsCards = () => {
    const statsData = [
      {
        id: 1,
        icon: <img src={h1} alt="" />, // Replace this with an icon component if necessary
        title: "Total No. of NCRs",
        count: "1500",
        change: "8%+ from Weekly",
        bgColor: "bg-[#F3F8FF]",
      },
      {
        id: 2,
        icon: <img src={h2} alt="" />,
        title: "Total No. Complaints",
        count: "300",
        change: "5% from yesterday",
        bgColor: "bg-[#FFF6E8]",
      },
      {
        id: 3,
        icon: <img src={h3} alt="" />,
        title: "Total Meetings",
        count: "14",
        change: "0.5% from yesterday",
        bgColor: "bg-[#FFF1EF]",
      },
      {
        id: 4,
        icon: <img src={h4} alt="" />,
        title: "Documentation",
        count: "512",
        change: "0.5% from yesterday",
        bgColor: "bg-[#EFFFFE]",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  pl-72 -mt-16 pr-5">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col justify-center bg-white border border-gray-200 rounded-lg p-4 cursor-pointer transition-transform duration-300 hover:scale-90"
          >
            <div className="flex justify-between items-center">
              {/* Icon with Background */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.bgColor} text-blue-500 text-2xl`}
              >
                {stat.icon}
              </div>
              {/* Count */}
              <p className="text-3xl font-bold text-black mt-1 font-outfit">
                {stat.count}
              </p>
            </div>
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-700 mt-3">{stat.title}</h3>
  
            {/* Change */}
            <p className="text-sm text-green-500 mt-1 font-semibold">
              {stat.change}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default StatsCards;
  
