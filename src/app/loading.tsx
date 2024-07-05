export default function Loading() {
  return (
    <div className='dark:bg-theme_dark-main-bg dark:text-theme_dark-sup-sky flex items-center gap-4 justify-center w-full h-dvh bg-[#e8e8e8] text-7xl font-black text-light-500'>
      <span className='animate-[loading_1s_linear_infinite]'>.</span>
      <span className='animate-[loading_1s_linear_infinite] [animation-delay:200ms]'>
        .
      </span>
      <span className='animate-[loading_1s_linear_infinite] [animation-delay:400ms]'>
        .
      </span>
    </div>
  );
}
