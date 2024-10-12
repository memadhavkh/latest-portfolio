import { twMerge } from "tailwind-merge"
import { TechIcon } from "./TechIcon"
import { Fragment } from "react"
import Image from "next/image"

export const ToolboxItems = ({items, className, itemsWrapperClassName}: {
    items: {
        title: string
        iconType: React.ElementType,
    }[],
    className?: string,
    itemsWrapperClassName?: string,
 
}) => {
    return (
        <div className={twMerge("flex mask-image", className)}>
            <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
            {...new Array(2).fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {items.map((item) => (
                  <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg">
                    {
                      typeof item.iconType === 'function' ? (
                        <TechIcon component={item.iconType} />
                        
                      ): (
                        <Image className="w-8 h-8" src={item.iconType} alt={item.title} />
                      )
                    }
                    <span className="font-semibold">{item.title}</span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
    )
}