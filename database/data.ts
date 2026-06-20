

export const getData = async (lng: string = 'es') => {
  try {
    const data = await import(`@/data/${lng}.json`);
    const result = await Promise.resolve(data.default || data);
    return result;
  } catch (error) {
    if (lng !== 'en') {
      const enData = await import('@/data/en.json');
      return enData.default || enData;
    }
    throw error;
  }
};
