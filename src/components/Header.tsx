import PillNav from '@/components/PillNav';

const Header = () => {
  const navItems = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Benefits",
      href: "#benefits",
    },
    {
      label: "Token",
      href: "#token",
    },
    {
      label: "Community",
      href: "#community",
    },
    {
      label: "Discord",
      href: "https://discord.gg/mS6HzJ39",
    },
  ];

  return (
    <PillNav
      logo="/logo.png"
      logoAlt="CPC Logo"
      items={navItems}
      baseColor="#ffffff"
      pillColor="hsl(193 100% 50%)"
      hoveredPillTextColor="#ffffff"
      pillTextColor="rgba(255, 255, 255, 0.8)"
      initialLoadAnimation={true}
    />
  );
};

export default Header;