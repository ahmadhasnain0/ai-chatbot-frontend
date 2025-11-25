"use client";

export default function StudentPortalSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">

      {/* HEADER */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-10 bg-gray-300 rounded-md"></div>

            <div className="hidden sm:block">
              <div className="w-32 sm:w-40 h-4 bg-gray-300 rounded"></div>
              <div className="w-24 sm:w-32 h-3 bg-gray-200 rounded mt-2"></div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            <div className="w-14 lg:w-16 h-4 bg-gray-300 rounded"></div>
            <div className="w-14 lg:w-16 h-4 bg-gray-300 rounded"></div>
            <div className="w-14 lg:w-16 h-4 bg-gray-300 rounded"></div>
            <div className="w-14 lg:w-16 h-4 bg-gray-300 rounded"></div>
          </div>

          {/* User */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* small icon */}
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>

            {/* user info + avatar */}
            <div className="hidden sm:flex items-center gap-2">
              <div>
                <div className="w-20 sm:w-24 h-3 bg-gray-300 rounded"></div>
                <div className="w-16 sm:w-20 h-2 bg-gray-200 rounded mt-1"></div>
              </div>
              <div className="w-8 sm:w-9 h-8 sm:h-9 bg-gray-300 rounded-full"></div>
            </div>
          </div>

        </div>
      </header>

      {/* WELCOME SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        <div className="w-52 sm:w-64 h-6 bg-gray-300 rounded"></div>
        <div className="w-64 sm:w-96 h-4 bg-gray-200 rounded mt-3"></div>
      </section>

      {/* AI ASSISTANT CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        <div className="bg-gray-300 w-full h-52 sm:h-64 md:h-72 rounded-2xl shadow"></div>
      </section>

      {/* GRID CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-8 sm:p-10 bg-gray-300 rounded-2xl h-32 sm:h-40 shadow"
          ></div>
        ))}
      </section>

    </div>
  );
}
