import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Logo.png";
import RecentPost1 from "@/assets/content-img/recent_post1.jpg"
import RecentPost2 from "@/assets/content-img/recent_post2.jpg"

const Footer = () => {
  return (
    <footer className='bg-[url("/footerbg.jpg")] bg-cover bg-center bg-no-repeat text-white'>
      {/* dark overlay */}
      <div className="bg-linear-to-b from-black/60 to-black/90 py-12">
        <div className="mx-auto max-w-6xl px-6">
          {/* TOP GRID: stacks on mobile, 3 cols on lg+ */}
          <div className="grid gap-12 lg:grid-cols-3">
            {/* COLUMN 1 – logo, location, hours (your existing content) */}
            <div className="text-center lg:text-left">
              <div className="mb-10 flex justify-center lg:justify-start">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="Site logo"
                    priority
                    className="w-40 h-auto"
                  />
                </Link>
              </div>

              <section className="mb-9">
                <h2 className="text-[#FF2A70] text-sm tracking-[0.15em] uppercase mb-3">
                  LOCATION
                </h2>
                <div className="text-sm">
                  <p>Kompagnistræde 278</p>
                  <p>1265 København K</p>
                </div>
              </section>

              <section className="mb-2">
                <h2 className="text-[#FF2A70] text-sm tracking-[0.15em] uppercase mb-3">
                  OPENING HOURS
                </h2>
                <div className="text-sm">
                  <p>WED - THU: 10:30 PM TO 3 AM</p>
                  <p>SAT - SUN: 11 PM TO 5 AM</p>
                </div>
              </section>
            </div>

            {/* COLUMN 2 – recent posts (desktop design) */}
            <div className="hidden lg:block">
              <h2 className="text-[#FF2A70] text-sm tracking-[0.15em] uppercase mb-12 text-center lg:text-left">
                RECENT POSTS
              </h2>

              <div className="space-y-16 text-sm">
                {/* Post 1 */}
                <article className="flex items-center gap-4">
                  {/* thumbnail placeholder – put <Image /> here */}
                  <div className="h-full w-30 overflow-hidden bg-white/20">
                   <Image
                    src={RecentPost1}
                    alt="Post 1"
                    priority
                    className="w-full h-auto"
                  />
                  </div>
                  <div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting.
                    </p>
                    <p className="mt-2 text-xs text-[#FF2A70]">April 17, 2018</p>
                  </div>
                </article>

                {/* Post 2 */}
                <article className="flex items-center gap-4">
                  <div className="w-30 h-full overflow-hidden bg-white/20">
                    <Image
                    src={RecentPost2}
                    alt="Post 2"
                    priority
                    className="w-full h-auto"
                  />
                  </div>
                  <div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting.
                    </p>
                    <p className="mt-2 text-xs text-[#FF2A70]">April 17, 2018</p>
                  </div>
                </article>
              </div>
            </div>

            {/* COLUMN 3 – recent tweets (no SVG, just placeholder circles) */}
            <div className="hidden lg:block">
              <h2 className="text-[#FF2A70] text-sm tracking-[0.15em] uppercase mb-12 ">
                RECENT TWEETS
              </h2>

              <div className="space-y-16 text-sm">
                {/* Tweet 1 */}
                <article className="flex gap-4">
                  {/* icon placeholder – you can drop your tweet SVG here */}
                  <div className="mt-1 flex h-6 w-6 items-center justify-center  text-xs">
                   <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
  <path d="M19.8844 4.05069C19.8984 4.22845 19.8984 4.40626 19.8984 4.58402C19.8984 10.0061 15.3282 16.2536 6.97501 16.2536C4.40156 16.2536 2.01095 15.5806 0 14.4124C0.365638 14.4505 0.717166 14.4632 1.09687 14.4632C3.22028 14.4632 5.17499 13.8156 6.73594 12.7108C4.73906 12.6727 3.06561 11.4918 2.48904 9.86644C2.77032 9.90451 3.05155 9.92992 3.34689 9.92992C3.75469 9.92992 4.16253 9.87911 4.54219 9.79026C2.46095 9.40929 0.899963 7.75855 0.899963 5.76494V5.71417C1.50463 6.01893 2.20781 6.20939 2.95307 6.23476C1.72963 5.49826 0.928099 4.24116 0.928099 2.81896C0.928099 2.05708 1.15306 1.35869 1.54683 0.749171C3.78278 3.238 7.14374 4.86334 10.9124 5.04114C10.8422 4.73638 10.7999 4.41896 10.7999 4.1015C10.7999 1.84121 12.825 0 15.3421 0C16.6499 0 17.8312 0.495226 18.6609 1.29521C19.6874 1.11744 20.6718 0.774577 21.5437 0.304757C21.2062 1.25714 20.489 2.05712 19.5468 2.56501C20.4609 2.47617 21.3468 2.24755 22.1624 1.93013C21.5438 2.74278 20.7703 3.46654 19.8844 4.05069Z" fill="#FF2A70"/>
</svg>
                  </div>
                  <div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable...
                    </p>
                    <p className="mt-2 text-xs text-[#FF2A70]">5 hours ago</p>
                  </div>
                </article>

                {/* Tweet 2 */}
                <article className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center  text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
  <path d="M19.8844 4.05069C19.8984 4.22845 19.8984 4.40626 19.8984 4.58402C19.8984 10.0061 15.3282 16.2536 6.97501 16.2536C4.40156 16.2536 2.01095 15.5806 0 14.4124C0.365638 14.4505 0.717166 14.4632 1.09687 14.4632C3.22028 14.4632 5.17499 13.8156 6.73594 12.7108C4.73906 12.6727 3.06561 11.4918 2.48904 9.86644C2.77032 9.90451 3.05155 9.92992 3.34689 9.92992C3.75469 9.92992 4.16253 9.87911 4.54219 9.79026C2.46095 9.40929 0.899963 7.75855 0.899963 5.76494V5.71417C1.50463 6.01893 2.20781 6.20939 2.95307 6.23476C1.72963 5.49826 0.928099 4.24116 0.928099 2.81896C0.928099 2.05708 1.15306 1.35869 1.54683 0.749171C3.78278 3.238 7.14374 4.86334 10.9124 5.04114C10.8422 4.73638 10.7999 4.41896 10.7999 4.1015C10.7999 1.84121 12.825 0 15.3421 0C16.6499 0 17.8312 0.495226 18.6609 1.29521C19.6874 1.11744 20.6718 0.774577 21.5437 0.304757C21.2062 1.25714 20.489 2.05712 19.5468 2.56501C20.4609 2.47617 21.3468 2.24755 22.1624 1.93013C21.5438 2.74278 20.7703 3.46654 19.8844 4.05069Z" fill="#FF2A70"/>
</svg>
                  </div>
                  <div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable...
                    </p>
                    <p className="mt-2 text-xs text-[#FF2A70]">5 hours ago</p>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* SOCIAL + BOTTOM TEXT (full-width row under grid) */}
          <div className="mt-12 flex flex-col items-center gap-8 lg:mt-16">
            {/* Stay connected + 3 squares; SVGs left out on purpose */}
            <section className="text-center">
              <p className="text-sm mb-4">Stay Connected With Us</p>
              <div className="flex justify-center gap-6">
                {/* social square placeholders – put your SVGs inside */}
                <a
                  href="#"
                  className="w-[58px] h-[58px] border-2 border-white flex items-center justify-center text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
  <path d="M10.2792 11.25L10.8496 7.63047H7.28306V5.28164C7.28306 4.29141 7.78127 3.32617 9.3786 3.32617H11V0.244531C11 0.244531 9.52863 0 8.12184 0C5.18471 0 3.26486 1.73359 3.26486 4.87187V7.63047H0V11.25H3.26486V20H7.28306V11.25H10.2792Z" fill="white"/>
</svg>
                </a>
                <a
                  href="#"
                  className="w-[58px] h-[58px] border-2 border-white flex items-center justify-center text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M21.2262 15.6789C21.0096 16.184 20.0943 16.5551 18.4273 16.8139C18.3415 16.9297 18.2704 17.4242 18.1569 17.8093C18.0894 18.0406 17.9233 18.1779 17.653 18.1779L17.6406 18.1776C17.2503 18.1776 16.8427 17.998 16.0263 17.998C14.9243 17.998 14.5445 18.2491 13.6889 18.8535C12.7818 19.4949 11.9117 20.0486 10.613 19.9919C9.29812 20.0889 8.20205 19.2894 7.58519 18.8533C6.7245 18.2448 6.34581 17.9981 5.24833 17.9981C4.46451 17.9981 3.97122 18.1942 3.634 18.1942C3.29856 18.1942 3.16809 17.9897 3.11785 17.8186C3.00554 17.4368 2.93486 16.9351 2.84682 16.8159C1.98759 16.6826 0.050031 16.3446 0.000668645 15.4801C-0.00531466 15.3714 0.0290215 15.2644 0.0970913 15.1795C0.165161 15.0947 0.262171 15.0379 0.369515 15.0202C3.26074 14.5442 4.56299 11.5756 4.61713 11.4495C4.6202 11.4422 4.62357 11.4352 4.62698 11.4281C4.78125 11.115 4.81578 10.8527 4.72932 10.6489C4.51948 10.1546 3.61276 9.9773 3.23129 9.82639C2.24591 9.43723 2.10879 8.99006 2.16709 8.68358C2.26835 8.15023 3.06978 7.82202 3.53835 8.04149C3.90894 8.21522 4.23819 8.30314 4.51674 8.30314C4.72541 8.30314 4.85796 8.25311 4.93059 8.21293C4.8457 6.71976 4.63554 4.58596 5.16689 3.39433C6.57018 0.248183 9.54451 0.00369801 10.4221 0.00369801C10.4613 0.00369801 10.8019 0 10.8422 0C13.009 0 15.0909 1.11273 16.1076 3.39233C16.6385 4.58276 16.4296 6.70775 16.3443 8.2126C16.41 8.24883 16.5253 8.29329 16.7016 8.30148C16.9674 8.28959 17.2756 8.20221 17.6185 8.04149C17.8714 7.92324 18.2171 7.93924 18.4695 8.0439L18.4707 8.04432C18.8644 8.18497 19.1122 8.46876 19.1184 8.78683C19.1261 9.19183 18.7643 9.5416 18.0432 9.82635C17.9552 9.86104 17.8482 9.89512 17.7343 9.93127C17.3272 10.0603 16.7122 10.2556 16.5453 10.6489C16.4589 10.8527 16.4931 11.1147 16.6475 11.4279C16.6511 11.4349 16.6544 11.4421 16.6574 11.4493C16.7115 11.5752 18.0126 14.5432 20.9052 15.0199C21.1722 15.0639 21.369 15.3472 21.2262 15.6789Z" fill="white"/>
</svg>
                </a>
                <a
                  href="#"
                  className="w-[58px] h-[58px] border-2 border-white flex items-center justify-center text-lg"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.0054 5.8467C8.59935 5.8467 5.85206 8.594 5.85206 12C5.85206 15.406 8.59935 18.1533 12.0054 18.1533C15.4114 18.1533 18.1587 15.406 18.1587 12C18.1587 8.594 15.4114 5.8467 12.0054 5.8467ZM12.0054 16.0004C9.80431 16.0004 8.00491 14.2064 8.00491 12C8.00491 9.7936 9.79895 7.99955 12.0054 7.99955C14.2118 7.99955 16.0058 9.7936 16.0058 12C16.0058 14.2064 14.2064 16.0004 12.0054 16.0004ZM19.8456 5.595C19.8456 6.39295 19.2029 7.03024 18.4104 7.03024C17.6124 7.03024 16.9751 6.38759 16.9751 5.595C16.9751 4.80241 17.6178 4.15977 18.4104 4.15977C19.2029 4.15977 19.8456 4.80241 19.8456 5.595ZM23.921 7.05166C23.83 5.12909 23.3908 3.42608 21.9824 2.02298C20.5793 0.619882 18.8763 0.180743 16.9537 0.0843468C14.9722 -0.0281156 9.03314 -0.0281156 7.05166 0.0843468C5.13444 0.175388 3.43144 0.614526 2.02298 2.01763C0.614527 3.42073 0.180743 5.12373 0.0843468 7.0463C-0.0281156 9.02778 -0.0281156 14.9669 0.0843468 16.9483C0.175388 18.8709 0.614527 20.5739 2.02298 21.977C3.43144 23.3801 5.12909 23.8193 7.05166 23.9157C9.03314 24.0281 14.9722 24.0281 16.9537 23.9157C18.8763 23.8246 20.5793 23.3855 21.9824 21.977C23.3855 20.5739 23.8246 18.8709 23.921 16.9483C24.0335 14.9669 24.0335 9.03314 23.921 7.05166ZM21.3612 19.0744C20.9434 20.1241 20.1348 20.9327 19.0798 21.3558C17.4999 21.9824 13.7512 21.8378 12.0054 21.8378C10.2595 21.8378 6.50541 21.977 4.93094 21.3558C3.88129 20.9381 3.07263 20.1294 2.64956 19.0744C2.02298 17.4946 2.16758 13.7458 2.16758 12C2.16758 10.2542 2.02834 6.50006 2.64956 4.92558C3.06728 3.87593 3.87593 3.06728 4.93094 2.6442C6.51077 2.01763 10.2595 2.16222 12.0054 2.16222C13.7512 2.16222 17.5053 2.02298 19.0798 2.6442C20.1294 3.06192 20.9381 3.87058 21.3612 4.92558C21.9877 6.50541 21.8431 10.2542 21.8431 12C21.8431 13.7458 21.9877 17.4999 21.3612 19.0744Z" fill="white"/>
</svg>
                </a>
              </div>
            </section>

            {/* Bottom left/right text like in desktop design */}
            <section className="w-full text-xs flex flex-col items-center text-center gap-4 lg:flex-row lg:justify-between">
              <p>Night Club PSD Template - All Rights Reserved</p>
              <p>Copyright © NightClub</p>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
