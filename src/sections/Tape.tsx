import StarIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react';

const words = [
  "Perfomant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable"
]
export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex mask-image">
          <div className="flex gap-4 pr-4 animate-move-left [animation-duration:10s] flex-none py-3">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
              {words.map((word) => (
                <div key={word} className="inline-flex gap-4 items-center">
                  <span className="text-gray-900 uppercase font-extrabold text-sm">
                    {word}
                  </span>
                  <StarIcon className="size-6 text-gray-900 -rotate-12" />
                </div>
              ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};
