import "./App.css"
import Header from "./components/Header";
import ProfileCart from "./components/ProfileCart";
import Footer from "./components/Footer";

const App = () => {
    const profiles = [
        {
            number: "01",
            name: "Mia Chen",
            role: "Creative Designer",
            hobby: "Making cute things",
            emoji: "🎨",
            color: "#F7D7E5",
        },
        {
            number: "02",
            name: "Leo Park",
            role: "Game Explorer",
            hobby: "Playing video games",
            emoji: "🎮",
            color: "#D8E9FF",
        },
        {
            number: "03",
            name: "Noah Kim",
            role: "Junior Developer",
            hobby: "Building cool websites",
            emoji: "💻",
            color: "#DDF3D5",
        },
        {
            number: "04",
            name: "Ava Lin",
            role: "Music Lover",
            hobby: "Finding new songs",
            emoji: "🎧",
            color: "#FFE7B9",
        },
    ];

    return (
        <main className="container">
            <Header />
            <section className="profile-grid">

                {
                    profiles.map((profile) => {
                        return <ProfileCart 
                        number={profile.number} 
                        name={profile.name} 
                        emoji = {profile.emoji}
                        role={profile.role} 
                        hobby={profile.hobby} 
                        color={profile.color} 
                        />
                    })
                }
            </section>
            <Footer />
        </main>
    )
}

export default App;  