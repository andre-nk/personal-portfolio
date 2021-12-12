import { useState } from "react";

import Drawer from "../navigation/Drawer";
import NavigationBar from "../navigation/NavigationBar";

export default function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavigationBar setIsOpen={setIsOpen} />
      <div className="py-6">{props.children}</div>
    </div>
  );
}
