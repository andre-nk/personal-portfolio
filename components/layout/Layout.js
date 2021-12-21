import { useState } from "react";

import Footer from "../ui/Footer";
import Drawer from "../navigation/Drawer";
import NavigationBar from "../navigation/NavigationBar";
import ContactModal from "../ui/ContactModal";

export default function Layout(props) {
  const [isDrawerOpen, setDrawerIsOpen] = useState(false);

  return (
    <div>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setDrawerIsOpen} />
      <div className="sticky top-0 z-30 mt-4">
        <NavigationBar setIsOpen={setDrawerIsOpen} />
      </div>
      <div className="pb-8">{props.children}</div>
      <Footer />
      <ContactModal socialLink={props.children.props.socialLink} />
    </div>
  );
}