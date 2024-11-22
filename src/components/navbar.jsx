import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import BlurFade from './ui/blur-fade';

export default function NavBar() {
  return (
    <div className='sticky bottom-10 mx-auto max-w-52'>
      <BlurFade delay={0.5 * 3}>
        <div className='flex flex-row items-center justify-center space-x-4 rounded-full bg-white py-2 shadow-md'>
          <div className='rounded-full p-2 transition ease-in-out hover:scale-125'>
            <Link href='https://github.com/ribak02'>
              <GitHubLogoIcon className='h-8 w-8' />
            </Link>
          </div>
          <Link href='https://www.linkedin.com/in/kabir-berger-656590208/'>
            <div className='rounded-full p-2 transition ease-in-out hover:scale-125'>
              <LinkedInLogoIcon className='h-8 w-8' />
            </div>
          </Link>
          <Link href='mailto:bergerkabir@gmail.com'>
            <div className='rounded-full p-2 transition ease-in-out hover:scale-125'>
              <EnvelopeClosedIcon className='h-8 w-8' />
            </div>
          </Link>
        </div>
      </BlurFade>
    </div>
  );
}
