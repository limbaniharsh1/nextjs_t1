import Link from "next/link";
import React from "react";

const Page = () => {
  const data = [
    {
      id: 1,
      image:
        "https://avatars.mds.yandex.net/i?id=d4c9d8885c84187cda2a80c6888b87841e4dd3dc-4590565-images-thumbs&n=13",
      price: "100",
      category: "tech",
      title: "laptop",
    },
    {
      id: 2,
      image:
        "https://avatars.mds.yandex.net/i?id=6c1c29d848d848c98d828192f89762854786f2ce-7564382-images-thumbs&n=13",
      price: "100",
      category: "tech",
      title: "laptop",
    },
    {
      id: 3,
      image:
        "https://avatars.mds.yandex.net/i?id=c85f1cd85992f68c8f26771255a3d60a9baae508-7552730-images-thumbs&n=13",
      price: "100",
      category: "tech",
      title: "laptop",
    },
    {
      id: 4,
      image:
        "https://wallpapers.com/images/hd/e-commerce-1900-x-1118-wallpaper-r2k1ldol65vss423.jpg",
      price: "100",
      category: "tech",
      title: "laptop",
    },
    {
      id: 5,
      image:
        "https://avatars.mds.yandex.net/i?id=513892364fc5f6cf7a8a24a1709983657ba6c2b3-4825382-images-thumbs&n=13",
      price: "100",
      category: "tech",
      title: "laptop",
    },
  ];
  return (
    <div className="container">
      <div className="mt-10">
        <div className="grid grid-cols-4 gap-5 rounded-xl">
          {data.map((item, index) => {
            return (
              <Link
                href={{ pathname: `/features/${item.id}`, query: {id:item.id,image:item.image,title:item.title} }}
                className="bg-white rounded-lg shadow-lg p-5 hover:scale-[1.05] duration-500"
              >
                <div className="h-[200px]">
                  <img
                    src={item.image}
                    className="h-full shadow-lg w-full rounded-lg"
                    alt=""
                  />
                </div>
                <div className="">
                  <h3 className="text-xl capitalize font-semibold flex justify-between my-5">
                    {item.title}
                    <span className="text-sm text-gray-600">
                      ₨ {item.price}
                    </span>
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    quidem velit nisi sit cupiditate neque facilis nostrum
                    ducimus blanditiis nesciunt.
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
