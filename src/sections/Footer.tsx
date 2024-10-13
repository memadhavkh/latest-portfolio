import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/memkh"
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/memadhavkhandelwal"
  },
  {
    title: "LeetCode",
    href: "https://leetcode.com/u/MeMadhavKhandelwal/"
  },
  {
    title: "Resume",
    href: "https://drive.google.com/file/d/1kdIaH_pFVdZjtrjNt_UzIXBeUi-C68sf/view?usp=sharing"
  },
]

export const Footer = () => {
  return (
    <footer className='relative overflow-x-clip'>
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container z-10">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>&copy; 2024. All Rights Reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8 relative z-0'>
            {footerLinks.map((link, idx) => (
              <div key={idx} className="relative group h-10 overflow-x-clip">
                <a key={link.title} href={link.href} className='inline-flex h-full items-center gap-1.5 relative after:absolute after:h-0.5 after:bg-white after:w-full after:transform after:-translate-x-full after:bottom-2 after:transition-transform after:duration-300 hover:after:translate-x-0'>
                  <span className='font-semibold cursor-pointer z-10'>{link.title}</span>
                  <ArrowUpRightIcon className="size-4 group-hover:rotate-45 transition duration-300" />
                </a>
              </div>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  )
};
