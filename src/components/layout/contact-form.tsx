import { FC, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useLayoutStore } from '../../state';
import { CustomToast, customToastOptions } from './custom-toast';

const encodeFormData = (data: any) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const successToast = () =>
  toast.custom(
    (t) => <CustomToast icon="🎉" message="Message sent!" toast={t} />,
    customToastOptions
  );

const failureToast = () =>
  toast.custom(
    (t) => (
      <CustomToast icon="💔" message="Something went wrong :(" toast={t} />
    ),
    customToastOptions
  );

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: FC = () => {
  const { setIsContactDialogOpen } = useLayoutStore();
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, isValid, errors },
    reset,
  } = useForm<ContactFormData>({ mode: 'onChange' });

  const handleFormSubmit = (data: ContactFormData) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData({ 'form-name': 'contact', ...data }),
    })
      .then(() => successToast())
      .catch(() => failureToast())
      .finally(() => setIsContactDialogOpen(false));
  };

  useEffect(() => {
    if (!isSubmitSuccessful) {
      return;
    }

    reset({
      name: '',
      email: '',
      message: '',
    });
  }, [isSubmitSuccessful, reset]);

  return (
    <form name="contact" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            {...register('name', {
              required: true,
              maxLength: 50,
              pattern: /^[a-z ,.'-]+$/i,
            })}
            name="name"
            id="name"
            placeholder="Geralt of Rivia"
            className={errors.name && 'ring-2 ring-red-500'}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Your E-Mail</label>
          <input
            type="email"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            name="email"
            id="mail"
            placeholder="portals.suck@whitewolf.com"
            className={errors.email && 'ring-2 ring-red-500'}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            {...register('message', {
              required: true,
              maxLength: 512,
            })}
            name="message"
            id="message"
            rows={8}
            placeholder="Write your message here and I will get back to you as soon as possible."
            className={errors.message && 'ring-2 ring-red-500'}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className={`mt-4 inline-flex justify-center rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:ring-2 hover:ring-black dark:hover:ring-white ${
            !isValid && 'pointer-events-none bg-blue-500/50'
          }`}
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
