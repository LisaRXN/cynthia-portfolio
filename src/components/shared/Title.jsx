import { Link } from "react-router-dom";

export function Title({ title, btn }) {
  return (
    <div className="z-50 flex items-center justify-between mb-14">
      <div className="flex items-center font-rock tracking-tight text-3xl md:text-5xl font-semibold uppercase">
        <h2 className="">{title}</h2>
        <span className="text-mygreen ml-6 md:ml-10">.</span>
      </div>
      {btn ? (
        <Link
          to="/work"
          className="w-[160px] md:w-[200px] py-2 md:py-3 rounded-full border border-gray-50 text-gray-50 hover:border-mygreen hover:bg-zinc-950 transition duration-300 flex items-center justify-center gap-2 "
        >
          { btn }
          <img
            src="/img/icon/arrow-up-right.png"
            className="h-auto w-5"
            alt=""
          />
        </Link>
      ) : null}
    </div>
  );
}
