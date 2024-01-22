export default function Footer() {
    return (
        <footer className="bg-white text-gray-500 border-t border-solid border-gray-300 mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
        <div className="container mx-auto p-4 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2 ">
              {" "}
              Shop<span className="text-primary">Ease</span>
            </h3>
            <p className="text-sm">
              ShopEase is your all-in-one solution for a seamless and enjoyable
              shopping journey.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}