import React from "react";

export default function ChatLayout({ children }) {
  return (
    <div>
      {/* title section */}
      <div class="w-full min-h-[5.25rem] px-5 py-6"></div>
      {children}
    </div>
  );
}
