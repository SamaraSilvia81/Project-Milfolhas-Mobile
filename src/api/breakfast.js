import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": "BD7SENBisRQTIqReTd0lhoB3GcfBAliycyNkkI7p",
    "X-Parse-REST-API-Key": "zOuIRMQpF31cVbv8DkuGl7FT3IBalhhvpp5ahuvs",
  },
});

export const getBreakfast = () =>
  instance
    .get("/Breakfast", {
      params: {
        keys: [
          "objectID",
          "foodname", 
          "image", 
          "price", 
        ]
      },
    })
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data.results;
});

export const createBreakfast = ({foodname,image,price}) => {
  return instance.post("/Breakfast", {
    foodname,
    image,
    price
  });
};