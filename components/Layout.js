import { useState } from "react";

import Drawer from "./Drawer";
import Navigation from "./Navigation";

export default function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navigation setIsOpen={setIsOpen} />
      <div className="py-6">{props.children}</div>
    </div>
  );
}
