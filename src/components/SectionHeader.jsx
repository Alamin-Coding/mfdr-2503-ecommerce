
const SectionHeader = ({subTitle, title}) => {
  return (
    <div className='space-y-6'>
        <h3 className='flex items-center gap-4'>
            <div className='h-10 w-5 rounded bg-secondary'></div>
            <span className='text-secondary font-semibold'>
                {subTitle}
            </span>
        </h3>
        <h2 className='text-[36px] text-black leading-none'>{title}</h2>
    </div>
  )
}

export default SectionHeader