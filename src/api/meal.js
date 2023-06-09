import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": "BD7SENBisRQTIqReTd0lhoB3GcfBAliycyNkkI7p",
    "X-Parse-REST-API-Key": "zOuIRMQpF31cVbv8DkuGl7FT3IBalhhvpp5ahuvs",
  },
});

export const getMeal = () =>
  instance
    .get("/Meals", {
      params: {
        keys: [
          "objectID",
          "mealname", 
          "image", 
        ]
      },
    })
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data.results;
});

export const createMeal = ({mealname,image}) => {
  return instance.post("/Meals", {
    mealname,
    image,
  });
};