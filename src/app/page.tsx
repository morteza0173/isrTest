import {
  addData,
  addDataWithoutRevalidate,
  getData,
  revalidateData,
} from "./Actions";
import List from "./List";

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="flex justify-center w-full h-screen bg-gray-100">
      <div className="mx-auto m-20">
        <form action={revalidateData}>
          <button className="mr-2 p-2 text-center w-48 bg-amber-200 shadow-sm hover:bg-amber-200/70 focus-visible:ring-1 rounded-md">
            بروزرسانی داده ها
          </button>
        </form>
        <form action={addDataWithoutRevalidate}>
          <div className="p-2 flex flex-col">
            <label>بدون بروزرسانی</label>
            <input type="text" name="title" className="h-8 ring-1 p-2" />
          </div>
        </form>
        <form action={addData}>
          <div className="p-2 flex flex-col">
            <label>با بروزرسانی</label>
            <input type="text" name="title" className="h-8 ring-1 p-2" />
          </div>
        </form>
        <List data={data} />
      </div>
    </div>
  );
}
