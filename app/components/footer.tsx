import { SiGithub, SiLinkedin } from "react-icons/si";

const navigation = {
  main: [
    { name: "Home", href: "#" },
    { name: "Uses", href: "/uses" },
    { name: "Gear", href: "/gear" },
    // { name: "Press", href: "#" },
    // { name: "Accessibility", href: "#" },
    // { name: "Partners", href: "#" },
  ],
  social: [

    {
      name: "GitHub",
      href: "#",
      icon: SiGithub,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: SiLinkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          Built with 💪 by Brady
        </p>
      </div>
    </footer>
  );
}
