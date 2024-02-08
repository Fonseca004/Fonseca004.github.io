export type Photo = {
    title: string;
    date: string;
    img: string;
  };
  
  const portfolio: Photo[] = [
    {
      title: "Bird",
      date: "Poland - February 2024",
      img: "opengraph-image.jpg",
    },
    {
        title: "Bird",
        date: "Portugal, Setúbal - December 2023",
        img: "/opengraph-image.jpg",
    },
    {
      title: "Bird",
      date: "Portugal, Setúbal - December 2023",
      img: "opengraph-image.jpg",
    },
    {
      title: "Bird",
      date: "Portugal, Setúbal - December 2023",
      img: "/opengraph-image.jpg",
    },
    {
      title: "Bird",
      date: "Portugal, Setúbal - December 2023",
      img: "@/public/opengraph-image.jpg",
    },
    {
      title: "Bird",
      date: "Portugal, Setúbal - December 2023",
      img: "public/opengraph-image.jpg",
    }
  
  ];
  
  export default portfolio;