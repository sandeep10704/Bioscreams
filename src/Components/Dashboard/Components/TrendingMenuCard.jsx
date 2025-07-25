import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

// CSS for the animation. This defines a keyframe animation that fades
// and slides an element in from the left.
const animationStyles = `
  @keyframes slideInFade {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* This class applies the animation to each menu item. */
  .menu-item-animate {
    opacity: 0; /* Start hidden before animation begins */
    animation: slideInFade 0.5s ease-out forwards;
  }
`;


// Helper function to get the color for the rank
const getRankColor = (rank) => {
  switch (rank) {
    case 1:
      return 'text-amber-500'; // Gold
    case 2:
      return 'text-slate-400'; // Silver
    case 3:
      return 'text-amber-700'; // Bronze
    default:
      return 'text-gray-300';
  }
};

/**
 * A single item in the trending menu list.
 * It now accepts an 'index' prop to calculate its animation delay.
 * @param {{
 * item: { id: number, name: string, price: string, orders: string, imageUrl: string, rank: number },
 * index: number
 * }} props
 */
const MenuItem = ({ item, index }) => (
  <div
    className="menu-item-animate flex items-center justify-between py-4" // Apply the animation class
    style={{ animationDelay: `${index * 100}ms` }} // Apply a staggered delay
  >
    {/* Left side: Image and Details */}
    <div className="flex items-center">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="ml-2">
        <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
        <p className="text-gray-500">{item.price}</p>
        <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center mt-1">
          View Details
          <FiExternalLink className="ml-1" />
        </a>
      </div>
    </div>

    {/* Right side: Rank and Orders */}
    <div className="text-right">
      <p className={`text-xl font-bold ${getRankColor(item.rank)}`}>#{item.rank}</p>
      <p className="text-sm text-gray-500 mt-1">Orders: {item.orders}</p>
    </div>
  </div>
);


/**
 * A card component to display the daily trending menu.
 * @param {{
 * title: string,
 * linkText: string,
 * items: { id: number, name:string, price: string, orders: string, imageUrl: string, rank: number }[]
 * }} props
 */
const TrendingMenuCard = ({ title, linkText, items }) => {
  return (
    // A React Fragment is used to wrap the component and the style tag
    <>
      <style>{animationStyles}</style>
      <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-md mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-semibold text-gray-800 uppercase">{title}</h2>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center">
            {linkText}
            <BsArrowRight className="ml-1" />
          </a>
        </div>

        <hr className="my-4 border-t border-gray-200" />

        {/* Menu List */}
        <div className="divide-y divide-gray-200">
          {/* We now pass the 'index' to each MenuItem for the animation delay */}
          {items.map((item, index) => (
            <MenuItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingMenuCard;
