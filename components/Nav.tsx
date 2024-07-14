import { FloatingNav } from "@/components/ui/floating-navbar";

const navigation = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" }
];

const Nav = () => {
  return (
    <div>
      <FloatingNav navItems={navigation} />
      <nav className="absolute top-10 flex w-full items-center justify-center gap-10">
        <a
          href="#hero"
          className="absolute left-5 text-2xl font-medium hover:text-yellow-400"
        >
          beath.dev
        </a>
        {navigation.map((item, index) => (
          <a key={index} href={item.link} className="">
            <span className="rounded-br-md rounded-tl-md border border-white px-3 py-1 font-medium hover:border-yellow-400 hover:text-yellow-400">
              <span className="mr-1 hover:text-yellow-400">{index}.</span>
              {item.name}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
