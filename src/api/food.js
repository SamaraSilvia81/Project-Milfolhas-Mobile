import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": "BD7SENBisRQTIqReTd0lhoB3GcfBAliycyNkkI7p",
    "X-Parse-REST-API-Key": "zOuIRMQpF31cVbv8DkuGl7FT3IBalhhvpp5ahuvs",
  },
});

export const getFood = () =>
  instance
    .get("/Foods", {
      params: {
        keys: [
          "objectID",
          "foodname", 
          "image", 
          "about", 
          "price", 
        ]
      },
    })
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data.results;
});

export const createFood = ({foodname,image,about,price}) => {
  return instance.post("/Foods", {
    foodname,
    image,
    about,
    price
  });
};