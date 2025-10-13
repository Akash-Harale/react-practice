const data = true;

const saveData = new Promise((resolve, reject) => {
  if (data) {
    resolve("Data added successfully");
  }
  reject("Something went wrong");
});

saveData
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });


