export const getRandomColor = () => {
    const colors = ["#1fbb00", "#ff7700", "#1e00ff"]; // Green, Orange, Blue
    return Math.random() < 0.4 ? colors[Math.floor(Math.random() * colors.length)] : '#000000'; // 10% chance for colored cubes, otherwise black
};