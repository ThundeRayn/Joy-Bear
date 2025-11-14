interface HeroProps {
  title?: string;
  img?: string;
  description?: string;
}

const DEFAULT_IMG =
  'https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688';
const DEFAULT_TITLE = 'Joybear Toys';
const DEFAULT_DESC =
  'we create personalized toys that inspire joy and creativity.';

const Hero = ({ title, img, description }: HeroProps) => {
  const imageSrc = img || DEFAULT_IMG;
  const badgeTitle = title || DEFAULT_TITLE;
  const badgeDesc = description || DEFAULT_DESC;
  return (
    <div>
      {/* Hero image with gentle overlay to give breathing room */}
      <div className="w-full overflow-hidden mb-8 lg:shadow-lg">
        <div className="relative h-68 md:h-96 bg-gray-200">
          <img
            src={imageSrc}
            alt={badgeTitle}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {/* Left Joyblue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/10 to-transparent" />
          <div className="absolute left-0 top-0 h-full flex items-center w-1/3 px-8 md:px-12 text-white">
            <div className="w-full flex flex-col items-start justify-center">
              <h2 className="text-2xl md:text-3xl font-bold">{badgeTitle}</h2>
              <p className="mt-4 text-sm md:text-base">{badgeDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;