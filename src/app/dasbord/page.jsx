
"use client";



const Dasbord = () => {
  const orders = [
    {
      id: "#ORD-1024",
      food: "Chicken Burger",
      quantity: 2,
      price: 18,
      date: "Aug 10, 2026",
      time: "08:30 PM",
      status: "Completed",
    },
    {
      id: "#ORD-1023",
      food: "Beef Steak",
      quantity: 1,
      price: 25,
      date: "Aug 08, 2026",
      time: "07:15 PM",
      status: "Completed",
    },
    {
      id: "#ORD-1022",
      food: "Cheese Pizza",
      quantity: 1,
      price: 14,
      date: "Aug 05, 2026",
      time: "09:00 PM",
      status: "Completed",
    },
    {
      id: "#ORD-1021",
      food: "French Fries",
      quantity: 2,
      price: 8,
      date: "Aug 02, 2026",
      time: "06:45 PM",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">

      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-blue-600">
          Customer Dashboard
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
          Welcome back, Customer 👋
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Here is your restaurant activity and order history.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total Orders */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Orders
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                24
              </h2>

              <p className="mt-2 text-xs text-green-600">
                ↑ 12% this month
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              🍽️
            </div>
          </div>
        </div>

        {/* Total Spent */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Spent
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                $485
              </h2>

              <p className="mt-2 text-xs text-slate-500">
                From all orders
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              💳
            </div>
          </div>
        </div>

        {/* Favorite Food */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Favorite Food
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-900">
                Chicken Burger
              </h2>

              <p className="mt-2 text-xs text-slate-500">
                Ordered 8 times
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
              🍔
            </div>
          </div>
        </div>

        {/* Last Visit */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Last Visit
              </p>

              <h2 className="mt-2 text-xl font-bold text-slate-900">
                Aug 10
              </h2>

              <p className="mt-2 text-xs text-slate-500">
                08:30 PM
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
              📅
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Recent Orders */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">

          <div className="flex items-center justify-between border-b border-slate-100 p-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Recent Orders
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your latest restaurant activity
              </p>
            </div>

            <button className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-600 hover:text-white">
              View All
            </button>
          </div>

          {/* Orders */}
          <div className="divide-y divide-slate-100">

            {orders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col gap-4 p-6 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
              >

                {/* Food */}
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                    🍽️
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {order.food}
                    </h3>

                    <p className="text-xs text-slate-400">
                      {order.id}
                    </p>
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <p className="text-xs text-slate-400">
                    Quantity
                  </p>

                  <p className="font-semibold text-slate-700">
                    {order.quantity} item
                  </p>
                </div>

                {/* Date */}
                <div>
                  <p className="text-xs text-slate-400">
                    Date & Time
                  </p>

                  <p className="font-medium text-slate-700">
                    {order.date}
                  </p>

                  <p className="text-xs text-slate-400">
                    {order.time}
                  </p>
                </div>

                {/* Price */}
                <div>
                  <p className="font-bold text-slate-900">
                    ${order.price}
                  </p>

                  <span className="mt-1 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {order.status}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Customer Profile */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold text-slate-900">
            Customer Profile
          </h2>

          <div className="mt-6 flex flex-col items-center text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-4xl text-white shadow-lg">
              👤
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              John Doe
            </h3>

            <p className="text-sm text-slate-500">
              john@example.com
            </p>

            <div className="mt-6 w-full space-y-4 text-left">

              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <span className="text-sm text-slate-500">
                  Total Meals
                </span>

                <span className="font-bold text-slate-900">
                  38
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <span className="text-sm text-slate-500">
                  This Month
                </span>

                <span className="font-bold text-slate-900">
                  8 Meals
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <span className="text-sm text-slate-500">
                  Member Since
                </span>

                <span className="font-bold text-slate-900">
                  Jan 2026
                </span>
              </div>

            </div>

            <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-500">
              View Profile
            </button>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Your Food Activity 🍴
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              You have enjoyed 38 meals from our restaurant.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="rounded-xl bg-orange-50 px-5 py-3 text-center">
              <p className="text-2xl font-bold text-orange-600">
                38
              </p>

              <p className="text-xs text-slate-500">
                Meals
              </p>
            </div>

            <div className="rounded-xl bg-green-50 px-5 py-3 text-center">
              <p className="text-2xl font-bold text-green-600">
                24
              </p>

              <p className="text-xs text-slate-500">
                Orders
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 px-5 py-3 text-center">
              <p className="text-2xl font-bold text-blue-600">
                $485
              </p>

              <p className="text-xs text-slate-500">
                Spent
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dasbord;

