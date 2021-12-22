import Image from "next/image";
import { useContext, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import MainButton from "../ui/MainButton";
import ModalContext from "../../context/ModalContext";

export default function ContactModal({ socialLink }) {
  const { isModalOpen, hideModal } = useContext(ModalContext);
  const [messageBody, setMessageBody] = useState("");

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed max-h-full flex inset-0 overflow-y-auto z-50"
        onClose={() => {
          hideModal();
        }}
      >
        <div className="max-w-full w-full self-center justify-center flex items-center px-6 text-center">
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
            <div className="max-w-full p-8 border-[3px] border-primary-black overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="div"
                className="flex flex-1 justify-between items-center lg:mb-2"
              >
                <h3 className="text-[1.8rem] font-bold leading-tight">
                  {"Let's connect"}
                </h3>
                <button
                  onClick={() => {
                    hideModal();
                  }}
                  className="outline-none"
                >
                  <Image
                    src="/icons/close.svg"
                    height={32}
                    width={32}
                    alt="close"
                  />
                </button>
              </Dialog.Title>
              <div className="flex flex-col lg:space-x-10 lg:flex-row justify-center">
                <div className="lg:flex-1">
                  <div className="mt-5 space-y-2.5">
                    <p className="text-md text-primary-black">Your message:</p>
                    <textarea
                      name="message"
                      id="message-contact"
                      cols="30"
                      rows="5"
                      value={messageBody}
                      onChange={(e) => {
                        e.preventDefault();
                        setMessageBody(e.target.value);
                      }}
                      placeholder={`Hello Andre! \nI'm interested to work with you in...`}
                      className="w-full outline-none border-2 border-primary-black border-opacity-30 rounded-xl p-4"
                    ></textarea>
                  </div>
                  <div className="mt-3">
                    <a
                      href={`mailto:andreasnotokusumo23@gmail.com?subject=Work and Collaboration Interest for Andreas N.&body=${messageBody}`}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <MainButton content="Shoot your message!" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 lg:flex-1">
                  <p className="self-center mt-6">
                    or... find me on these platforms:
                  </p>
                  {socialLink.map((linkItem) => {
                    const { link, linkIcon, title } = linkItem.fields;
                    return (
                      <button
                        onClick={() => {
                          window.open(link, "_blank");
                        }}
                        key={linkItem.sys.id}
                        className={`w-full py-3.5 px-3.5 flex space-x-4 justify-start items-center rounded-lg font-medium xl:whitespace-nowrap text-lg lg:px-8 duration-200 ${"bg-white text-primary-black hover:bg-hover-white border-[2.5px] border-primary-black"}`}
                      >
                        <Image
                          src={"https:" + linkIcon.fields.file.url}
                          height={24}
                          width={24}
                          alt="social-icon"
                        />
                        <p>{title}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
