/*Challenge 25 Description: Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result. Use any random API that you want Solution Approach: Utilize the .then method to chain promises.*/
function fetchData(url) {
    return fetch(url)
      .then(response => {
        return response.json();
      });
  }
  
  function getData() {
    const apiUrl1 = 'https://jsonplaceholder.typicode.com/todos/1';
    const apiUrl2 = 'https://api.le-systeme-solaire.net/rest/bodies/earth';
  
    // Use Promise.all to fetch data from both APIs concurrently
    return Promise.all([fetchData(apiUrl1), fetchData(apiUrl2)])
      .then(([data1, data2]) => {
        // Combine the results from both APIs
        return {
          data1: data1,
          data2: data2
        };
      });
  }
  getData()
  .then(combinedData => {
    console.log(combinedData);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  