import { useState, useEffect } from 'react';
import { Menu, Sun, Moon, ChevronUp, ChevronDown } from 'lucide-react';
import ProfileSection from './Teacher_dash_components/Profile';
import PasswordSection from './Teacher_dash_components/Password';
import SmartAttendanceSection from './Teacher_dash_components/Smart_attendance';
import ManualAttendanceSection from './Teacher_dash_components/ManualAttend';
import DataAnalysisSection from './Teacher_dash_components/Data_analysis';
import ChatSystemSection from './Teacher_dash_components/Chat_System';

const Teacher_Dash = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isToolsVisible, setIsToolsVisible] = useState(true);
  const [isChatFullScreen, setIsChatFullScreen] = useState(false);

  const navItems = [
    { title: 'Profile', level: 'h1', id: 'profile' },
    { title: 'Password', level: 'h2', id: 'password' },
    { title: 'Smart Attendance', level: 'h3', id: 'smart-attendance' },
    { title: 'Manual Attendance', level: 'h4', id: 'manual-attendance' },
    { title: 'Data Analysis', level: 'h5', id: 'data-analysis' },
    { title: 'Chat System', level: 'h6', id: 'chat-system' },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const toggleToolsSection = () => {
    setIsToolsVisible(prev => !prev);
  };

  const handleChatFullScreenChange = (isFullScreen) => {
    setIsChatFullScreen(isFullScreen);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-200">
      {/* Header */}
      <section className={`fixed z-[60] w-full border-b border-gray-100 bg-white dark:bg-zinc-900 dark:border-zinc-800 transition-colors duration-200 ${
        isChatFullScreen ? 'hidden' : ''
      }`}>
        <div className="flex justify-between items-center h-[60px] px-4 lg:px-16 max-w-[2000px] mx-auto">
          <button
            className="lg:hidden p-2"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} className="text-zinc-800 dark:text-zinc-200" />
          </button>

          <div className="flex items-center gap-4 sm:gap-8 ml-auto">
            <div className="hidden sm:block">
              <input
                type="text"
                placeholder="Type Of Search"
                className="placeholder-gray-400 border py-2 px-4 w-[200px] md:w-[300px] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:placeholder-gray-500 dark:focus:ring-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200 transition-all rounded-md"
              />
            </div>

            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 pr-2">
              {['messages.png', 'notification-bell.png', 'Profile.png'].map((icon, idx) => (
                <div
                  key={idx}
                  className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center"
                >
                  <img
                    src={`/assets/icons/${icon}`}
                    alt={icon.split('.')[0]}
                    className="w-full h-full object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}

              <button
                onClick={toggleDarkMode}
                className="p-2 text-zinc-800 dark:text-zinc-200 hover:opacity-80 transition-opacity"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div className="sm:hidden px-4 h-[40px] flex items-center">
          <input
            type="text"
            placeholder="Type Of Search"
            className="w-full placeholder-gray-400 border py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:placeholder-gray-500 dark:focus:ring-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200 transition-all rounded-md"
          />
        </div>
      </section>

      {/* Tools Section */}
      <section className={`fixed top-[60px] sm:top-[60px] left-0 right-0 z-[55] bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 transition-all duration-200 ${
        isChatFullScreen ? 'hidden' : ''
      }`}>
        <div className={`h-[50px] flex items-center justify-between px-4 lg:px-16 ${
          isToolsVisible ? '' : 'opacity-50'
        }`}>
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-800 dark:text-zinc-200">
            TOOLS
          </h1>
          <button
            onClick={toggleToolsSection}
            className="p-2 text-zinc-800 dark:text-zinc-200 hover:opacity-80 transition-opacity flex items-center gap-2"
            aria-label="Toggle Tools Section"
          >
            {isToolsVisible ? (
              <>
                <span className="text-sm">Hide Tools</span>
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                <span className="text-sm">Show Tools</span>
                <ChevronDown size={20} />
              </>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isToolsVisible && (
          <div 
            className={`
              lg:hidden 
              ${isMenuOpen ? 'block' : 'hidden'}
              bg-white dark:bg-zinc-900
            `}
          >
            {navItems.map(({ title, id }) => (
              <div
                key={id}
                onClick={() => handleSectionClick(id)}
                className={`
                  py-3 px-4 
                  text-zinc-500 dark:text-zinc-400 
                  font-semibold 
                  hover:text-zinc-700 dark:hover:text-zinc-200 
                  transition-colors 
                  cursor-pointer
                  ${activeSection === id ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200' : ''}
                `}
              >
                {title}
              </div>
            ))}
          </div>
        )}

        {/* Desktop Navigation Menu */}
        {isToolsVisible && (
          <div className="hidden lg:flex flex-wrap gap-x-4 xl:gap-x-11 h-[50px] items-center px-4 lg:px-16 text-zinc-500 dark:text-zinc-400 font-semibold bg-white dark:bg-zinc-900">
            {navItems.map(({ title, level, id }) => {
              const Tag = level;
              return (
                <Tag
                  key={id}
                  onClick={() => handleSectionClick(id)}
                  className={`relative group cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors whitespace-nowrap ${
                    activeSection === id ? 'text-zinc-700 dark:text-zinc-200' : ''
                  }`}
                >
                  {title}
                  <span className={`absolute left-0 bottom-[-4px] w-full h-[2px] transition-colors duration-200 ${
                    activeSection === id ? 'bg-zinc-400 dark:bg-zinc-200' : 'bg-transparent group-hover:bg-zinc-400 dark:group-hover:bg-zinc-200'
                  }`}></span>
                </Tag>
              );
            })}
          </div>
        )}
      </section>

      {/* Content Section */}
      <section className={`relative z-0 transition-all duration-200 ${
        isChatFullScreen ? 'pt-0' : (isToolsVisible ? 'pt-[160px] sm:pt-[160px]' : 'pt-[110px] sm:pt-[110px]')
      }`}>
        {navItems.map(({ id }) => (
          <div
            key={id}
            className={`transition-all duration-300 overflow-hidden ${
              activeSection === id ? 'block' : 'hidden'
            }`}
          >
            <div className={`px-6 py-1 bg-white dark:bg-zinc-900 ${
              isChatFullScreen ? 'p-0' : ''
            }`}>
              {activeSection === 'profile' && <ProfileSection />}
              {activeSection === 'password' && <PasswordSection />}
              {activeSection === 'smart-attendance' && <SmartAttendanceSection />}
              {activeSection === 'manual-attendance' && <ManualAttendanceSection />}
              {activeSection === 'data-analysis' && <DataAnalysisSection />}
              {activeSection === 'chat-system' && (
                <ChatSystemSection onFullScreenChange={handleChatFullScreenChange} />
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Teacher_Dash;