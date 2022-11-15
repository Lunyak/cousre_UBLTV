import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: (boolean: boolean) => void;
}

const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const ANIMATION_DELAY = 300;

  const toggleModal = () => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose(false);
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  };

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div className={cls.overlay} onClick={toggleModal}>
        <div
          className={classNames(cls.content, { [cls.contentOpened]: isOpen })}
          onClick={onContentClick}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
