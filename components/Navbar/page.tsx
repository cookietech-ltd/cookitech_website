import DesktopNavbar from "./Desktop/pages";
import MobileNavbar from "./Mobile/page";

interface Props {
  ref: any;
}
const Navbar = ({ ref }: Props) => {
  return (
    <section>
      <DesktopNavbar _ref={ref} />
      <MobileNavbar />
    </section>
  );
};

export default Navbar;
