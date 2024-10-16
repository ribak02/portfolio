import SolariBoard from './SolariBoard';

const Hero = () => {
  return (
    <div className='flex flex-col space-y-2 md:space-y-4'>
      <SolariBoard
        words={['KABIR']}
        textColor='text-white'
        bgColor='bg-black'
      />
      <SolariBoard
        words={['BERGER']}
        textColor='text-white'
        bgColor='bg-black'
      />
      <SolariBoard
        words={['SOFTWARE']}
        textColor='text-black'
        bgColor='bg-gray-200'
      />

      <SolariBoard
        words={['DEVELOPER']}
        textColor='text-black'
        bgColor='bg-gray-200'
      />
    </div>
  );
};

export default Hero;
