const applyRandomFilter = (photosData, photosLimit = 10) => {
  const sortedData = photosData.slice().sort(() => Math.random() - 0.5);
  return sortedData.slice(0, photosLimit);
};

const applyDiscussedFilter = (photosData) => {
  const compare = (a, b) => b.comments.length - a.comments.length;
  return photosData.toSorted(compare);
};

export { applyRandomFilter, applyDiscussedFilter };
