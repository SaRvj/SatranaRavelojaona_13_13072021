const getLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
 
    if (!storedValue) {
        return defaultValue;
    }
    return JSON.parse(storedValue);
};
  
export default getLocalStorage;