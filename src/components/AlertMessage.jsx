import { useEffect } from "react";

const AlertMessage = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
        console.log("AlertMessage closing...");
      onClose(); // auto close after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white ${bgColor} z-[9999]`}>
      {message}
    </div>
  );
};

export default AlertMessage;
