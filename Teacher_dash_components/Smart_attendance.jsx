import { FileSpreadsheet, Download } from "lucide-react";

const SmartAttendanceSection = () => {
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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a valid image file (JPG, PNG, GIF, or WEBP)");
        return;
      }

      if (file.size > 100 * 1024 * 1024) {
        alert("File size must be less than 100MB");
        return;
      }

      console.log("File selected:", file);
    }
  };

  return (
    <section className="min-h-[675px] text-zinc-700 dark:text-zinc-300 px-4 lg:px-6 xl:px-0 overflow-hidden below520:-ml-9 below520:-mr-7">
      <div className="w-full max-w-[1400px]">
        {/* <h1 className="text-xl md:text-2xl font-bold mb-5 text-center whitespace-nowrap below520:text-[13px] below375:text-[16px] below320:text-[14px]">
          Smart Attendance System Awaits You Teachers.
        </h1> */}
        <div className="grid h-auto">
          <div className="border w-full rounded-xl dark:border-zinc-500 p-2 md:p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 px-2 md:px-4 gap-4 sm:gap-0">
              <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap below375:text-xl below320:text-lg">
                Smart -| Attendance
              </h3>
              <div className="space-x-2">
                <button className="text-black bg-green-200 px-4 md:px-6 py-1.5 md:py-2 rounded-lg text-lg md:text-xl whitespace-nowrap below375:text-base below320:text-sm">
                  Active
                </button>
                <button className="text-black bg-cyan-100 px-4 md:px-6 py-1.5 md:py-2 rounded-lg text-lg md:text-xl whitespace-nowrap below375:text-base below320:text-sm">
                  Play Demo
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4 px-2 md:px-4 border-t-2 border-gray-700 py-4">
              <img
                src="/assets/icons/Profile.png"
                alt="Profile"
                className="h-7 -mr-1 md:h-9 below375:h-6 below320:h-5 profile-icon"
              />
              <h4 className="text-lg md:text-xl font-bold whitespace-nowrap below320:text-sm below408:text-[14px]">
                Data Obtained Of Students For Subject.
              </h4>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 space-x-2">
              <div className="w-full lg:w-auto ">
                <div className="max-h-[400px] overflow-y-auto overflow-x-hidden  scrollbar-none hide-scroll">
                  {students.map(({ id, name, rollno }) => (
                    <div
                      key={id}
                      className="flex flex-row items-center mx-2 md:mx-4 border border-gray-300 dark:border-gray-500 w-full sm:w-[98%] p-2 mb-2 student-list-item"
                    >
                      <div className="flex items-center gap-2 w-[80px] sm:w-[100px]">
                        <p className="text-xl md:text-2xl w-8 text-center below375:text-lg below320:text-base -ml-4">
                          {id}
                        </p>
                        <img
                          src="/assets/icons/Profile.png"
                          alt="Profile"
                          className="h-7 md:h-9 below375:h-6 below320:h-5 profile-icon "
                        />
                      </div>
                      <div className="flex flex-1 items-center">
                        <div className="grid grid-cols-3 gap-4 w-full mt-2">
                          <h4
                            className="text-base sm:text-lg md:text-xl font-bold text-left whitespace-nowrap overflow-hidden truncate below375:text-sm below320:text-xs -ml-6 below425:-ml-11 below425:text-[10px] below425:font-bold below520:text-[12px]"
                            title={name}
                          >
                            {name.length > 16 ? name.substring(0, 16) + "…" : name}
                          </h4>
                          <h6 className="text-base sm:text-lg md:text-xl font-bold text-center whitespace-nowrap below375:text-sm below320:text-xs below359:-ml-4">
                            {rollno}
                          </h6>
                          <button className="text-black bg-green-300 px-3 sm:px-4 py-1 rounded-lg text-base sm:text-lg md:text-xl whitespace-nowrap below375:text-sm below320:text-xs justify-self-end">
                            Status:
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="below1359:hidden xl:flex items-center justify-center max-w-[1500px]">
                <div className="flex items-center -mt-32">
                  <img
                    src="/assets/icons/link-1.PNG"
                    alt="Link"
                    className="h-9 below375:h-7 below320:h-6"
                  />
                  <img
                    src="/assets/icons/link-1.PNG"
                    alt="Link"
                    className="h-9 below375:h-7 below320:h-6"
                  />
                  <img
                    src="/assets/icons/link-2.PNG"
                    alt="Loader"
                    className="h-12 rounded-full mx-2 animate-spin below375:h-9 below320:h-8"
                  />
                  <img
                    src="/assets/icons/link-1.PNG"
                    alt="Link"
                    className="h-9 below375:h-7 below320:h-6"
                  />
                  <img
                    src="/assets/icons/link-1.PNG"
                    alt="Link"
                    className="h-9 below375:h-7 below320:h-6"
                  />
                </div>
              </div>

              <div className="flex-1 max-w-full lg:max-w-[500px]">
                <div className="flex flex-col gap-4">
                  {/* Upload Photo Section */}
                  <div className="flex flex-col border border-zinc-600 upload-section below425:-ml-4">
                    <div className="flex items-center justify-between py-2 px-2">
                      <h1 className="text-base sm:text-lg md:text-xl font-semibold ml-2 sm:ml-4 whitespace-nowrap below320:text-sm">
                        Upload Group Photo
                      </h1>
                      <img
                        src="/assets/icons/upload.png"
                        alt=""
                        className="h-8 sm:h-10 mr-2 sm:mr-4 below320:h-6"
                      />
                    </div>
                    <div className="p-2 sm:p-4 border-t border-zinc-600">
                      <label className="flex flex-col items-center justify-center w-full h-24 sm:h-32 border-2 border-dashed border-zinc-400 rounded-lg cursor-pointer bg-zinc-50 dark:bg-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-3 sm:pt-5 pb-4 sm:pb-6">
                          <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 below320:text-[10px]">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 text-center px-2 below320:text-[8px]">
                            Supported formats: JPG, PNG, GIF, WEBP (Max: 100MB)
                          </p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Excel Template Section */}
                  <div className="flex flex-col border border-zinc-600 below425:-ml-4">
                    <div className="flex items-center justify-between py-2 px-2">
                      <h1 className="text-base sm:text-lg md:text-xl font-semibold ml-2 sm:ml-4 whitespace-nowrap below320:text-sm flex items-center gap-1 sm:gap-2">
                        <FileSpreadsheet className="w-4 h-4 sm:w-6 sm:h-6" />
                        Excel Template
                      </h1>
                      <button className="flex items-center gap-1 sm:gap-2 bg-green-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-green-600 transition-colors mr-2 sm:mr-4">
                        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-medium">
                          Download
                        </span>
                      </button>
                    </div>
                    <div className="p-2 sm:p-4 border-t border-zinc-600 relative">
                      <div className="relative overflow-x-auto">
                        <div className="absolute inset-0 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm z-10 flex items-center justify-center">
                          <p className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200 below320:text-sm">
                            Preview Only
                          </p>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-2 sm:p-4 rounded-lg">
                          <table className="w-full border-collapse min-w-[300px]">
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

export default SmartAttendanceSection;