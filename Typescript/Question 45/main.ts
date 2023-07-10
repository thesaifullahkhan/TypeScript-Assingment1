function store_car_info(manufacturer: string, model: string, ...kwargs: any[]): object {
    const carInfo = {
      manufacturer: manufacturer,
      model: model,
      ...kwargs
    };
  
    return carInfo;
  }
  
  const car = store_car_info("Toyota", "Corolla", { color: "red", year: 2022, fuelType: "petrol" });
  
  console.log(car);
  
