import { FC, Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/24/solid';

import { ContactForm, Socials } from '.';
import { useLayoutStore } from '../../state';

export const ContactDialog: FC = () => {
  const { isContactMeDialogOpen, setIsContactDialogOpen } = useLayoutStore();

  return (
    <Transition appear show={isContactMeDialogOpen} as={Fragment}>
      <Dialog as="div" onClose={() => setIsContactDialogOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="overlayable relative w-full transform overflow-hidden rounded-2xl px-6 py-6 text-left align-middle transition-all tablet:max-w-screen-tablet tablet:px-12 desktop:max-w-screen-tablet">
                <Dialog.Title as="h2">Get in touch with me! 👋</Dialog.Title>

                <button
                  className="absolute top-4 right-3 hover:text-slate-200"
                  onClick={() => setIsContactDialogOpen(false)}
                >
                  <XCircleIcon className="h-8 w-8" />
                </button>

                <div className="mt-6 flex flex-col gap-4">
                  <ContactForm />
                  <hr />
                  <Socials />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
