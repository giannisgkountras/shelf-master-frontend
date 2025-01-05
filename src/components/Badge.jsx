const Badge = ({ color = 'gray', text }) => {
    const ringColors = {
        green: 'ring-green-300 bg-green-100',
        red: 'ring-red-300 bg-red-600/20',
        yellow: 'ring-yellow-400 bg-yellow-200',
        softYellow: 'ring yellow-300 bg-yellow-100', 
        blue: 'ring-blue-700/10 bg-blue-700/20',
        pink: 'ring-pink-400 bg-pink-100',
        gray: 'ring-gray-500/10', // default case
    };

    // Get the appropriate ring color class or fall back to default
    const ringClass = ringColors[color] || ringColors.gray;

    return (
        <div
            className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ${ringClass}`}
        >
            {text}
        </div>
    );
};

export default Badge;
