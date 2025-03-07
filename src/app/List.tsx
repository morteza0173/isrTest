"use client";
import { data, deleteData } from "./Actions";

const List = ({ data }: { data: data[] }) => {
  return (
    <div className="h-[400px] overflow-y-auto">
      {data.map((item) => (
        <div
          className="flex justify-between items-center p-2 m-2 w-48 bg-gray-200"
          key={item.id}
        >
          <h1>{item.title}</h1>
          <button
            onClick={() => {
              deleteData(item.id);
            }}
            className="p-1 hover:opacity-70"
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  );
};
export default List;
