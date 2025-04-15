export function Footer() {
  return (
    <div className="px-10 md:max-w-screen-2xl m-auto">
      <hr className="bg-zinc-200 w-full h-[1px] border-none"></hr>
      <div className="flex items-center justify-between py-10">
        <div className="logo">
          <a href="/" className=" text-xl font-grotesk font-semibold">
            ca<span className="text-mygreen text-3xl">.</span>
          </a>
        </div>
        <div className="flex items-center justify-end gap-5">
          <a href="https://www.instagram.com/cynthiaalarcon1/" target="blank">
            <img src="/img/icon/insta-white.png" className="w-6" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/cynthia-alarc%C3%B3n-918b66b1/"
            target="blank"
          >
            <img src="/img/icon/linkedin.png" className="w-6" alt="" />
          </a>
          <a href="https://www.behance.net/cynthiaalarcon27" target="blank">
            <img src="/img/icon/behance.png" className="w-6" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
