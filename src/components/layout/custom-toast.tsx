import { FC } from 'react';
import { Toast, ToastOptions } from 'react-hot-toast';

type CustomToastProps = {
  message: string;
  icon: string;
  toast: Toast;
};

// TODO implement enter/leave animations
export const CustomToast: FC<CustomToastProps> = ({ message, icon, toast }) => {
  return (
    <div
      className={`overlayable flex items-center gap-2 rounded px-6 py-2 ring-2 ring-blue-500 ${
        toast.visible ? 'animate-enter' : 'animate-leave'
      }`}
    >
      <div className="text-xl">{icon}</div>
      <div className="font-semibold">{message}</div>
    </div>
  );
};

export const customToastOptions: ToastOptions = {
  position: 'bottom-right',
};
