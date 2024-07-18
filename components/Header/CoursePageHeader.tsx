import { NavItem } from "./Header";
import { Header } from "./Header";

const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "#callAction", label: "Join us" }
];

function CoursePageHeader() {
    return <Header navItems={navItems} />;
}

export { CoursePageHeader };