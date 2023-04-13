import React from "react";

const Message = ({ errorMessage }) => {
  return (
    <div
      className="mb-4 rounded-lg bg-red-600 px-6 py-5 text-base text-danger-700"
      role="alert"
    >
      {errorMessage}
    </div>
  );
};

export default Message;
