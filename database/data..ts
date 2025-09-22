

export const getData = async (lng: string = 'es') => {
  try {
    console.info(`Loading data for language: ${lng}`);
    const data = await import(`@/data/${lng}.json`);
    const result = await Promise.resolve(data.default || data);
    console.info('Successfully loaded data for language:', lng);
    return result;
  } catch (error) {
    console.error(`Error loading data for language: ${lng}`, error);
    if (lng !== 'en') {
      console.info('Falling back to English...');
      const enData = await import('@/data/en.json');
      return enData.default || enData;
    }
    throw error;
  }
};
