const MyCards = () => {
  return (
    <div className="w-full ">
      <div className="flex items-center justify-between w-full pl-2 pr-8">
        <h2 className="text-lg font-semibold text-primary">My Cards</h2>
        <span className="text-sm font-semibold text-primary cursor-pointer hover:text-[#718EBF]">
          See All
        </span>
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full">
        <div className="relative bg-gradient-to-br from-[#5B5A6F] to-[#000000] text-white p-4 rounded-2xl shadow-lg flex flex-col h-52 w-full">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-300 leading-none">
                Balance
              </span>
              <h3 className="text-lg font-semibold leading-none">$5,756</h3>
            </div>
            <img src="/card.png" alt="Card Icon" className="w-6 h-6" />
          </div>

          <div className="flex justify-between items-center text-xs text-gray-400 mt-4">
            <div className="flex flex-col leading-tight gap-0">
              <p className="text-xs text-gray-400">CARD HOLDER</p>
              <p className="text-sm text-gray-200">Eddy Cusuma</p>
            </div>
            <div className="flex flex-col leading-tight text-right gap-0">
              <p className="text-xs text-gray-400">VALID THRU</p>
              <p className="text-sm text-gray-200">12/22</p>
            </div>
          </div>

          <div className="absolute left-0 bottom-0 w-full flex items-center justify-between bg-gradient-to-r from-[#706f7c] to-[#2C2C38] px-4 py-3 rounded-b-2xl">
            <p className="text-lg tracking-wider text-gray-100">
              3778 **** **** 1234
            </p>

            <img
              src="/img11.png"
              alt="Toggle Switch"
              className="w-10 h-6 cursor-pointer"
            />
          </div>
        </div>

          <div className="relative bg-white p-6 rounded-2xl shadow-md border border-gray-300 flex flex-col h-52 w-full">
         <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 leading-none">
                Balance
              </span>
              <h3 className="text-lg font-semibold text-gray-900 leading-none">
                $5,756
              </h3>
            </div>
            <img src="/card11.png" alt="Card Icon" className="w-6 h-6" />
          </div>

          <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
            <div className="flex flex-col leading-tight gap-0">
              <p className="text-xs">CARD HOLDER</p>
              <p className="text-sm text-gray-900">Eddy Cusuma</p>
            </div>
            <div className="flex flex-col leading-tight text-right gap-0">
              <p className="text-xs">VALID THRU</p>
              <p className="text-sm text-gray-900">12/22</p>
            </div>
          </div>

          <div className="absolute left-0 bottom-0 w-full flex items-center justify-between border-t border-gray-200 px-4 py-3 rounded-b-2xl">
            <p className="text-lg tracking-wider text-gray-900">
              3778 **** **** 1234
            </p>

            <img
              src="/img12.png"
              alt="Toggle Switch"
              className="w-10 h-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCards;
