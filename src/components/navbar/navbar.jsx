import React from 'react';
import './navbar.css';
import '../../media/profile_icon.png';

const Navbar = () => {
        let togglestatus = true;
    document.addEventListener("DOMContentLoaded", (event) => {
      console.log("hi");
      const p = document.querySelector(".profile-img");
      p.addEventListener("click", () => {
        if (togglestatus === false) {
          document.querySelector(".drop-down").style.visibility = "hidden";
          document
            .querySelector("#home1")
            .setAttribute(
              "d",
              "M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"
            );

          togglestatus = true;
        } else if (togglestatus === true) {
          document.querySelector(".drop-down").style.visibility = "visible";
          document
            .querySelector("#home1")
            .setAttribute(
              "d",
              "M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"
            );
          togglestatus = false;
        }
      });
    });

    return (
        <>
            {/* <!-- Created Nav  --> */}
            <nav className="nav">
                {/* <!-- Created a container  --> */}
                <div className="wrapper">
                    {/* <!-- Made a logo container  --> */}
                    <div className="logo">
                        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
                    </div>
                    {/* <!-- Logo container ends here --> */}

                    {/* <!-- Created search container  --> */}
                    <div className="search">
                        <input type="text" placeholder="Search" />
                    </div>
                    {/* <!-- search Container ends here  --> */}

                    {/* <!-- Created icons container  --> */}
                    <div className="icons">
                        {/* <!-- Home starts  --> */}
                        <div className="home">
                            <svg aria-label="Home" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img"
                                viewBox="0 0 48 48" width="22">
                                <path id="home1"
                                    d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z">
                                </path>
                            </svg>
                        </div>
                        {/* <!-- Home ends  --> */}

                        {/* <!-- explore starts  --> */}
                        <div className="explore">
                            <svg aria-label="Direct" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img"
                                viewBox="0 0 48 48" width="22">
                                <path
                                    d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
                                </path>
                            </svg>
                        </div>
                        {/* <!-- explore ends  --> */}

                        {/* <!-- create starts  --> */}
                        <div className="create">
                            <svg aria-label="New Post" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img"
                                viewBox="0 0 48 48" width="22">
                                <path
                                    d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z">
                                </path>
                                <path
                                    d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z">
                                </path>
                                <path
                                    d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z">
                                </path>
                            </svg>
                        </div>
                        {/* <!-- create ends  --> */}

                        {/* <!-- compass starts  --> */}
                        <div className="compass">
                            <svg aria-label="Find People" className="_8-yf5 " color="#262626" fill="#262626" height="22" role="img"
                                viewBox="0 0 48 48" width="22">
                                <path clip-rule="evenodd"
                                    d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                                    fill-rule="evenodd"></path>
                            </svg>
                        </div>
                        {/* <!-- compass ends  --> */}

                        {/* <!-- Heart starts   --> */}
                        <div className="heart">
                            <svg aria-label="Activity Feed" className="_8-yf5 " color="#262626" fill="#262626" height="22"
                                role="img" viewBox="0 0 48 48" width="22">
                                <path
                                    d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                                </path>
                            </svg>
                        </div>
                        {/* <!-- Heart ends  --> */}

                        {/* <!-- Profile image starts  --> */}
                        <div className="profile-img">
                            {/* <!--/ Profile icon start  --> */}
                            <div>
                                <span style={{ width: "22px", height: "22px", border: "1px solid #fafafa" }}>
                                    <img src='./media/profile_icon.png' style={{ width: "22px", height: "22px" }} alt='profileicon'/>
                                </span>
                            </div>
                            {/* <!-- Profile icons ends  --> */}

                            {/* <!-- Drop down menu starts  --> */}
                            <div className="drop-down">
                                {/* <!-- pointer for drop down  --> */}
                                <div className="square">
                                </div>
                                {/* <!-- pointer ends  --> */}

                                <ul>
                                    {/* <!-- 1 item start  --> */}
                                    <li>
                                        <svg aria-label="Profile" className="_8-yf5 " color="#262626" fill="#262626" height="16"
                                            role="img" viewBox="0 0 32 32" width="16">
                                            <path
                                                d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z">
                                            </path>
                                        </svg>
                                        <a href="/#">Profile</a>
                                    </li>
                                    {/* <!-- 1 ends  --> */}

                                    {/* <!-- 2 item starts  --> */}
                                    <li>
                                        <svg aria-label="Saved" className="_8-yf5 " color="#262626" fill="#262626" height="16"
                                            role="img" viewBox="0 0 32 32" width="16">
                                            <path
                                                d="M28.7 32c-.4 0-.8-.2-1.1-.4L16 19.9 4.4 31.6c-.4.4-1.1.6-1.6.3-.6-.2-.9-.8-.9-1.4v-29C1.8.7 2.5 0 3.3 0h25.4c.8 0 1.5.7 1.5 1.5v29c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM4.8 3v23.9l9.4-9.4c.9-.9 2.6-.9 3.5 0l9.4 9.4V3H4.8z">
                                            </path>
                                        </svg>
                                        <a href="/#">Saved</a>
                                    </li>
                                    {/* <!-- 2 ends  --> */}

                                    {/* <!-- 3 item starts  --> */}
                                    <li>
                                        <svg aria-label="Settings" className="_8-yf5 " color="#262626" fill="#262626" height="16"
                                            role="img" viewBox="0 0 32 32" width="16">
                                            <path
                                                d="M31.2 13.4l-1.4-.7c-.1 0-.2-.1-.2-.2v-.2c-.3-1.1-.7-2.1-1.3-3.1v-.1l-.2-.1v-.3l.5-1.5c.2-.5 0-1.1-.4-1.5l-1.9-1.9c-.4-.4-1-.5-1.5-.4l-1.5.5H23l-.1-.1h-.1c-1-.5-2-1-3.1-1.3h-.2c-.1 0-.1-.1-.2-.2L18.6.9c-.2-.5-.7-.9-1.2-.9h-2.7c-.5 0-1 .3-1.3.8l-.7 1.4c0 .1-.1.2-.2.2h-.2c-1.1.3-2.1.7-3.1 1.3h-.1l-.1.2h-.3l-1.5-.5c-.5-.2-1.1 0-1.5.4L3.8 5.7c-.4.4-.5 1-.4 1.5l.5 1.5v.5c-.5 1-1 2-1.3 3.1v.2c0 .1-.1.1-.2.2l-1.4.7c-.6.2-1 .7-1 1.2v2.7c0 .5.3 1 .8 1.3l1.4.7c.1 0 .2.1.2.2v.2c.3 1.1.7 2.1 1.3 3.1v.1l.2.1v.3l-.5 1.5c-.2.5 0 1.1.4 1.5l1.9 1.9c.3.3.6.4 1 .4.2 0 .3 0 .5-.1l1.5-.5H9l.1.1h.1c1 .5 2 1 3.1 1.3h.2c.1 0 .1.1.2.2l.7 1.4c.2.5.7.8 1.3.8h2.7c.5 0 1-.3 1.3-.8l.7-1.4c0-.1.1-.2.2-.2h.2c1.1-.3 2.1-.7 3.1-1.3h.1l.1-.1h.3l1.5.5c.1 0 .3.1.5.1.4 0 .7-.1 1-.4l1.9-1.9c.4-.4.5-1 .4-1.5l-.5-1.5V23l.1-.1v-.1c.5-1 1-2 1.3-3.1v-.2c0-.1.1-.1.2-.2l1.4-.7c.5-.2.8-.7.8-1.3v-2.7c0-.5-.4-1-.8-1.2zM16 27.1c-6.1 0-11.1-5-11.1-11.1S9.9 4.9 16 4.9s11.1 5 11.1 11.1-5 11.1-11.1 11.1z">
                                            </path>
                                        </svg>
                                        <a href="/#">Settings</a>
                                    </li>
                                    {/* <!-- 3 ends  --> */}

                                    {/* <!-- 4 item starts  --> */}
                                    <li>
                                        <svg aria-label="Switch Accounts" className="_8-yf5 " color="#262626" fill="#262626"
                                            height="16" role="img" viewBox="0 0 32 32" width="16">
                                            <path
                                                d="M10.3 10.7c0-.8-.7-1.5-1.5-1.5H4.9C7.2 5.4 11.4 3 16 3c3.6 0 7 1.5 9.5 4.1.5.6 1.5.6 2.1.1.6-.6.6-1.5.1-2.1-3-3.2-7.3-5-11.7-5C10.7 0 6 2.5 3 6.7V3.5C3 2.7 2.3 2 1.5 2S0 2.7 0 3.5v7.2c0 .8.7 1.5 1.5 1.5h7.3c.8 0 1.5-.6 1.5-1.5zm20.2 9.1h-7.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.8C24.8 26.6 20.6 29 16 29c-3.6 0-7-1.5-9.5-4.1-.5-.6-1.5-.6-2.1-.1-.6.6-.6 1.5-.1 2.1 3 3.2 7.3 5 11.7 5 5.3 0 10-2.5 13-6.7v3.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7.2c0-.8-.7-1.4-1.5-1.4z">
                                            </path>
                                        </svg>
                                        <a href="/#">Switch Accounts</a>
                                    </li>
                                    {/* <!-- 5 item starts  --> */}
                                    <li><a href="/#">Log Out</a>
                                    </li>
                                    {/* <!-- 5 ends  --> */}
                                </ul>
                            </div>
                            {/* <!-- Drop down menu ends  --> */}

                        </div>
                        {/* <!-- Profile image ends  --> */}

                    </div>
                    {/* <!-- Icons container ends here  --> */}

                </div>
                {/* <!-- Container ends here  --> */}

            </nav>
            {/* <!-- Nav ends here --> */}
        </>
    )
}

export default Navbar