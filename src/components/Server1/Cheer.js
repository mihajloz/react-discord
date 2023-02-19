import React, { useState } from "react";

const Cheer = () => {
  const [count, setCount] = useState(768);

  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="px-2 py-[1px] bg-[#2f3136] border-[0.5px] border-[#2f3136] hover:bg-[#33363c] hover:border-[0.5px] hover:border-white/20 text-white/80 text-medium rounded-[5px]"
      >
        {count}
      </button>
    </div>
  );
};

export default Cheer;
