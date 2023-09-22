"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

const MobileNav = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="hidden sm:block">
          <HiMenu className="text-4xl" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          forceMount
          className="data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-900/50 backdrop-blur-[2px]"
        />
        <Dialog.Content
          forceMount
          className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] min-h-[50vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-gray-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none dark:bg-gray-800"
        >
          <Dialog.Close asChild>
            <button className="absolute right-4 top-4 ">
              <AiOutlineCloseCircle className="text-3xl " />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default MobileNav;
