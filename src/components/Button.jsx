import React from 'react'

const Button = ({ TagName = "button", children, className, outlate = false, secondary=false, ...props }) => {

    const button = ()=> {
        if (outlate) {
            return <TagName {...props} className={`bg-transparent border border-border text-black rounded py-4 px-12 cursor-pointer flex items-center justify-center gap-3 ${className}`}>
                    {children}
                </TagName>
        }
        if (secondary) {
            return <TagName {...props} className={`bg-[#00FF66] border border-[#00FF66] text-white rounded py-4 px-12 cursor-pointer flex items-center justify-center gap-3 ${className}`}>
                    {children}
                </TagName>
        }

        return <TagName {...props} className={`bg-secondary text-white rounded py-4 px-12 cursor-pointer text-center ${className}`}>
                    {children}
                </TagName>
    }

    return button()
}

export default Button