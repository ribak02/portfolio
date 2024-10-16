'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const getRandomCharacter = () =>
  alphabet[Math.floor(Math.random() * alphabet.length)];

const getTargetCharacter = (word, index) => {
  // If the index is greater than the word length, return blank (" ")
  return index < word.length ? word[index] : ' ';
};

const SolariBoard = ({
  words,
  textColor = 'text-black',
  bgColor = 'bg-gray-200',
}) => {
  const [grid, setGrid] = useState([]);
  const [flippingCells, setFlippingCells] = useState({}); // Track clicked cells

  const cols = 10;

  // Initialize the grid with random characters
  useEffect(() => {
    const initializeGrid = () => {
      const newGrid = words.map((word) =>
        Array(cols)
          .fill(null)
          .map((_, index) => ({
            currentChar: getRandomCharacter(),
            targetChar: getTargetCharacter(word, index),
          })),
      );
      setGrid(newGrid);
    };
    initializeGrid();
  }, [words, cols]);

  // Start automatic flipping through letters to reach the target
  useEffect(() => {
    const flipInterval = setInterval(() => {
      setGrid((prevGrid) =>
        prevGrid.map((row) =>
          row.map((cell) => {
            let { currentChar, targetChar } = cell;

            if (currentChar !== targetChar) {
              // Move to the next character in the sequence
              let nextCharIndex = alphabet.indexOf(currentChar) + 1;
              if (nextCharIndex >= alphabet.length) nextCharIndex = 0;
              currentChar = alphabet[nextCharIndex];
            }

            return {
              ...cell,
              currentChar,
              targetChar,
            };
          }),
        ),
      );
    }, 100); // Flip speed in milliseconds

    return () => clearInterval(flipInterval);
  }, [grid]);

  // Handle click to trigger flip for the specific cell
  const handleFlip = (rowIndex, colIndex) => {
    if (flippingCells[`${rowIndex}-${colIndex}`]) return; // Prevent multiple clicks during animation

    // Mark the cell as flipping
    setFlippingCells((prev) => ({
      ...prev,
      [`${rowIndex}-${colIndex}`]: true,
    }));

    setTimeout(() => {
      setGrid((prevGrid) =>
        prevGrid.map((row, rIndex) =>
          row.map((cell, cIndex) => {
            if (rIndex === rowIndex && cIndex === colIndex) {
              // Move to the next character in the sequence
              let nextCharIndex = alphabet.indexOf(cell.currentChar) + 1;
              if (nextCharIndex >= alphabet.length) nextCharIndex = 0;
              const currentChar = alphabet[nextCharIndex];
              return {
                ...cell,
                currentChar,
              };
            }
            return cell;
          }),
        ),
      );

      // Reset flip state after animation completes
      setTimeout(() => {
        setFlippingCells((prev) => ({
          ...prev,
          [`${rowIndex}-${colIndex}`]: false,
        }));
      }, 600); // Match the duration of the animation
    }, 300); // Delay before character change for the flipping effect
  };

  // Animation variants for the split-flap flip
  const flipVariants = {
    initial: {
      rotateX: 0,
    },
    flip: {
      rotateX: [0, 90, 180, 270, 360],
      transition: {
        duration: 0.6, // Duration of one flip
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className=''>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className='grid grid-cols-10 gap-2 md:gap-4'>
          {row.map((cell, colIndex) => (
            <motion.div
              key={colIndex + cell.currentChar}
              className={`flex items-center justify-center overflow-hidden rounded-md ${bgColor} aspect-square cursor-pointer`}
              onClick={() => handleFlip(rowIndex, colIndex)}
              variants={flipVariants}
              initial='initial'
              animate={
                flippingCells[`${rowIndex}-${colIndex}`] ? 'flip' : 'initial'
              }
            >
              <h1
                className={`text-center text-[1.5rem] font-bold leading-none md:text-[2.7rem] lg:text-[3.7rem] ${textColor}`}
              >
                {cell.currentChar}
              </h1>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SolariBoard;
