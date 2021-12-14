import { useState, useContext } from "react";
import { Dialog, Fragment, Transition } from "@headlessui/react";
import Image from "next/image";

import Footer from "../ui/Footer";
import Drawer from "../navigation/Drawer";
import ModalContext from "../../context/ModalContext";
import NavigationBar from "../navigation/NavigationBar";
import MainButton from "../ui/MainButton";

export default function Layout(props) {
  const [isDrawerOpen, setDrawerIsOpen] = useState(false);
  const { isModalOpen, hideModal } = useContext(ModalContext);

  return (
    <div>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setDrawerIsOpen} />
      <div className="sticky top-0 z-30 mt-4">
        <NavigationBar setIsOpen={setDrawerIsOpen} />
      </div>
      <div className="pb-8 pt-4">{props.children}</div>
      <Footer />
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto z-50"
          onClose={() => {
            hideModal();
          }}
        >
          <div className="min-h-screen max-w-full w-full flex items-center px-6 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                onClick={() => {
                  hideModal();
                }}
                className="fixed inset-0 bg-primary-black bg-opacity-40"
              />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex flex-col justify-center max-w-full px-6 py-7 border-[3px] border-primary-black overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="div"
                  className="flex justify-between items-center"
                >
                  <h3 className="text-[1.8rem] font-bold leading-tight">
                    Let's connect
                  </h3>
                  <button
                    onClick={() => {
                      hideModal();
                    }}
                    className="outline-none pt-1.5"
                  >
                    <Image
                      src="/icons/close.svg"
                      height={36}
                      width={36}
                      alt="close"
                    />
                  </button>
                </Dialog.Title>
                <div className="mt-5 space-y-2.5">
                  <p className="text-md text-primary-black">Your message:</p>
                  <textarea
                    name="message"
                    id="message-contact"
                    cols="30"
                    rows="5"
                    placeholder={`Hello Andre! \nI'm interested to work with you in...`}
                    className="w-full outline-none border-2 border-primary-black border-opacity-30 rounded-xl p-4"
                  ></textarea>
                </div>
                <div className="mt-3">
                  <MainButton content="Shoot your message!" />
                </div>
                <div className="flex flex-col space-y-4">
                  <p className="self-center mt-6">
                    or... find me on these platforms:
                  </p>
                  <div className="grid grid-cols-3 px-7 pb-6 gap-8">
                  <div
                      className="aspect-square bg-[#F1EFEC] rounded-lg flex justify-center items-center"
                    >
                      <Image
                        src={`/icons/react.svg`}
                        height={36}
                        width={36}
                      />
                    </div>
                    <div
                      className="aspect-square bg-[#F1EFEC] rounded-lg flex justify-center items-center"
                    >
                      <Image
                        src={`/icons/react.svg`}
                        height={36}
                        width={36}
                      />
                    </div>
                    <div
                      className="aspect-square bg-[#F1EFEC] rounded-lg flex justify-center items-center"
                    >
                      <Image
                        src={`/icons/react.svg`}
                        height={36}
                        width={36}
                      />
                    </div>
                    <div
                      className="aspect-square bg-[#F1EFEC] rounded-lg flex justify-center items-center"
                    >
                      <Image
                        src={`/icons/react.svg`}
                        height={36}
                        width={36}
                      />
                    </div>
                    <div
                      className="aspect-square bg-[#F1EFEC] rounded-lg flex justify-center items-center"
                    >
                      <Image
                        src={`/icons/react.svg`}
                        height={36}
                        width={36}
                      />
                    </div>
                    <div
                      className="aspect-square bg-[#F1EFEC] rounded-lg flex justify-center items-center"
                    >
                      <Image
                        src={`/icons/react.svg`}
                        height={36}
                        width={36}
                      />
                    </div>
                    <div
                      className="aspect-square bg-[#F1EFEC] rounded-lg flex justify-center items-center"
                    >
                      <Image
                        src={`/icons/react.svg`}
                        height={36}
                        width={36}
                      />
                    </div>
                    <div
                      className="aspect-square bg-[#F1EFEC] rounded-lg flex justify-center items-center"
                    >
                      <Image
                        src={`/icons/react.svg`}
                        height={36}
                        width={36}
                      />
                    </div>
                    <div
                      className="aspect-square bg-[#F1EFEC] rounded-lg flex justify-center items-center"
                    >
                      <Image
                        src={`/icons/react.svg`}
                        height={36}
                        width={36}
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
