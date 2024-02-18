const calculatePagination = (
  totalItems: number,
  itemsPerPage: number
): number => Math.ceil(totalItems / itemsPerPage);

export default calculatePagination;
