export function Footer() {
  return (
    <div className="px-10">
      <hr className="bg-zinc-200 w-full h-[1px] border-none"></hr>
      <div className="flex items-center justify-between py-10">
        <div className="logo">
          <a href="/" className=" text-xl font-grotesk font-semibold">
            ca<span className="text-myviolet2 text-3xl">.</span>
          </a>
        </div>
        <div className="flex items-center justify-end gap-5">
          <img
            src="src/assets/img/icon/insta-white.png"
            className="w-6"
            alt=""
          />
          <img src="src/assets/img/icon/linkedin.png" className="w-6" alt="" />
          <img src="src/assets/img/icon/behance.png" className="w-6" alt="" />
        </div>
      </div>
    </div>
  );
}
