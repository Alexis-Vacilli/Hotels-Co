import React from 'react'

function Menu() {
    return (
        <div className="w-full bg-white shadow-sm p-2 mb-5 flex space-x-6 text-gray-500">
            {["Amazing Pools", "Beachfront", "Tropical", "Design", "Luxe", "Surfing"].map(item => (
                <a key={item}>{item}</a>
            ))}
        </div>
    )
}

export default Menu
