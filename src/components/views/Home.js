import React from 'react';
import '../../App.css';
import Logo2 from '../../public/full-scc-logo.png';
// import discord from '../../public/discord.png';


function Home() {
  return (
    <div className = "container">
      <div className = "content-wrapper">
        <div className = "col-3">
            <h1 className = "heading">Events</h1>
            <div className = "event-card">
                <div className = "event-card-title">
                    <h1>ACC Meeting</h1>
                </div>
                <div className = "line-1">
                </div>
                <div className = "event-card-text">2
                    <p>Monday at 3: 00p.m.
                        USACO Practice Problem Stuff
                        Doing something with coding</p>
                </div>
            </div>

            <div className = "event-card">
                <div className = "event-card-title">
                    <h1>CSI Meeting</h1>
                </div>
                <div className = "line-2">
                </div>
                <div className = "event-card-text">
                    <p>Wednesday at 3: 00p.m.
                        CSS Tournament 1
                        Submit Project today</p>
                </div>
            </div>
            <div className = "event-card">
                <div className = "event-card-title">
                    <h1>ACC Meeting</h1>
                </div>
                <div className = "line-3">
                </div>
                <div className = "event-card-text">
                    <p>Friday at 3: 00p.m.
                        whatever is going on in MAGD
                        More details can be included</p>
                </div>
            </div>
            
            {/* <h1 className = "heading">Discord</h1> */}
            {/* <div className = "discord"> */}
                {/* <div className = "img">
                    <img src = "https://lh6.googleusercontent.com/vhmObPnjxW6REfvmHZY3UrgUvi2glgNgoWrLpfsfzUKl_cpRJSxIJ6HxSpEEefLRvbyb8JGpHTmtUThrz7n8W9kDyORUfOuqKPkvwpWgMWVCN2Uiy8TM=w1280" alt = "discord">                
                </div> */}
                {/* <div className = "event-card-text discord-text"> */}
                    {/* <p>Join our discord server to be notified for future meetings.</p> */}
                      {/* </div> */}
            {/* </div> */}
            <iframe className = "discord-e" src="https://discord.com/widget?id=460445774304772107&theme=dark" width="90%" height="300" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
              
            </div>

        <div className = "col-wrapper">
            <div>
            <h1 className = "heading">Clubs</h1>
        </div>
            <div className = "col-9-wrapper">
            <div className = "col-9">
                <div className = "club-card">
                    <div className = "logo">
                        <svg width="91" height="89" viewBox="0 0 91 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45 0L0 89H21L45.5 42.5L69 89H90.5L45 0Z" fill="#4A63F6"/>
                            <path d="M63 56.5L27 84.5H60.5L72.5 75L63 56.5Z" fill="black"/>
                            <path d="M80.5 69L71 51L89 36L88.5 63.5L80.5 69Z" fill="black"/>
                            </svg>                    
                    </div>
                    <div className = "club-header">
                        <h1>Absolute Coding Club</h1>
                    </div>
                    <div className = "club-card-text">
                        <p>Learn about college level computing and algorithims.</p>
                    </div>
                    <div className = "club-card-button">
                        <button className = "acc-color" onclick= "window.location.href='acc.html'">
                        </button>
                    </div>
                </div>

                <div className = "club-card">
                    <div className = "logo">
                        <svg width="91" height="89" viewBox="0 0 91 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45 0L0 89H21L45.5 42.5L69 89H90.5L45 0Z" fill="#4A63F6"/>
                            <path d="M63 56.5L27 84.5H60.5L72.5 75L63 56.5Z" fill="black"/>
                            <path d="M80.5 69L71 51L89 36L88.5 63.5L80.5 69Z" fill="black"/>
                            </svg>                    
                    </div>
                    <div className = "club-header">
                        <h1>Computer Science Innovators</h1>
                    </div>
                    <div className = "club-card-text">
                        <p>Learn how to build your own website from scratch.</p>
                    </div>
                    <div className = "club-card-button">
                        <button className = "csi-color" onclick= "window.location.href='acc.html'">
                        </button>
                    </div>
                </div>

                <div className = "club-card">
                    <div className = "logo">
                        <svg width="91" height="89" viewBox="0 0 91 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45 0L0 89H21L45.5 42.5L69 89H90.5L45 0Z" fill="#4A63F6"/>
                            <path d="M63 56.5L27 84.5H60.5L72.5 75L63 56.5Z" fill="black"/>
                            <path d="M80.5 69L71 51L89 36L88.5 63.5L80.5 69Z" fill="black"/>
                            </svg>                    
                    </div>
                    <div className = "club-header">
                        <h1>Mobile App  Game Dev.</h1>
                    </div>
                    <div className = "club-card-text">
                        <p>Learn how to build your own apps and games to publish.</p>
                    </div>
                    <div className = "club-card-button">
                        <button className = "magd-color" onclick= "window.location.href='acc.html'">
                        </button>
                    </div>
                </div>
            </div>
            <div className = "leaderboard-wrapper">
                <div className = "heading-section">
                    <h1 className = "heading">Leaderboard</h1>
                    <h1 className = "heading heading-2">See Full Leaderboard</h1>
                </div>
                <div className = "leaderboard">
                    <div className = "place place-2nd">
                        <div className = "place-text-outer">
                            <p>2nd Place</p>
                        </div>
                        <div className = "place-text-inner">
                            <p>1000 points</p>
                        </div>
                    </div>
                    <div className = "place place-1st">
                        <div className = "place-text-outer">
                            <p>1st Place</p>
                            
                        </div>
                        <div className = "place-text-inner">
                            <p>1500 points</p>
                        </div>
                    </div>
                    <div className = "place place-3rd">
                        <div className = "place-text-outer">
                            <p>3rd Place</p>
                        </div>
                        <div className = "place-text-inner">
                            <p>500 points</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        </div>
        </div>
        
        <div className = "quote-section">
            <img class = "logo2" src={Logo2} alt = "logo"></img>
            <h1>"The only work worth doing is coding" - Nelson Mandela</h1>
            </div>
        </div>
  );
}

export default Home;

