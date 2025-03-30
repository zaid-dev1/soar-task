const transactions = [
  {
    id: 1,
    type: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    icon: "/deposit-icon.png",
    textColor: "#FF4B4A",
  },
  {
    id: 2,
    type: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    icon: "/paypal-icon.png",
    textColor: "#41D4A8",
  },
  {
    id: 3,
    type: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    icon: "/transfer-icon.png",
    textColor: "#41D4A8",
  },
];

const RecentTransactions = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between items-center px-3">
        <h2 className="text-lg font-semibold text-primary">
          Recent Transactions
        </h2>
      </div>

     
      <div className="mt-6 flex flex-col gap-4 py-4 bg-white rounded-xl shadow-md h-52 w-full">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between px-4"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${transaction.bgColor}`}
              >
                <img src={transaction.icon} alt="" className="w-10 h-10" />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900">
                  {transaction.type}
                </p>
                <p className="text-xs text-[#718EBF]">{transaction.date}</p>
              </div>
            </div>

            <p
              style={{ color: transaction.textColor }}
              className={`text-sm font-semibold`}
            >
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
