const applyRandomFilter = (picturesData, photosLimit = 10) => {
  const sortedData = picturesData.slice().sort(() => Math.random() - 0.5);
  return sortedData.slice(0, photosLimit);
};

export { applyRandomFilter };
