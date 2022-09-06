import React from 'react'
import { Link } from "react-router-dom"
import harley from "../harley.jpg"

export default function LanguageSelector() {
    return (
        <div >
            <img className="languageWallpaper" src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joker-comics-1570545185.jpg`} />
            <div className="welcomePositioning">
                <h1>WELCOME TO MY PERSONAL PORTFOLIO!!</h1>
                <h1>SELECT YOUR LANGUAGE</h1>
            </div>
            <div className="languageBtnPositioning">
                <Link to="/English">
                    <button className="languageBtnEnglish">
                        English
                    </button>
                </Link>
                <br />
                <Link to="/Spanish">
                    <button className="languageBtnSpanish">
                        Español
                    </button>
                </Link>
                <br />
                <Link to="/Portuguese">
                    <button className="languageBtnPortuguese">
                        Português
                    </button>
                </Link>
            </div>
        </div>
    )
}
