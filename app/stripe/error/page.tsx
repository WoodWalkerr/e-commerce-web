/* eslint-disable react/no-unescaped-entities */
export default function ErrorStripe() {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500 p-4 md:p-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Oops! Something went wrong...</h2>
          <p className="text-sm md:text-lg lg:text-xl">We're working to fix this issue. Please try again later.</p>
        </div>
      </div>
    );
  }