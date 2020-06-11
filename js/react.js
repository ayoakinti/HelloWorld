const movies = {
    1: {
      id: 1,
      name: "Planet Earth 1"
    },
    2: {
      id: 2,
      name: "Selma"
    },
    3: {
      id: 3,
      name: "Million Dollar Baby"
    },
    4: {
      id: 4,
      name: "Forrest Gump"
    },
    5: {
      id: 5,
      name: "Get Out"
    }
  };

  Object.keys(movies).map(key => {
    console.log(key);
  })

  console.log(typeof(movies[1]))