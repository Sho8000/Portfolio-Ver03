import Stardust from "./Stardust";
import Style from "./Landing.module.css"

export default function LandingPage() {

  return (
    <section className={`w-[100vw] h-[100vh] overflow-x-hidden ${Style.landingSection}`}>
      <Stardust/>
      <div>
        <h1>Sho Yoshimura</h1>
      </div>
      <div>
        <div>
          <p>Turn on your sound to enjoy!</p>
          <div>
            <div>
              {/* img */}
              <p>Sound ON</p>
            </div>
            <div>
              {/* img */}
              <p>Sound OFF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
