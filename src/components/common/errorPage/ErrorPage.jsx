import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-start items-center r w-full max-h-screen my-10 ">
      <img src="./warning.webp" alt="" />
      <p className="text-orange-400 py-10 text-4xl font-bold">
        مشکلی پیش آمده است بعدا امتحان نمایید
      </p>
      <Link
        to={"/"}
        className="bg-blue-500 w-[200px] rounded text-gray-100 flex justify-center items-center py-4 my-10"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
}

export default ErrorPage