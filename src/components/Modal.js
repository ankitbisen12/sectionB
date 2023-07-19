import { Fragment, useRef,useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const Modal = () => {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-[70%] items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex flex-1 h-20 w-20 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-24 h-24 text-blue-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-6 text-center ">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-bold text-xl leading-6 text-blue-500 "
                    >
                      Success !
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-lg font-semibold text-black-500">
                        729 entries successfully uploaded
                      </p>
                    </div>
                    <div className="mt-2">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-3xl bg-blue-600 px-16 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                        onClick={() =>setOpen(false)}
                      >
                        Go to My Entries
                      </button>
                    </div>
                    <div className="mt-2">
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-100 px-16 py-4 text-lg font-semibold text-blue-600 shadow-sm rounded-3xl hover:bg-blue-50 md:px-20 py-4 sm:mt-0 sm:w-auto"
                        onClick={() =>setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
