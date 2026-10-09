import React, { useState, useEffect } from 'react';

export default function PageSwitcher( {componentsName, onPageChange} ) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextIndex = (currentIndex + 1) % componentsName.length;

    useEffect(() => {
        onPageChange(componentsName[currentIndex]);
    }, [currentIndex]);

    const handleSwitch = () => {
        setCurrentIndex(nextIndex);
      };

    return (
        <div>
            <button onClick={handleSwitch}>切换到{componentsName[nextIndex]}</button>
        </div>
    )
}