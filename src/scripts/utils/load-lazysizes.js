const loadLazySizes =  () => {
  try {
    import('lazysizes');
    import('lazysizes/plugins/parent-fit/ls.parent-fit');
    console.log('lazysizes library loaded');
  } catch (error) {
    console.error('Failed to load lazysizes', error);
  }
};

export default loadLazySizes;