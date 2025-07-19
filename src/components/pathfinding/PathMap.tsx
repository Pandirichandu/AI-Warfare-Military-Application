import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PathMapProps {
  gridSize?: number;
  pathFound?: boolean;
}

const PathMap: React.FC<PathMapProps> = ({ gridSize = 10, pathFound = true }) => {
  const [grid, setGrid] = useState<Array<Array<number>>>(Array(gridSize).fill(0).map(() => Array(gridSize).fill(0)));
  const [path, setPath] = useState<Array<[number, number]>>([]);
  const [obstacles, setObstacles] = useState<Array<[number, number]>>([]);
  const [start, setStart] = useState<[number, number]>([0, 0]);
  const [end, setEnd] = useState<[number, number]>([gridSize - 1, gridSize - 1]);
  
  // Generate random obstacles
  useEffect(() => {
    const newObstacles: Array<[number, number]> = [];
    const numObstacles = Math.floor(gridSize * gridSize * 0.2); // 20% of cells are obstacles
    
    for (let i = 0; i < numObstacles; i++) {
      const x = Math.floor(Math.random() * gridSize);
      const y = Math.floor(Math.random() * gridSize);
      
      // Don't place obstacles at start or end
      if ((x !== start[0] || y !== start[1]) && (x !== end[0] || y !== end[1])) {
        newObstacles.push([x, y]);
      }
    }
    
    setObstacles(newObstacles);
    
    // Generate a sample path if pathFound is true
    if (pathFound) {
      const newPath: Array<[number, number]> = [];
      let current = [...start];
      
      // Simple algorithm to create a zigzag path avoiding obstacles
      while (current[0] !== end[0] || current[1] !== end[1]) {
        newPath.push([...current] as [number, number]);
        
        // Move towards end, avoiding obstacles
        if (current[0] < end[0] && !hasObstacle(current[0] + 1, current[1], newObstacles)) {
          current[0]++;
        } else if (current[1] < end[1] && !hasObstacle(current[0], current[1] + 1, newObstacles)) {
          current[1]++;
        } else if (current[0] > 0 && !hasObstacle(current[0] - 1, current[1], newObstacles)) {
          current[0]--;
        } else if (current[1] > 0 && !hasObstacle(current[0], current[1] - 1, newObstacles)) {
          current[1]--;
        } else {
          // No path found, break
          break;
        }
      }
      
      // Add end point
      newPath.push([...end] as [number, number]);
      setPath(newPath);
    }
  }, [gridSize, pathFound]);
  
  const hasObstacle = (x: number, y: number, obstacleList: Array<[number, number]>) => {
    return obstacleList.some(obstacle => obstacle[0] === x && obstacle[1] === y);
  };
  
  return (
    <div className="relative grid-pattern rounded-lg overflow-hidden border border-gray-700">
      <div 
        className="grid gap-0.5 p-1"
        style={{ 
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {grid.map((row, y) => 
          row.map((_, x) => {
            const isStart = start[0] === x && start[1] === y;
            const isEnd = end[0] === x && end[1] === y;
            const isObstacle = obstacles.some(o => o[0] === x && o[1] === y);
            const isPath = path.some(p => p[0] === x && p[1] === y);
            
            return (
              <div 
                key={`${x}-${y}`}
                className={`aspect-square rounded-sm ${
                  isStart ? 'bg-accent-teal' : 
                  isEnd ? 'bg-accent-red' : 
                  isObstacle ? 'bg-gray-700' : 
                  isPath ? 'bg-accent-yellow bg-opacity-40' : 
                  'bg-navy-800 bg-opacity-40'
                }`}
              >
                {isPath && !isStart && !isEnd && (
                  <motion.div 
                    className="w-full h-full bg-accent-yellow rounded-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: path.findIndex(p => p[0] === x && p[1] === y) * 0.1 
                    }}
                  />
                )}
              </div>
            );
          })
        )}
      </div>
      
      {/* Target indicators */}
      <div className="absolute top-2 left-2 text-xs text-white bg-accent-teal px-2 py-1 rounded-md opacity-80">
        Start
      </div>
      <div className="absolute bottom-2 right-2 text-xs text-white bg-accent-red px-2 py-1 rounded-md opacity-80">
        Target
      </div>
    </div>
  );
};

export default PathMap;