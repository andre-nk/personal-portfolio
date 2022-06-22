import { useRouter } from "next/router";
import { useState } from "react";

import Footer from "../ui/Footer";
import Drawer from "../navigation/Drawer";
import NavigationBar from "../navigation/NavigationBar";
import ContactModal from "../ui/ContactModal";

export default function Layout(props) {
  const [isDrawerOpen, setDrawerIsOpen] = useState(false);
  const router = useRouter();
  const socialLink = props.children.props.socialLink;
  const resumeLink = props.children.props.resumeLink;

  if (router.pathname === "/links") {
    return (
      <div>
        <div className="pb-8">{props.children}</div>
        <Footer />
        { socialLink && (<ContactModal socialLink={socialLink} />) }
      </div>
    );
  }

  return (
    <div>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setDrawerIsOpen} resumeLink={resumeLink} />
      <div className="sticky top-0 z-30 mt-4">
        <NavigationBar setIsOpen={setDrawerIsOpen} resumeLink={resumeLink} />
      </div>
      <div className="pb-8">{props.children}</div>
      <Footer />
      { socialLink && (<ContactModal socialLink={socialLink} />) }
    </div>
  );
}
