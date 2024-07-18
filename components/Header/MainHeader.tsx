import { NavItem } from "./Header";
import { Header } from "./Header";

const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "#courseMark", label: "Courses" },
    { href: "#callAction", label: "Join us" }
];

function MainHeader() {
    return <Header navItems={navItems} />;
}

export { MainHeader };