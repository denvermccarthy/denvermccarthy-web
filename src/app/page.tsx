import { SUMMARY_TEXT } from "../lib/constants.js";

const Summary: React.FC = () => {};

interface NavItemProps {
  title: string;
  link: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, link }) => {
  return (
    <li className="text-2xl xl:text-4xl xl:my-5 2xl:text-6xl 2xl:my-10">
      <a href={link}>{title}</a>
    </li>
  );
};

/* 
TODO: HOME PAGE
- Fill out summary text
- Nav to next section on scroll (this may be a global thing to add to the layout)
- Break out the nav into a component
*/
export default function Home() {
  return (
    <main className="flex min-h-screen bg-bgColor flex-col">
      <div className="mt-10 ml-5 2xl:mt-40 xl:ml-20 ">
        <h1 className="font-bold text-6xl 2xl:text-8xl ">Denver McCarthy</h1>{" "}
        <h2 className="font-light text-xl 2xl:text-4xl mb-5">
          Software Engineer
        </h2>
        {/* 
        TODO: SUMMARY
        - On mobile, set max char before truncating to elipsis with a read more button
        */}
        <p className="font-light text-xl 2xl:text-4xl max-w-lg">
          {SUMMARY_TEXT}
        </p>
      </div>
      {/* 
      TODO: NAV 
      - Add a hover effect to the nav items
        (?)-an animated bottom border that grows from the center
        (?)- a background color that quickly fades in (thinking red or orange)
      - Raise the nav items so that the summary text doesn't push them down
      */}
      {/* NAV CONTAINER */}
      <div className="flex w-full mb-60">
        <div className="w-1/2 "></div>
        <nav className="w-1/2  2xl:mb-60 px-60 flex justify-center">
          <ul className="p-5 pr-10 border-b-2 border-r-2 border-black-500">
            <NavItem title="Contact" link="/#contact" />
            <NavItem title="Projects" link="/#projects" />
            <NavItem title="Blog" link="/#blog" />
          </ul>
        </nav>
      </div>
      {/* 
      ARROW NAV -
      - Add a button to scroll to the next section (thinking two down arrows)

      */}
    </main>
  );
}
