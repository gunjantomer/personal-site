// import {
//   faFacebook,
//   faGithub,
//   faLinkedin,
// } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Link from 'next/link';

// const footerItems = [
//   {
//     name: 'github',
//     icon: faGithub,
//     link: 'https://www.github.com/alchemist009/',
//   },
//   {
//     name: 'linkedin',
//     icon: faLinkedin,
//     link: 'https://www.linkedin.com/in/gunjantomer',
//   },
//   {
//     name: 'facebook',
//     icon: faFacebook,
//     link: 'https://www.facebook.com/gunjantomer',
//   },
// ];

export function Footer() {
  return (
    <footer className='fixed bottom-0 -ml-[8px] mb-10 left-0 right-0'>
      <div className='flex socials text-center justify-center gap-5'>
        {/* {footerItems.map((item) => {
          return (
            <Link
              className="social-item text-2xl"
              href={item.link}
              key={item.name}
            >
              <FontAwesomeIcon icon={item.icon} />
            </Link>
          );
        })} */}
      </div>
    </footer>
  );
}
