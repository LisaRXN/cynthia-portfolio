export function Contact({ modalRef }) {
  return (
    <dialog id="my_modal_3" ref={modalRef} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="w-full lg:w-full flex flex-col items-center justify-start gap-5 m-auto">
          <h3 className="font-bold text-lg">Contact me here !</h3>
          <div className="flex items-center justify-start gap-3">
            <img src="/img/icon/mail.png" className="w-5" alt="" />
            <div className="group relative">
              <a
                href="mailto:cynthia.alarcon.arroyo@gmail.com"
                target="blank"
                className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
              >
                email me
              </a>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <img
              src="/img/icon/linkedin.png"
              className="w-5"
              alt=""
            />
            <div className="group relative">
              <a
                href="https://www.linkedin.com/in/cynthia-alarc%C3%B3n-918b66b1/"
                target="blank"
                className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
              >
                linkedin
              </a>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <img src="/img/icon/behance.png" className="w-5" alt="" />
            <div className="group relative">
              <a
                href="https://www.behance.net/cynthiaalarcon27"
                target="blank"
                className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
              >
                behance
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
