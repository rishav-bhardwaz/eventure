interface Category {
    id: number;
    name: string;
    image: string;
  }
  
  const categories: Category[] = [
    {
      id: 1,
      name: "Entertainment",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Educational & Business",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Cultural & Arts",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      name: "Sports & Fitness",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      name: "Technology & Innovation",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      name: "Travel & Adventure",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=800",
    },
  ];
  
  const Categories: React.FC = () => {
    return (
      <div className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-gray-800">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Categories;