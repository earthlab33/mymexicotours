import React from "react";

function footer() {
  return (
    <div className="relative h-32 w-100">
      <div className="absolute inset-x-0 bottom-0 h-12">
        <p className="content-center text-white">
          &copy; {new Date().getFullYear()} My Mexico Tours
        </p>
      </div>
    </div>
  );
}

export default footer;
