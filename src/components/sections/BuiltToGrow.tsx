import { Code, Terminal, Languages, Code2 } from "lucide-react";

const ideIcons = [
  { name: "VS Code", url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
  { name: "IntelliJ IDEA", url: "https://resources.jetbrains.com/storage/products/company/brand/logos/IntelliJ_IDEA_icon.svg" },
  { name: "PyCharm", url: "https://resources.jetbrains.com/storage/products/company/brand/logos/PyCharm_icon.svg" },
  { name: "PhpStorm", url: "https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg" },
  { name: "WebStorm", url: "https://resources.jetbrains.com/storage/products/company/brand/logos/WebStorm_icon.svg" },
  { name: "CLion", url: "https://resources.jetbrains.com/storage/products/company/brand/logos/CLion_icon.svg" },
  { name: "DataGrip", url: "https://resources.jetbrains.com/storage/products/company/brand/logos/DataGrip_icon.svg" },
  { name: "DataSpell", url: "https://resources.jetbrains.com/storage/products/company/brand/logos/DataSpell_icon.svg" },
  { name: "GoLand", url: "https://resources.jetbrains.com/storage/products/company/brand/logos/GoLand_icon.svg" },
  { name: "RubyMine", url: "https://resources.jetbrains.com/storage/products/company/brand/logos/RubyMine_icon.svg" },
  { name: "Rider", url: "https://resources.jetbrains.com/storage/products/company/brand/logos/Rider_icon.svg" },
  { name: "Xcode", url: "https://upload.wikimedia.org/wikipedia/en/c/c0/Xcode_icon.png" },
];

const languageIcons = [
  { name: "JavaScript", icon: <Code size={50} /> },
  { name: "C#", icon: <Terminal size={50} /> },
  { name: "TypeScript", icon: <Code2 size={50} /> },
  { name: "Python", icon: <Languages size={50} /> },
];

const BuiltToGrow = () => {
  return (
    <section className="bg-black text-white py-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-6">
          Built To Grow With You
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - IDE Icons */}
          <div className="bg-[#121212] p-6 rounded-xl w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              {ideIcons.map((ide) => (
                <img key={ide.name} src={ide.url} alt={ide.name} className="w-16 h-16 object-contain" />
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-orange-400 text-sm font-bold uppercase">Extensions</h3>
              <p className="text-gray-400 mt-2">
                We meet you where you code. Enjoy seamless integration with your favorite IDEs.
                Zencoder enhances workflow without interruptions.
              </p>
            </div>
          </div>

          {/* Right - Languages */}
          <div className="bg-[#121212] p-6 rounded-xl w-full">
            <div className="mb-4">
              <span className="bg-black text-sm px-3 py-1 rounded-md">70+ Languages</span>
            </div>

            <div className="flex gap-6 flex-wrap justify-center">
              {languageIcons.map((lang) => (
                <div key={lang.name} className="flex flex-col items-center">
                  {lang.icon}
                  <span className="text-gray-300 text-sm mt-2">{lang.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-orange-400 text-sm font-bold uppercase">Languages</h3>
              <p className="text-gray-400 mt-2">
                Built for every developer. From Python to Java, Zencoder supports the languages
                you use, so you can focus on coding, not compatibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltToGrow;
