/* cloudinary-imgs*/
// import { AdvancedImage } from '@cloudinary/react';
// import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';


interface HeroProps {
  title?: string;
  img?: string;
  description?: string;
}

const DEFAULT_IMG =
  'https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688';
const DEFAULT_TITLE = 'Joybear Toys';
const DEFAULT_DESC =
  'WE create personalized toys that inspire joy and creativity.';

const Hero = ({ title, img, description }: HeroProps) => {
  {/* cloudinary image setup */}
  {/* const imgDis = cld
    .image('cld-sample-5')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500));*/}
  
  const imageSrc = img || DEFAULT_IMG;
  const badgeTitle = title || DEFAULT_TITLE;
  const badgeDesc = description || DEFAULT_DESC;
  return (
    <div>
      {/* Hero image with gentle overlay to give breathing room */}
      <div className="w-full overflow-hidden">
        <div className="relative h-68 md:h-[75vh] bg-gray-200">
          <img
            src={imageSrc}
            alt={badgeTitle}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectPosition: 'center 60%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {/* Left Joyblue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/10 to-transparent" />
          {/* Desktop: text left, mobile: text bottom */}
          <div className="absolute left-0 top-0 h-full w-full">
            <div className="hidden md:flex items-center h-full w-1/3 px-8 md:px-12 text-white">
              <div className="w-full flex flex-col items-start justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold">{badgeTitle}</h2>
                <p className="mt-4 font-normal text-sm md:text-base lg:text-lg">{badgeDesc}</p>
              </div>
            </div>
            <div className="flex md:hidden items-end h-full w-full px-6 pb-8 text-white">
              <div className="w-full flex flex-col items-start justify-end">
                <h2 className="text-2xl font-semibold">{badgeTitle}</h2>
                <p className="mt-4 text-sm">{badgeDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <AdvancedImage cldImg={imgDis} /> */}
    </div>
  );
};

export default Hero;