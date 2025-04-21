import { useState } from "react";
import { FileSpreadsheet, Download } from "lucide-react";

const ManualAttendanceSection = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const students = [
    { id: 1, name: "Akshat Sharma", rollno: "ABC123" },
    { id: 2, name: "Piyush Rai", rollno: "ABC124" },
    { id: 3, name: "Pranay Sharma", rollno: "ABC125" },
    { id: 4, name: "Akshat Sharma", rollno: "ABC126" },
    { id: 5, name: "Piyush Rai", rollno: "ABC127" },
    { id: 6, name: "Pranay Sharma", rollno: "ABC128" },
    { id: 7, name: "John Doe", rollno: "ABC129" },
    { id: 8, name: "Jane Smith", rollno: "ABC130" },
    { id: 9, name: "Mike Johnson", rollno: "ABC131" },
  ];

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      setShowOverlay(false);
      // Add your attendance submission logic here
    }
  };

  return (
    <section className="min-h-[675px] text-zinc-700 dark:text-zinc-300 px-4 lg:px-6 xl:px-0 overflow-hidden below520:-ml-9 below520:-mr-7">
      <div className="w-full max-w-[1400px]">
        {/* <h1 className="text-xl md:text-2xl font-bold mb-5 text-center whitespace-nowrap below520:text-[13px] below375:text-[16px] below320:text-[14px]">
          Manual Attendance System Awaits You Teachers.
        </h1> */}
        <div className="grid h-auto">
          <div className="border w-full rounded-xl dark:border-zinc-500 p-2 md:p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 px-2 md:px-4 gap-4 sm:gap-0">
              <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap below375:text-xl below320:text-lg">
                Manual -| Attendance
              </h3>
              <div className="space-x-2">
                <button
                  onClick={() => setShowOverlay(true)}
                  className="text-black bg-green-200 px-4 md:px-6 py-1.5 md:py-2 rounded-lg text-lg md:text-xl whitespace-nowrap below375:text-base below320:text-sm"
                >
                  Active
                </button>
                <button className="text-black bg-cyan-100 px-4 md:px-6 py-1.5 md:py-2 rounded-lg text-lg md:text-xl whitespace-nowrap below375:text-base below320:text-sm">
                  Play Demo
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4 px-2 md:px-4 border-t-2 border-gray-700 py-4">
              <img
                src="\assets\icons\attendance.png"
                alt="Profile"
                className="h-7 -mr-1 md:h-9 below375:h-6 below320:h-5 profile-icon"
              />
              <h4 className="text-lg md:text-xl font-bold whitespace-nowrap below320:text-sm below408:text-[14px]">
                Data Obtained Of Students For Subject.
              </h4>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 space-x-2">
              <div className="w-full lg:w-auto relative">
                {showOverlay && (
                  <div className="absolute inset-0 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                      <h2 className="text-lg font-semibold mb-4">
                        Mark Attendance
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Date
                          </label>
                          <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full p-2 border rounded dark:bg-zinc-700 dark:border-zinc-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Time
                          </label>
                          <input
                            type="time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full p-2 border rounded dark:bg-zinc-700 dark:border-zinc-600"
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => setShowOverlay(false)}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSubmit}
                            className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600"
                            disabled={!selectedDate || !selectedTime}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="max-h-[380px] overflow-y-auto overflow-x-hidden  custom-scrollbar scrollbar-none mb-10 hide-scrollbar hide-scroll -ml-2">
                  {students.map(({ id, name, rollno }) => (
                    <div
                      key={id}
                      className="flex flex-row items-center mx-2 md:mx-4 border border-gray-300 dark:border-gray-500 w-full sm:w-[98%] p-2 mb-2 student-list-item"
                    >
                      <div className="flex items-center gap-2 w-[80px] sm:w-[100px] mt-2">
                        <p className="text-xl md:text-2xl w-8 text-center below375:text-lg below320:text-base -ml-4">
                          {id}
                        </p>
                        <img
                          src="/assets/icons/Profile.png"
                          alt="Profile"
                          className="h-7 md:h-9 below375:h-6 below320:h-5 profile-icon"
                        />
                      </div>
                      <div className="flex flex-1 items-center mt-4">
                        <div className="grid grid-cols-3 gap-4 w-full">
                          <h4
                            className="text-base sm:text-lg md:text-xl font-bold text-left whitespace-nowrap overflow-hidden truncate below375:text-sm below320:text-xs -ml-6 below425:-ml-11 below425:text-[10px] below425:font-bold below520:text-[12px]"
                            title={name}
                          >
                            {name.length > 16
                              ? name.substring(0, 16) + "…"
                              : name}
                          </h4>
                          <h6 className="text-base sm:text-lg md:text-xl font-bold text-center whitespace-nowrap below375:text-sm below320:text-xs below359:-ml-4">
                            {rollno}
                          </h6>
                          <select className="bg-zinc-50 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg p-2 below425:p-1 below425:w-28 below375:p-0.5 below320:p-0.5 -ml-3 -mt-1">
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                            <option value="late">Late</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 max-w-full lg:max-w-[500px] h-[380px]">
                <div className="flex flex-col gap-4 h-full">
                  <div className="flex flex-col border border-zinc-600 below425:-ml-4 h-full">
                    <div className="flex items-center justify-between py-2 px-2">
                      <h1 className="text-base sm:text-lg md:text-xl font-semibold ml-2 sm:ml-4 whitespace-nowrap below320:text-sm flex items-center gap-1 sm:gap-2">
                        <FileSpreadsheet className="w-4 h-4 sm:w-6 sm:h-6" />
                        Excel Template
                      </h1>
                      <button className="flex items-center gap-1 sm:gap-2 bg-green-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-green-600 transition-colors mr-2 sm:mr-4">
                        <Download className="w-4 h-4 sm:w-5 sm:h-6" />
                        <span className="text-xs sm:text-sm font-medium">
                          Download
                        </span>
                      </button>
                    </div>
                    <div className="p-2 sm:p-4 border-t border-zinc-600 relative h-full">
                      <div className="relative overflow-x-auto h-full">
                        <div className="absolute inset-0 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm z-10 flex items-center justify-center">
                          <p className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200 below320:text-sm">
                            Preview Only
                          </p>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-2 sm:p-4 rounded-lg h-full">
                          <table className="w-full border-collapse min-w-[300px] h-full">
                            <thead>
                              <tr>
                                <th className="border p-1 sm:p-2 text-left text-xs sm:text-sm below320:text-[10px] table-text">
                                  Roll No
                                </th>
                                <th className="border p-1 sm:p-2 text-left text-xs sm:text-sm below320:text-[10px] table-text">
                                  Student Name
                                </th>
                                <th className="border p-1 sm:p-2 text-left text-xs sm:text-sm below320:text-[10px] table-text">
                                  Status
                                </th>
                                <th className="border p-1 sm:p-2 text-left text-xs sm:text-sm below320:text-[10px] table-text">
                                  Date
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {[1, 2, 3].map((index) => (
                                <tr key={index}>
                                  <td className="border p-1 sm:p-2 text-xs sm:text-sm below320:text-[10px] table-text">
                                    ABC123
                                  </td>
                                  <td className="border p-1 sm:p-2 text-xs sm:text-sm below320:text-[10px] table-text">
                                    Student Name
                                  </td>
                                  <td className="border p-1 sm:p-2 text-xs sm:text-sm below320:text-[10px] table-text">
                                    Present
                                  </td>
                                  <td className="border p-1 sm:p-2 text-xs sm:text-sm below320:text-[10px] table-text">
                                    2024-02-04
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualAttendanceSection;
