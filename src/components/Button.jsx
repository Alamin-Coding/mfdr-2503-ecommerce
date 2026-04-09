import React from 'react'

const Button = ({ TagName = "button", children, className, outlate = false, ...props }) => {
    return (
        <>

            {outlate ? (
                <TagName {...props} className={`bg-transparent border border-border text-black rounded py-4 px-12 cursor-pointer flex items-center justify-center gap-3 ${className}`}>
                    {children}
                </TagName>
            ) : (
                <TagName {...props} className={`bg-secondary text-white rounded py-4 px-12 cursor-pointer text-center ${className}`}>
                    {children}
                </TagName>
            )}



        </>
    )
}

export default Button