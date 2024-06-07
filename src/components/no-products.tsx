const NoProducts = () => {
  return (
    <div className="flex items-center justify-center h-auto bg-white">
      <div className="text-center">
        <h2 className="text-lg md:text-xl font-base mb-8">
          This store has no products
        </h2>
        <div className="w-44 md:w-64 mx-auto">
          <svg viewBox="0 0 100 100" className="w-full h-auto">
            {/* SVG path elements for the animated SVG */}
            <path
              fill="#000000"
              d="M50,10c22.1,0,40,17.9,40,40s-17.9,40-40,40S10,72.1,10,50S27.9,10,50,10z M50,14c-19.9,0-36,16.1-36,36
                s16.1,36,36,36s36-16.1,36-36S69.9,14,50,14z"
            />
            <path
              fill="#000000"
              d="M49.9,41.5c-4.7,0-8.5,3.8-8.5,8.5v20c0,4.7,3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5v-20
                C58.4,45.3,54.6,41.5,49.9,41.5z M49.9,45.5c2.5,0,4.5,2,4.5,4.5v20c0,2.5-2,4.5-4.5,4.5s-4.5-2-4.5-4.5v-20
                C45.4,47.5,47.4,45.5,49.9,45.5z"
            />
            <path
              fill="#000000"
              d="M50,32c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2s2-0.9,2-2v-3C52,32.9,51.1,32,50,32z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NoProducts;
