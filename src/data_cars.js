let dataCars = [
    {
      name: "Lamborghini Huracan",
      number: 2022,
      amount: "1 NFT (Any Side)",
      img: 'https://media.ed.edmunds-media.com/lamborghini/huracan-sto/2022/oem/2022_lamborghini_huracan-sto_coupe_base_fq_oem_1_1600.jpg',
      due: "12/31/20xx",
    },
    {
      name: "Lamborghini Aventador",
      number: 2021,
      amount: "1 NFT (Any Side)",
      img: 'https://i.ytimg.com/vi/t8H2iQAirOs/maxresdefault.jpg',
      due: "12/31/20xx",
    },
    {
      name: "Lamborghini Diablo",
      number: 2020,
      amount: "1 NFT (Any Side)",
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/4d8752535a-1280-1588349882.jpg?crop=1.00xw:0.671xh;0,0.252xh&resize=1200:*',
      due: "12/31/20xx",
    },
    {
      name: "Lamborghini Gallardo",
      number: 2019,
      amount: "1 NFT (Any Side)",
      img: 'https://i.ytimg.com/vi/WOUOzu14mn0/maxresdefault.jpg',
      due: "12/31/20xx",
    },
    {
      name: "Lamborghini Urus",
      number: 2018,
      amount: "1 NFT (Any Side)",
      img: 'https://i.ytimg.com/vi/KeIdaYyntdA/maxresdefault.jpg',
      due: "12/31/20xx",
    },
  ];

export function getCars() {
  return dataCars;
}

export function getCar(number) {
  return dataCars.find(
    (car) => car.number === number
  );
}

export function deleteCar(number) {
  dataCars = dataCars.filter(
    (car) => car.number !== number
  );
}